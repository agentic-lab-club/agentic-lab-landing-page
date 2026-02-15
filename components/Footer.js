import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p>Agentic Lab • AI Community</p>
          <p className={styles.version}>created with Agentic Lab - Core Team</p>
        </div>
      </div>
    </footer>
  );
}
