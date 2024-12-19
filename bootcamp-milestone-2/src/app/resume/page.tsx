import React from "react";
import styles from "./resume.module.css";

export default function Resume() {
  return (
    <main className={styles.container}>
      {/* Resume Title */}
      <h1 className={styles.title}>Resume</h1>

      {/* Download Button */}
      <div className={styles.buttonContainer}>
        <a
          href="/resume.pdf" 
          download="Sue_Resume.pdf"
          className={styles.downloadButton}
        >
          Download Resume
        </a>
      </div>

      {/* Embedded PDF */}
      <div className={styles.pdfContainer}>
        <iframe
          src="/resume.pdf"
          title="Sue's Resume"
          className={styles.pdfFrame}
        ></iframe>
      </div>
    </main>
  );
}
