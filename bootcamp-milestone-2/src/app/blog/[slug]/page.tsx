import blogs from "@/static/blogData"; // Import blog data
import { notFound } from "next/navigation"; // Handle invalid slugs
import Image from "next/image";
import styles from "./page.module.css"; // CSS module for the blog page

export default function BlogPage({ params }: { params: { slug: string } }) {
  console.log("Received params:", params); // Debug log
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound(); // Renders a 404 page if the blog isn't found
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.date}><strong>Date:</strong> {blog.date}</p>
      <Image src={blog.image} alt={blog.imageAlt} width={800} height={450} className={styles.image} />
      <p className={styles.description}>{blog.description}</p>
    </div>
    
  );
}
