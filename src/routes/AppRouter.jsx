import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home';
import CatalogPage from '../pages/Catalog/Catalog';
import CarDetailPage from '../pages/CarDetails/CarDetails';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarDetailPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
