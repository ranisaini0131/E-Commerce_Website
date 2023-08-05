import mongoose from "mongoose";

//create schema

const brandSchema = new mongoose.Schema({

    label: { type: String, required: true, unique: true },
    value: { type: String, required: true, unique: true },

});


const Brand = mongoose.model("Brand", brandSchema);

export default Brand;

