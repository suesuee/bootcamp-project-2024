import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import projectSchema from "@/database/projectSchema";

type IParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(req: NextRequest, props: IParams) {
  const params = await props.params;
  await connectDB();
  const { slug } = params; // Extract the slug from params

  try {
    // Find the project by slug in the database
    const project = await projectSchema.findOne({ slug }).orFail();

    return NextResponse.json(project); // Return the blog as JSON
  } catch (err) {
    console.error("Error fetching projects:", err);
    return NextResponse.json(
        { error: "Project not found." }, 
        { status: 404 }
    );
  }
}
