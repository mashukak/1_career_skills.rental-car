import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from '../../redux/carsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    make: '',
    rentalPrice: '',
    mileageFrom: '',
    mileageTo: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Скидаємо сторінку на 1 при новому фільтрі
    dispatch(fetchCars({ ...filters, page: 1 }));
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <label>
        Car brand
        <select 
          name="make" 
          value={filters.make}
                  onChange={(e) => setFilters({ ...filters, make: e.target.value })}
                  placeholder="Choose a brand"
        >
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
          <option value="Audi">Audi</option>
        </select>
      </label>

      <label>
        Price/1 hour
        <select
          name="rentalPrice"
          value={filters.rentalPrice}
                  onChange={(e) => setFilters({ ...filters, rentalPrice: e.target.value })}
                  placeholder="Choose a price"
        >
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
          <option value="60">$60</option>
          <option value="70">$70</option>
          <option value="80">$80</option>
        </select>
      </label>
      Сar mileage / km
      <div className="mileage-filter">
        <label>
      
          <input
            type="number"
            name="mileageFrom"
            value={filters.mileageFrom}
            onChange={(e) => setFilters({...filters, mileageFrom: e.target.value})}
            placeholder="From"
          />
          <input
            type="number"
            name="mileageTo"
            value={filters.mileageTo}
            onChange={(e) => setFilters({...filters, mileageTo: e.target.value})}
            placeholder="To"
                  />                  
              </label>
      </div>

      <button type="submit">Search</button>
    </form>
  );
}