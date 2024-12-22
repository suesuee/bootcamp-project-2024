import mongoose, { Schema, Document, Model } from "mongoose";

// TypeScript type for a single comment
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

// TypeScript type for Project
export type Project = {
  name: string;
  slug: string;
  description: string; // Description of the project
  image: string; // URL for the image
  link: string; // GH Link to the project
  comments: IComment[]; // List of comments
};

// Mongoose Document type
export interface ProjectDocument extends Project, Document {}

// Mongoose schema
const projectSchema = new Schema<ProjectDocument>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true},
    },
  ],
});

// Collection and model def
const Project: Model<ProjectDocument> =
  mongoose.models["projects"] || mongoose.model<ProjectDocument>("projects", projectSchema);

export default Project;
