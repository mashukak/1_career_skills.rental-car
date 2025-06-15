import { Link } from 'react-router-dom';
import styles from './CarCard.module.css';

export default function CarCard({ car }) {
  if (!car) return null;

  const {
    id,
    img = '',
    make = '',
    model = '',
    year = '',
    rentalPrice = '',
    address = '',
    type = '',
    mileage = '',
    fuelConsumption = '',
    engineSize = '',
    rentalCompany = '',
    functionalities = [],
    description = '',
    accessories = '',
    transmission = '',
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
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{make} <span>{model}, {year}</span></h3>
          <span className={styles.price}>{rentalPrice}</span>
        </div>

        <ul className={styles.details}>
          <li>{address}</li>
          <li>{type}</li>
          <li>{mileage} miles</li>
          <li>{fuelConsumption}</li>
          <li>{engineSize}</li>
          <li>{transmission}</li>
        </ul>
      </div>

      {id && (
        <Link to={`/catalog/${id}`} className={styles.detailsBtn}>
          View details
        </Link>
      )}
    </div>
  );
}
