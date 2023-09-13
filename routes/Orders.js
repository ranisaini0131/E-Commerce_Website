import express from 'express';
import { deleteOrder, getOrderByUser, updateOrder } from '../controller/Orders.js';



const router = express.Router();

router.post('/addOrder', createOrder)
router.get('/getOrderByUser/:user', getOrderByUser)
router.patch('/updateOrder/:user', updateOrder)
router.delete('/deletOrder/:user', deleteOrder)


export default router