import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Sayri</h2>

      <div style={styles.links}>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/corporativos">Corporativos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contacto">Contáctanos</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    background: '#f5f5f5'
  },
  links: {
    display: 'flex',
    gap: '16px'
  }
};

export default Navbar;