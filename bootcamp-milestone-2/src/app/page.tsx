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
          Hello, I'm <strong>Sue</strong>, a Computer Science student at California Polytechnic State University.
          I am from Myanmar, and I am a third-year transfer student from De Anza College in Cupertino.
        </p>
      </div>
    </div>
  );
}

