import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../api/cars';
import Header from '../../components/Header/Header';
import CarDetailForm from '../../components/CarDetailForm/CarDetailForm';

export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    api.get(`/cars/${id}`).then(res => setCar(res.data));
  }, [id]);

  if (!car) return <p>Loading car details...</p>;

  return (
    <div>
      <Header />
      <img src={car.img} alt={car.make} width="400" />
      <h2>{car.make} {car.model}</h2>
      <p>{car.rentalPrice}</p>
      <p>Mileage: {Number(car.mileage).toLocaleString('uk-UA')} km</p>
      <p>Description: {car.description}</p>
      <CarDetailForm car={car} />
    </div>
  );
}
