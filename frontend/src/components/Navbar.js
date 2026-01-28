import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__logo">Sayri</h2>

      <div className="navbar__links">
        <Link className="navbar__link" to="/">Inicio</Link>
        <Link className="navbar__link" to="/servicios">Servicios</Link>
        <Link className="navbar__link" to="/corporativos">Corporativos</Link>
        <Link className="navbar__link" to="/blog">Blog</Link>
        <Link className="navbar__cta" to="/contacto">Reservar consulta</Link>
      </div>
    </nav>
  );
}

export default Navbar;