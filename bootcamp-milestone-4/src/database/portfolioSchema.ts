import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const portfolioSchema = new mongoose.Schema({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  comments: [commentSchema],
});

const Portfolio =
  mongoose.models.Portfolio || mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;

  