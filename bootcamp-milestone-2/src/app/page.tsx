// import Image from "next/image";
// import styles from "./page.module.css";

import Image from 'next/image';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Welcome ~</h1>
      <div className={styles.profileSection}>
        <Image
          src="/img/profile.jpg" 
          alt="Profile picture"
          width={150} 
          height={150} 
          className={styles.profileImage}
        />
        <p className={styles.description}>
          Hi, I'm <strong>Sue</strong>, a Computer Science student at California Polytechnic State University.
          I am from Myanmar, and I am a third-year transfer student from De Anza College in Cupertino.
          I'm passionate about technology, particularly in AI, software development, and hands-on projects.
          I'm always looking for new challenges to learn and grow, whether it's working on coding projects or
          exploring digital tools like 3D printing. This site showcases my projects, experiences, and what I'm working
          on as I continue my journey in tech.
        </p>
      </div>
    </div>
  );
}

