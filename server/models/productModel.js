import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  image: String,
  name: String,
  info: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);

export default Product;
