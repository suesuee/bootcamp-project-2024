import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

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
    // Find the blog by slug in the database
    const blog = await blogSchema.findOne({ slug }).orFail();

    // // Format the date to match the "MM/dd/yyyy" format used in blogData.ts
    // const formattedBlog = {
    //   ...blog.toObject(),
    //   date: format(new Date(blog.date), 'MM/dd/yyyy'), // Format to match blogData.ts
    // };
    return NextResponse.json(blog); // Return the blog as JSON
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return NextResponse.json(
        { error: "Blog not found." }, 
        { status: 404 }
    );
  }
}
