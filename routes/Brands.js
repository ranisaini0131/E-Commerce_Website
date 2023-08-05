import express from 'express'
import { createBrands, getAllBrands } from '../controller/Brand.js'

const router = express.Router();


// router.post('/product', createProduct)//can be created we want to add brands
router.get('/getBrands', getAllBrands)
router.post('/postBrand', createBrands)





export default router;