import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  posted: Date,
  slug: { type: String, unique: true },
  comments: [commentSchema],
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
