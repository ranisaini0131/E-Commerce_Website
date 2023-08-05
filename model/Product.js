import mongoose from "mongoose";

//create schema

const productSchema = new mongoose.Schema({

    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, min: [1, 'wrong min price'], max: [10000, 'wrong max price'] },
    discountPercentage: { type: Number, min: [1, 'wrong min discount'], max: [99, 'wrong max discount'] },
    rating: { type: Number, min: [0, 'wrong min rating'], max: [5, 'wrong max price'], default: 0 },
    stock: { type: Number, min: [0, 'wrong min stock'], default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: { type: [String], required: true },
    colors: { type: [mongoose.Types.Mixed] },
    sizes: { type: [mongoose.Types.Mixed] },
    highlights: { type: [String] },
    discountPrice: { type: Number },
    deleted: { type: Boolean, default: false },


});


const Product = mongoose.model("Product", productSchema);

export default Product;

