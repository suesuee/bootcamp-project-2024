import mongoose, { Schema, Document } from "mongoose";

// Define the TypeScript type for a Project
export interface Project extends Document {
  name: string;
  description: string;
  image: string; // URL of the project image
  link: string; // Link to the project
}

// Define the Mongoose schema
const projectSchema = new Schema<Project>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

// Create the Mongoose model
const ProjectModel = mongoose.models.Project || mongoose.model<Project>("Project", projectSchema);

export default ProjectModel;
