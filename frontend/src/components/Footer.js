function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Sayri · Consultorio Psicológico</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '40px',
    padding: '20px',
    textAlign: 'center',
    background: '#f5f5f5'
  }
};

export default Footer;