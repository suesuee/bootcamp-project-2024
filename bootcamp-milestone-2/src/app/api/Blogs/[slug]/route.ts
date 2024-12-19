import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";
import { format } from "date-fns"; // Install date-fns: npm install date-fns

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // Connect to the database
  const { slug } = params; // Extract the slug from params

  try {
    // Find the blog by slug in the database
    const blog = await blogSchema.findOne({ slug }).orFail();

    // // Format the date to match the "MM/dd/yyyy" format used in blogData.ts
    // const formattedBlog = {
    //   ...blog.toObject(),
    //   date: format(new Date(blog.date), 'MM/dd/yyyy'), // Format to match blogData.ts
    // };

    // Return the formatted blog as JSON
    return NextResponse.json(blog);
  } catch (err) {
    // Return a 404 response if the blog is not found
    return NextResponse.json("Blog not found.", { status: 404 });
  }
}
