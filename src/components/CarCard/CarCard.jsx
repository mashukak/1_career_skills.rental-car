import { Link } from 'react-router-dom';
import styles from './CarCard.module.css';

export default function CarCard({ car }) {
  if (!car) return null;

  const {
    id,
    img = '',
    make = '',
    model = '',
    rentalPrice = 0,
    address = ''
  } = car;

  return (
    <div className={styles.card}>
      {img && (
        <img
          src={img}
          alt={`${make} ${model}`}
          className={styles.image}
          onError={e => { e.target.style.display = 'none'; }}
        />
      )}
      <div className={styles.info}>
        <h3>{make} {model}</h3>
        <p className={styles.price}>${rentalPrice}</p>
      </div>
      <p className={styles.address}>{address}</p>
      {id && (
        <Link to={`/catalog/${id}`} className={styles.detailsBtn}>
          View details
        </Link>
      )}
    </div>
  );
}
