import { notFound } from "next/navigation";
import BlogDetail from "../../../components/BlogDetail";

async function getSingleBlog(slug: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/Blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blog with slug: ${slug}`);
    }

    return res.json();
  } catch (err) {
    console.error(`Error fetching blog: ${err}`);
    return null;
  }
}

// Dynamic blog page
export default async function BlogPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const blog = await getSingleBlog(params.slug); // Fetch the blog using slug

  if (!blog) {
    notFound();
  }

  return (
    <div style={{ padding: "20px" }}>
      <BlogDetail
        title={blog.title}
        date={new Date(blog.date).toLocaleDateString()}
        description={blog.description}
        image={blog.image}
        imageAlt={blog.imageAlt}
        comments={blog.comments || []} // Pass the comments array to BlogDetail
        slug={params.slug} // Pass slug to BlogDetail
      />
    </div>
  );
}
