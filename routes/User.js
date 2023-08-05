import express from 'express'
import { createUser, getUserById, updateUser } from '../controller/User.js';

const router = express.Router();

router.post('/user', createUser)
router.get('/getUser', getUserById)
router.get('/updateUser', updateUser)





export default router;