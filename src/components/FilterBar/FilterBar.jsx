import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/carsSlice';
import styles from './FilterBar.module.css';

export default function FilterBar() {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mFrom, setMFrom] = useState('');
  const [mTo, setMTo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilters({
      brand, price, mileageFrom: mFrom, mileageTo: mTo,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <select value={brand} onChange={e => setBrand(e.target.value)}>
        <option value="" disabled>Choose a brand</option>
        <option value="Aston Martin">Aston Martin</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Bentley">Bentley</option>
        <option value="Buick">Buick</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Chrysler">Chrysler</option>
        <option value="GMC">GMC</option>
        <option value="HUMMER">HUMMER</option>
        <option value="Volvo">Volvo</option>
        <option value="Subaru">Subaru</option>
      </select>

      <select value={price} onChange={e => setPrice(e.target.value)}>
        <option value="" disabled>Choose a price</option>
        {Array.from({ length: 13 }, (_, i) => (30 + i * 10)).map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Mileage from"
        value={mFrom}
        onChange={e => setMFrom(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mileage to"
        value={mTo}
        onChange={e => setMTo(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}
