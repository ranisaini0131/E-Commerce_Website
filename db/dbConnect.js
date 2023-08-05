import mongoose from 'mongoose'


const connectDb = async (url) => {
    try {
        const dbOption = {
            dbName: "E-Commerce"
        }
        await mongoose.connect(url, dbOption)
        console.log("DB connected to mongodb")
    } catch (error) {
        console.log(error)
    }
}

export default connectDb

