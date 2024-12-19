import mongoose, { Schema, Document, Model } from "mongoose";

// TypeScript type for Blog
export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // For preview
  image: string; // URL for image in `public`
  imageAlt: string; // Alt text for the image
};

// Mongoose Document type (extends Blog to include Mongoose's fields like `_id`)
export interface BlogDocument extends Blog, Document {}

// Mongoose schema
const blogSchema = new Schema<BlogDocument>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
});

// Define the collection and model
const Blog: Model<BlogDocument> =
  mongoose.models["blogs"] || mongoose.model<BlogDocument>("blogs", blogSchema);

export default Blog;
