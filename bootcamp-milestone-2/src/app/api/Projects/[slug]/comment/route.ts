import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Portfolio from "@/database/projectSchema";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  await connectDB();

  try {
    const { slug } = await context.params;
    const body = await req.json();
    const { user, comment } = body;

    // Validate input
    if (!user || !comment) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    // Append the comment
    const updatedPortfolio = await Portfolio.findOneAndUpdate(
      { slug },
      { $push: { comments: { user, comment, time: new Date() } } },
      { new: true }
    );

    if (!updatedPortfolio) {
      return NextResponse.json(
        { error: "Portfolio not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Comment added successfully" });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
