import { notFound } from "next/navigation";
import BlogDetail from "@/components/BlogDetail";

async function getSingleBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
      cache: "no-store", // Fetch fresh data each time
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog with slug: ${slug}`);
    }

    return res.json(); // Return the blog data as JSON
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null; // Return null if fetching fails
  }
}

// Dynamic blog page
export default async function BlogPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const blog = await getSingleBlog(params.slug); // Fetch the blog using slug

  if (!blog) {
    notFound(); // Trigger 404 if blog is not found
  }

  return (
    <BlogDetail
      title={blog.title}
      date={new Date(blog.date).toLocaleDateString()}
      description={blog.description}
      image={blog.image}
      imageAlt={blog.imageAlt}
    />
  );
}
