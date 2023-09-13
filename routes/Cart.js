import express from 'express';
import { addToCart, getCartByUser, updateCart, deleteCart } from '../controller/Cart.js';


const router = express.Router();

router.post('/addCart', addToCart)
router.get('/getCartByUser/:user', getCartByUser)
router.patch('/updateCart/:user', updateCart)
router.delete('/deletCart/:user', deleteCart)


export default router