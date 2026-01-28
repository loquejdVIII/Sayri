function Contacto() {
  const telefono = '51999152829';
  const mensaje = 'Hola, quiero reservar una consulta en Sayri';
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div>
      <h1>Contáctanos</h1>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Reservar consulta por WhatsApp
      </a>
    </div>
  );
}

export default Contacto;