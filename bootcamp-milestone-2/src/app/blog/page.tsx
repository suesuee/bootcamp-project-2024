import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

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

  // Render the blog list
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <div className={styles.blogList}>
        {blogs.map((blog: any) => (
          <div key={blog.slug} className={styles.blogPreview}>
            {/* Link to the dynamic slug */}
            <Link href={`/blog/${blog.slug}`}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
            </Link>
            <p className={styles.blogDate}><strong>Date:</strong> {new Date(blog.date).toLocaleDateString()}</p>
            <Image
              src={blog.image}
              alt={blog.imageAlt}
              width={500}
              height={300}
              className={styles.blogImage}
            />
            <p className={styles.blogDescription}>{blog.description}</p>
            {/* Read more link */}
            <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
