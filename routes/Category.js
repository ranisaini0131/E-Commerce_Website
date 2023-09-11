import express from 'express'
import { createCategory, getAllCategory } from '../controller/Category.js';

const router = express.Router();

router.get('/getCategories', getAllCategory)
router.post('/postCategory', createCategory)











export default router;