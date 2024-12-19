import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <>
      <main className={styles.portfolioMain}>
        <h1 className={styles.pageTitle}>Portfolio</h1>
        <div className={styles.projectContainer}>
          <div className={styles.project}>
            <a href="/" className={styles.projectImageLink}>
              <img
                src="/img/portfolio.jpg"
                alt="A pic of my webpage"
                className={styles.projectImage}
              />
            </a>
            <div className={styles.projectDetails}>
              <p className={styles.projectName}>
                <strong>Sue's personal website</strong>
              </p>
              <p className={styles.projectDescription}>
                This is my personal website.
              </p>
              <a href="/" className={styles.learnMore}>
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
