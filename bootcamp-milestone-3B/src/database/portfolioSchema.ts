import mongoose, { Schema } from "mongoose";

type Portfolio = {
  src: string;
  alt: string;
  caption: string;
};

const portfolioSchema = new Schema<Portfolio>({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  caption: { type: String, required: true },
});

const Portfolio =
  mongoose.models["portfolio"] ||
  mongoose.model("portfolio", portfolioSchema);

export default Portfolio;
