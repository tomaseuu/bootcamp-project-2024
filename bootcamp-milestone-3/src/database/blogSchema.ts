import mongoose, { Schema } from "mongoose";

type Blog = {
  name: string;
  description: string;
  posted: Date;
  image: string;
  slug: string;
};

const blogSchema = new Schema<Blog>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  posted: { type: Date, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
