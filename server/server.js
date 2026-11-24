import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import Product from "./models/productModel.js";

await connectDB();
const app = express();
app.use(cors());

// API End Points
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// SERVER
app.listen(3000, () => {
  console.log("server started at https://localhost:3000");
})
