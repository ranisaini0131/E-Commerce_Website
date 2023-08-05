import connectDb from './db/dbConnect.js';
import productRouter from './routes/Product.js'
import categoryRouter from './routes/Category.js'
import brandRouter from './routes/Brands.js'
import userRouter from './routes/User.js'


import cors from 'cors'
import express from 'express'
const app = express();

const port = 9000

const url = "mongodb://127.0.0.1:27017";
connectDb(url);

//middleware  for json data
app.use(express.json());
app.use(cors({
    exposedHeaders: ['X-Total-Count']
}))

//middleware for routes
app.use('/products', productRouter)
app.use('/categories', categoryRouter)
app.use('/brands', brandRouter)
app.use('/users', userRouter)

app.get('/', (req, res) => {
    res.json({ status: "success" })
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})