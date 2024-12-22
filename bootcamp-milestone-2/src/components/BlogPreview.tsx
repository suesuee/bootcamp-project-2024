import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./BlogPreview.module.css";

// Define the Blog type based on your database schema
export type Blog = {
  title: string;
  date: string; // Use string to match how the date is stored in your database
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

export default function BlogPreview({
  title,
  date,
  description,
  image,
  imageAlt,
  slug,
}: Blog) {
  return (
    <div className={styles.blogPreview}>
      <h3>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <div className={styles.imageContainer}>
        <Image src={image} alt={imageAlt} width={500} height={300} />
      </div>
      <p>
        <strong>Date:</strong> {new Date(date).toLocaleDateString()}
      </p>
      <p>{description}</p>
    </div>
  );
}
