import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Socials', path: '/socials' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Agentic Lab</span>
        </Link>
        
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li key={item.name} className={styles.menuItem}>
              <Link href={item.path} className={styles.menuLink}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
