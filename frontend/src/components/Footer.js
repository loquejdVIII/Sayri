import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Sayri · Consultorio Psicológico
    </footer>
  );
}

export default Footer;