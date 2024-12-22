import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  await connectDB(); // Ensure database connection

  const { slug } = params; // Extract blog slug from URL
  const body = await req.json(); // Parse JSON body

  // Validate the comment body
  if (!body || !body.comment || !body.author) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  try {
    // Add comment to the blog document
    const updatedBlog = await blogSchema.findOneAndUpdate(
      { slug }, // Find the blog by slug
      { $push: { comments: { text: body.comment, author: body.author, date: new Date() } } }, // Append comment
      { new: true } // Return updated document
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Comment added", blog: updatedBlog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
