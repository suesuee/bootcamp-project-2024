import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

export async function POST(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  await connectDB();

  try {
    const { slug } = context.params; 
    const body = await req.json();
    const { user, comment } = body;

    // Validate input
    if (!user || !comment) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Append the comment
    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, time: new Date() } } },
      { new: true } // Return the updated document
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
