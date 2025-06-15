import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function HomePage() {
  return (
    <div>
    <Header />
    <main className={styles.home}>
    <h1>Find your perfect rental car</h1>
        <p className={styles.subtitle} >Reliable and budget-friendly rentals for any journey</p>
      <Link to="/catalog">
          <button className={styles.viewСatalog}>View Catalog</button>
      </Link>
      </main>
      </div>
  );
}
