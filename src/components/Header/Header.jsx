import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>RentalCar</span>
      </Link>
          <nav>
          <Link to="/">Home</Link>
          <Link to="/catalog">Catalog</Link>
              
      </nav>
    </header>
  );
}