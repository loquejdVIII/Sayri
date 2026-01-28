import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Corporativos from './pages/Corporativos';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main style={{ padding: '32px' }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/corporativos" element={<Corporativos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;