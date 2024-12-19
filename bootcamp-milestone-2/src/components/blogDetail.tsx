import React from "react";
import Image from "next/image";
import styles from "./blogDetail.module.css";

type BlogDetailProps = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function BlogDetail({
  title,
  date,
  description,
  image,
  imageAlt,
}: BlogDetailProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.blogDate}>
        <strong>Date:</strong> {date}
      </p>
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={450}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
    </div>
  );
}
