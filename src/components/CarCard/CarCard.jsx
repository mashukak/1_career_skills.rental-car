import { useDispatch } from 'react-redux'
import { addToFavorites } from '../../redux/favoritesSlice'

export default function CarCard({ car }) {
  const dispatch = useDispatch()

  const formatMileage = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <div className="car-card">
      <img src={car.img} alt={car.make} />
      <button onClick={() => dispatch(addToFavorites(car))}>❤️</button>
      <h3>{car.make} {car.model}</h3>
      <p>Price: ${car.rentalPrice}</p>
      <p>Mileage: {formatMileage(car.mileage)} km</p>
    </div>
  )
}