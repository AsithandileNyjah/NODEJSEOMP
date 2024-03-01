import express from 'express';

import {addOne,getAll,eUser,prodAdd,editOne, getOne, getProdss, getPr1, delOne, delProd, valFun} from '../controller/controller.js';

const router = express.Router()

router.route('/users').post(addOne)
        
router.route('/users').get(getAll);

router.route('/users/:userID').get(getOne)

router.route('/users/:userID').patch(eUser)

router.route('/users/:userID').delete(delOne)

router.route('/products').post(prodAdd)

router.route('/products').get(getProdss)

router.route('/products/:productID').patch(editOne)
router.route('/products/:productID').get(getPr1)
router.route('/products/:productID').delete(delProd)

router.route('/login').post(valFun)

export default router