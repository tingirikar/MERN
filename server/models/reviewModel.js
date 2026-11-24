import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: String,
  content: String,
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
