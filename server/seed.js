import connectDB from "./config/db.js";
import Product from "./models/productModel.js";

const db = await connectDB();

await Product.deleteMany({});

await Product.insertMany([
  {
    "image": "🍎",
    "name": "apple",
    "info": "tasty red apple",
    "price": 20
  },
  {
    "image": "🍌",
    "name": "banana",
    "info": "smooth banana",
    "price": 30
  },
  {
    "image": "🍇",
    "name": "grapes",
    "info": "ripe grapes",
    "price": 10
  },
  {
    "image": "🍉",
    "name": "watermelon",
    "info": "waterfull watermelon",
    "price": 50
  },
]);

console.log("Products inserted successfully!");

await db.disconnect();
