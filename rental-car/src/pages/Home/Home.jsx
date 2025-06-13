import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <div className="cta-section">
        <Link to="/catalog " className="cta-button">
          View Catalog
        </Link>
      </div>
    </main>
  );
}