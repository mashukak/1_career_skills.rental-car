import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/carsThunks';
import { incrementPage } from '../../redux/carsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CarCard from '../../components/CarCard/CarCard';
import Loader from '../../components/Loader/Loader';
import FilterBar from '../../components/FilterBar/FilterBar';
import Header from '../../components/Header/Header';
import LoadMoreButton from '../../components/LoadMoreButton/LoadMoreButton';
import styles from './Catalog.module.css';

export default function Catalog() {
  const dispatch = useDispatch();
  const { items, loading, page, total, filters } = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch, filters, page]);

  const handleLoadMore = useCallback(() => {
    if (loading) return;

    if (items.length < total) {
      dispatch(incrementPage());
    } else {
      toast.info('🚗 Усі машини вже завантажено!', {
        position: 'bottom-center',
        autoClose: 3000,
      });
    }
  }, [dispatch, items.length, total, loading]);

  return (
    <div>
      <Header />
      <main className={styles.catalog}>
        <FilterBar />

        <section className={styles.carGrid}>
          {items.length === 0 && !loading && <p>No cars found.</p>}
          {items.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </section>

        {loading && <Loader />}
        <LoadMoreButton onClick={handleLoadMore} disabled={loading} />
      </main>

      <ToastContainer />
    </div>
  );
}
