import { NextResponse } from "next/server";
import connectDB from "@/database/db";
import ProjectModel from "@/database/projectSchema";

export async function GET() {
  await connectDB();

  try {
    // Fetch all projects from db
    const projects = await ProjectModel.find().sort({ name: 1 }).lean();
    return NextResponse.json(projects); // Return all projects as JSON
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
