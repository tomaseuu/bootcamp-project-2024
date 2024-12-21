import mongoose, { Schema } from "mongoose";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type Blog = {
  name: string;
  description: string;
  posted: Date;
  image: string;
  slug: string;
  comments: IComment[];
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, required: true },
});

const blogSchema = new Schema<Blog>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  posted: { type: Date, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  comments: { type: [commentSchema], default: [] },
});

const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);
export default Blog;
