import { Link } from 'react-router-dom';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div>
          <h1 className="hero__title">
            Acompañamiento psicológico profesional
          </h1>

          <p className="hero__subtitle">
            En Sayri te ayudamos a cuidar tu bienestar emocional
            con atención humana, confidencial y personalizada.
          </p>

          <Link to="/contacto" className="hero__cta">
            Reservar consulta
          </Link>
        </div>

        <div>
          {/* Aquí luego irá una imagen o ilustración */}
        </div>
      </div>
    </section>
  );
}

export default Hero;