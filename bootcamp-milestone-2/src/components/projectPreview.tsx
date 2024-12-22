import React from "react";
import Link from "next/link";
import styles from "./ProjectPreview.module.css";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string; // External link (e.g., GitHub)
  slug: string; // Slug for dynamic routing
};

export default function ProjectPreview({ name, description, image, link, slug }: ProjectProps) {
  return (
    <div className={styles.project}>
      {/* Image links to dynamic project page */}
      <Link href={`/portfolio/${slug}`}>
        <img src={image} alt={name} className={styles.projectImage} />
      </Link>
      <div className={styles.projectDetails}>
        {/* Name links to dynamic project page */}
        <p className={styles.projectName}>
          <Link href={`/portfolio/${slug}`}>
            <strong>{name}</strong>
          </Link>
        </p>
        <p className={styles.projectDescription}>{description}</p>
        {/* External link (e.g., GitHub link) */}
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.learnMore}>
          GITHUB LINK
        </a>
      </div>
    </div>
  );
}
