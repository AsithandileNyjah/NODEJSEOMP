import {addUser, getUsers, getUser, addProd, editProd, editUser, getProds, getProd, delUser, delProduct, checkUser} from '../models/database.js'
import bcrypt from 'bcrypt'
import { validate } from '../middleware/middleware.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

const addOne = async(req,res)=>{
    const{firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile} = req.body
    bcrypt.hash(userPass,10, async (err,hash)=>{
        if(err) throw err
        await addUser(firstName, lastName, userAge, userGender, emailAdd, hash, userProfile)
        res.send({
            msg: "You have created an account"
        })
    }) 
}

const getAll = async(req,res)=>{
    res.send(await getUsers())
}

const getOne = async(req,res)=>{
    res.send(await getUser(+req.params.userID))
}

const eUser = async(req,res)=>{
    let {firstName, lastName, userAge, userGender, emailAdd, userProfile} = req.body
    const [user] = await getUser(+req.params.userID)
    firstName ? firstName=firstName: {firstName}=user,
    lastName ? lastName=lastName: {lastName}=user,
    userAge ? userAge=userAge: {userAge}=user,
    userGender ? userGender=userGender: {userGender}=user,
    emailAdd ? emailAdd=emailAdd: {emailAdd}=user,
    userProfile ? userProfile=userProfile: {userProfile}=user
    console.log(user);
    await editUser(firstName, lastName, userAge, userGender, emailAdd, userProfile, +req.params.userID)
    res.json(await getUsers()) 
}

const prodAdd = async(req,res)=>{
    const{productName, quantity, productPrice, category, productUrl} = req.body
    console.log(req.body);
    await addProd(productName, quantity, productPrice, category, productUrl)
    res.send({
        msg:"You have added a product"
    })
}

const getProdss = async (req, res) => {
    const products = await getProds();
    res.send(products);
}

const getPr1 = async(req,res)=>{
    res.send(await getProd(+req.params.productID))
}


const editOne = async (req, res) => {
    const [product] = await getProd(+req.params.productID)
    let { productName, quantity, productPrice, category, productUrl } = req.body;
    productName ? productName=productName: {productName}=product.productName
    quantity ? quantity=quantity: {quantity}=product.quantity
    productPrice ? productPrice=productPrice: {productPrice}=product.productPrice
    category ? category=category: {category}=product.category
    productUrl ? productUrl=productUrl: {productUrl}=product.productUrl
    await editProd(productName, quantity, productPrice, category, productUrl, +req.params.productID);
    res.status(200).json({ 
        success: true,
        msg: "Product successfully updated"
    });     
};


const delOne = async (req,res)=>{
    await delUser(+req.params.userID)
    res.send(await getUsers())
}

const delProd = async (req,res)=>{
    await delProduct(+req.params.productID)
    res.send(await getProds())
}

const valFun = async (req, res, validate) => {
    try {
        const { userPass, userProfile } = req.body;
        if (!userPass || typeof userPass !== 'string') {
            throw new Error('Invalid password');
        }

        const hashedPassword = await checkUser(userProfile);
        if (!hashedPassword) {
            throw new Error('Invalid hashed password');
        }

        bcrypt.compare(userPass, hashedPassword, (err, result) => {
            if (err) {
                throw err;
            }
            if (result === true) {
                const token = jwt.sign({ userProfile: userProfile }, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.cookie('jwt', token, { httpOnly: false });
                res.send({
                    token: token,
                    msg: "YAY! You have logged in."
                });
                validate();
            } else {
                res.send({
                    msg: "The password or username is incorrect"
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "An error occurred"
        });
    }
};

export{addOne, getAll, getOne, eUser, prodAdd, editOne, getProdss,getPr1,delOne,delProd, valFun}
