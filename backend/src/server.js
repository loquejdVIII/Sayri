const express = require('express');
const app = express();

// Rutas API
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Sayri corriendo en http://localhost:${PORT}`);
});