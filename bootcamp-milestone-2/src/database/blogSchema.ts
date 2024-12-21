import mongoose, { Schema, Document, Model } from "mongoose";

// TypeScript type for a single comment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type for Blog
export type Blog = {
  title: string;
  slug: string;
  date: Date;
  description: string; // For preview
  image: string; // URL for image 
  imageAlt: string; // Alt text for the image
  comments: IComment[] // List of comments
};

// Mongoose Document type
export interface BlogDocument extends Blog, Document {}

// Mongoose schema
const blogSchema = new Schema<BlogDocument>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageAlt: { type: String, required: true },
  comments: [
    {
      users: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    }
  ]
});

// collection and model Def
const Blog: Model<BlogDocument> =
  mongoose.models["blogs"] || mongoose.model<BlogDocument>("blogs", blogSchema);

export default Blog;
