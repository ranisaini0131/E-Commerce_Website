import mongoose from "mongoose";

//create schema

const UserSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: true },
    addresses: { type: [mongoose.Types.Mixed] },
    name: { type: String },
    orders: { type: [mongoose.Types.Mixed] } //misex is data type in json

});


const User = mongoose.model("User", UserSchema);

export default User;

