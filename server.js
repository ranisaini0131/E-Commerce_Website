import connectDb from './db/dbConnect.js';
import productRouter from './routes/Product.js'
import categoryRouter from './routes/Category.js'
import brandRouter from './routes/Brands.js'
import userRouter from './routes/User.js'
import authRouter from './routes/Auth.js'
import cartRouter from './routes/Cart.js'
import User from './model/User.js';

import passport from 'passport';
import session from "express-session";
import LocalStrategy from 'passport-local'
import cors from 'cors'
import express from 'express'
const app = express();

const port = 9000

const url = "mongodb://127.0.0.1:27017";
connectDb(url);

//passport

app.use(session({
    secret: 'keyboard cat',
    resave: false, //don't save session if unmodified
    saveUninitialized: false, //don't create session until something stored
    // store: new session({ db: 'sessions.db', dir: './var/db' })
}));

app.use(passport.authenticate('session'))

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
app.use('/auth', authRouter)
app.use('/cart', cartRouter)

//Passport strategy 
passport.use(
    new LocalStrategy(async function (username, password, done) {
        //by default passport uses username
        try {
            const user = await User.findOne({ email: username });
            console.log(user, "53")

            if (user) {
                if (user.password === password) {
                    done(null, user)
                } else {
                    done(null, false, { message: "Invalid Email or Password" })
                }
            } else {
                done(null, false, { message: "User not found" })
            }
        } catch (error) {
            done(error)
            console.log(error.message)
        }

    })
)

//this creates session variables req.user on being called from callbacks
passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, { id: user.id, role: user.role });
    });
});

//this changes session variable req.user when called froma uthorized request
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        return cb(null, user);
    })
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})