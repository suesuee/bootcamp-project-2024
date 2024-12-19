import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogPreview.module.css";
import type { Blog } from "@/static/blogData";

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
  return (
    <div className={styles.blogPreview}>
      <h3>
        <Link href={`/blog/${slug}`}>{title}</Link> {/* Link to dynamic blog page */}
      </h3>
      <div className={styles.imageContainer}>
        <Image src={image} alt={imageAlt} width={500} height={300} />
      </div>
      <p><strong>Date:</strong> {date}</p>
      <p>{description}</p>
    </div>
  );
}
