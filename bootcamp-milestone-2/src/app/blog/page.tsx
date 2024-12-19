import React from "react";
import blogs from "@/static/blogData";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"; // Add styles for your blog list page

export default function BlogListPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <div className={styles.blogList}>
        {blogs.map((blog) => (
          <div key={blog.slug} className={styles.blogPreview}>
            {/* Link to the dynamic slug */}
            <Link href={`/blog/${blog.slug}`}>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
            </Link>
            <p className={styles.blogDate}><strong>Date:</strong> {blog.date}</p>
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
