const express = require('express');
const router = express.Router();

// Health check
router.get('/status', (req, res) => {
  res.json({ status: 'OK', app: 'Sayri backend' });
});

// WhatsApp redirect
router.get('/contacto', (req, res) => {
  const telefono = '519XXXXXXXX';
  const mensaje = 'Hola, quiero reservar una consulta en Sayri';
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  res.redirect(url);
});

module.exports = router;