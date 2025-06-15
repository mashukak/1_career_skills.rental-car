import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/carsThunks';
import { incrementPage } from '../../redux/carsSlice';
import CarCard from '../../components/CarCard/CarCard';
import Loader from '../../components/Loader/Loader';
import FilterBar from '../../components/FilterBar/FilterBar';
import Header from '../../components/Header/Header';
import styles from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const { items, loading, page, total, filters } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch, filters, page]);

  const handleLoadMore = useCallback(() => {
    if (!loading && items.length < total) {
      dispatch(incrementPage());
    }
  }, [loading, items.length, total, dispatch]);

  const showLoadMore = !loading && items.length < total;

  return (
    <div>
      <Header />
      <main className={styles.catalog}>
        <FilterBar />

        <section className={styles.carGrid}>
          {items.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </section>

        {loading && <Loader />}

        {showLoadMore && (
          <button
            onClick={handleLoadMore}
            className={styles.loadMore}
            style={{
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '20px',
              letterSpacing: '0%',
              width: '80px',
              height: '20px'
            }}
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
}
