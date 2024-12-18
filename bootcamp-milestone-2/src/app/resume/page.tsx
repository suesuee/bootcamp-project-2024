import React from "react";
import Link from "next/link";
import styles from "./resume.module.css"; // Import CSS module if styling is separate

export default function Resume() {
  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <Link href="/">Sue's Website</Link>
        </h1>
        <ul className={styles.navList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <h1 className={styles.pageTitle}>Resume</h1>
        <div className={styles.resume}>
          <a href="/resume.pdf" download="Sue_Resume.pdf" className={styles.button}>
            Download Resume
          </a>
        </div>
        <div className={styles.resumeDisplay}>
          <iframe src="/resume.pdf" title="Resume" className={styles.iframe}></iframe>
        </div>
      </main>

      <br />

      {/* Footer */}
      <footer className={styles.footer}>
        © 2024 Sue's Website | All Rights Reserved
      </footer>
    </>
  );
}
