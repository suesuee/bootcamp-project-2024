import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      <nav className={style.navbar}>
        {/* Logo aligned to the left */}
        <div className={style.logo}>
          <Link href="/">Sue's Website</Link>
        </div>

        {/* Navigation links aligned to the right */}
        <div className={style.navList}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
