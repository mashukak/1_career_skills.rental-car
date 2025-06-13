import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCars } from '../../redux/carsSlice'
import Filter from '../../components/Filter/Filter'
import CarCard from '../../components/CarCard/CarCard'

export default function Catalog() {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cars)
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchCars({ page, limit: 8 }))
  }, [dispatch, page])

  return (
    <div className="catalog">
      <Filter />
      <div className="car-list">
        {items.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>Load More</button>
    </div>
  )
}