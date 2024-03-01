import {pool} from '../config/config.js'


const addUser = async(firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile)=>{
    await pool.query(`
    INSERT INTO users (firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile)
    VALUE (?,?,?,?,?,?,?);
    `,[firstName, lastName, userAge, userGender, emailAdd, userPass, userProfile])
}

const getUsers = async (req,res)=>{
    const [users] = await pool.query(`
    SELECT * 
    FROM users
    `)
    return users
}

const getUser = async (userID)=>{
    const [user] = await pool.query(`
    SELECT * 
    FROM users WHERE userID = ?
    `,[userID])
    return user
}

const editUser = async(firstName, lastName, userAge, userGender, emailAdd, userProfile, userID)=>{
    const [editedUser] = await pool.query(`
    UPDATE users SET 
    firstName = ?, 
    lastName = ?, 
    userAge = ?,  
    userGender = ?, 
    emailAdd = ?, 
    userProfile = ?
    WHERE userID = ?`,[firstName, lastName, userAge, userGender, emailAdd, userProfile, userID])
    return editedUser
}

const addProd = async(productName, quantity, productPrice, category, productUrl)=>{
    await pool.query(`
    INSERT INTO products (productName, quantity, productPrice, category, productUrl)
     VALUES (?, ?, ?, ?,?);
    `,[productName, quantity, productPrice, category, productUrl])
}

const getProds = async(req,res)=>{
    const [products] = await pool.query(`
    SELECT * 
    FROM products
    `)
    return products
}

const getProd = async(productID)=>{
    const [product] = await pool.query(`
    SELECT * 
    FROM products WHERE productID = ?
    `,[productID])
    return product
}

const editProd = async (productName, quantity, productPrice, category, productUrl, productID) => {
    const [edit] = await pool.query(`
    UPDATE products SET 
    productName = ?, 
    quantity = ?, 
    productPrice = ?, 
    category = ?, 
    productUrl = ?
    WHERE productID = ?;
    `, [productName, quantity, productPrice, category, productUrl, productID]);
    return edit;
};

const delUser = async(userID)=>{
    const [result] = await pool.query(`
    DELETE FROM users
    WHERE userID = ?  
    `,[userID])
    return result
}

const delProduct = async(productID)=>{
    const [result] = await pool.query(`
    DELETE FROM products
    WHERE productID = ?   
    `,[productID])
    return result
}

const checkUser = async(userProfile)=>{
    const [[{userPass}]] = await pool.query(`
    SELECT userPass
    FROM users
    WHERE userProfile = ?
    `,[userProfile])
    return userPass
}
export{addUser, getUsers, getUser, addProd,getProds,getProd, editProd, editUser, delUser, delProduct, checkUser}
