import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p className={styles.version}>Agentic Lab • AI Community • created by Core Team</p>
        </div>
      </div>
    </footer>
  );
}
