import express from 'express'
import { registerUser, loginUser } from '../controller/Auth.js';
import passport from 'passport';


const router = express.Router()



// router.post('/product', createProduct)//can be created we want to add brands
router.post('/signup', registerUser)
router.post('/login', loginUser) //passport.authenticate('local'),





export default router;