import Link from 'next/link';
import styles from './Header.module.sass';

const Header = () => (
  <header className={styles.root}>
    <nav className={styles.navList}>
      <Link href="/">
        <a className={styles.link}>Список новостей</a>
      </Link>
    </nav>
  </header>
)

export default Header;
