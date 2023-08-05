import express from 'express'
import { createProduct, getProduct, getProductById, updateProduct } from '../controller/Products.js';


const router = express.Router();

router.post('/product', createProduct)
router.get('/getproduct', getProduct)
router.get('/getproductId/:id', getProductById)
router.patch('/updateProduct/:id', updateProduct)











export default router;