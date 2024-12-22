import React from "react";
import Image from "next/image";
import styles from "./ProjectDetail.module.css";

type ProjectDetailProps = {
  name: string;
  slug: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectDetail({
  name,
  description,
  image,
  link,
}: ProjectDetailProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{name}</h1>
      <Image
        src={image}
        alt={name}
        width={800}
        height={450}
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        View Project
      </a>
    </div>
  );
}
