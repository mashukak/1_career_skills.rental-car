import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <span className={styles.rental}>Rental</span>
          <span className={styles.car}>Car</span>
        </div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
