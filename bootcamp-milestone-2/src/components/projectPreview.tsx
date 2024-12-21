import React from "react";
import styles from "./ProjectPreview.module.css";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  link: string;
};

export default function ProjectPreview({ name, description, image, link }: ProjectProps) {
  return (
    <div className={styles.project}>
      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.projectImageLink}>
        <img src={image} alt={name} className={styles.projectImage} />
      </a>
      <div className={styles.projectDetails}>
        <p className={styles.projectName}>
          <strong>{name}</strong>
        </p>
        <p className={styles.projectDescription}>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.learnMore}>
          LEARN MORE
        </a>
      </div>
    </div>
  );
}
