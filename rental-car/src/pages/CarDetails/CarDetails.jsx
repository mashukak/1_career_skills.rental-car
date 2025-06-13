import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RentalConditions from '../../components/RentalConditions/RentalConditions';

export default function CarDetails() {
  const { id } = useParams();
  const car = useSelector(state => 
    state.cars.items.find(item => item._id === id)
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Тут запит до API для бронювання
    alert('Car rented successfully!');
  };

  if (!car) return <div>Loading...</div>;

  return (
    <div className="car-details">
      <img src={car.img} alt={`${car.make} ${car.model}`} />
      
      <div className="car-info">
        <h2>{car.make} {car.model}</h2>
        <p>Year: {car.year}</p>
        <p>Mileage: {car.mileage.toLocaleString()} km</p>
        <p>Price: ${car.rentalPrice}/day</p>
      </div>

      <form onSubmit={handleSubmit} className="rental-form">
        <input
          type="text"
          placeholder="Full name"
          required
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="tel"
          placeholder="Phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
        <button type="submit">Rent now</button>
      </form>

      <RentalConditions conditions={car.rentalConditions} />
    </div>
  );
}