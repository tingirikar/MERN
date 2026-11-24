import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import Product from "./models/productModel.js";
import Review from "./models/reviewModel.js";

await connectDB();
const app = express();

app.use(cors());
app.use(express.json());

// API End Points
// PRODUCTS
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// REVIEWS
app.get("/reviews", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

app.post("/reviews", async (req, res) => {
  const data = req.body;
  const review = await Review.create(data);
  res.status(201).json(review);
});

app.delete("/reviews/:id", async(req, res) => {
  const id = req.params.id;
  const review = await Review.findByIdAndDelete(id);
  if (!review) return res.status(404).json({ message: "review not found."})
  res.json({ message: "successfully deleted." });
});

// SERVER
app.listen(3000, () => {
  console.log("server started at http://localhost:3000");
});
