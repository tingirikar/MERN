import mongoose from "mongoose";

let db;

export default async function connectDB() {
  if (db) return db;
  db = await mongoose.connect("mongodb://localhost:27017/mern");
  return db;
}
