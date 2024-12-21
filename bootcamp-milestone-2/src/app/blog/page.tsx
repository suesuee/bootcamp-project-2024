import React from "react";
import styles from "./page.module.css";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";
import BlogPreview from "@/components/BlogPreview";

// Function to fetch blogs from MongoDB
async function getBlogs() {
  await connectDB(); // Connect to the database

  try {
    const blogs = await Blog.find().sort({ date: -1 }).orFail(); // Fetch and sort blogs
    return JSON.parse(JSON.stringify(blogs)); // Convert Mongoose documents to plain objects
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return null; // Return null if an error occurs
  }
}

export default async function BlogListPage() {
  const blogs = await getBlogs(); // Fetch blogs dynamically

  // Handle the case where no blogs are found or an error occurs
  if (!blogs) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Blog Posts</h1>
        <p>No blog posts available. Please check back later.</p>
      </main>
    );
  }

  // Render the blog list using BlogPreview
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <div className={styles.blogList}>
        {blogs.map((blog: any) => (
          <BlogPreview
            key={blog.slug}
            title={blog.title}
            date={new Date(blog.date).toLocaleDateString()}
            description={blog.description}
            image={blog.image}
            imageAlt={blog.imageAlt}
            slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
