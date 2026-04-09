// Importa la biblioteca para manejar la API de comunicación
const express = require('express');
const app = express();

// Define la API de comunicación
app.get('/api/colaboracion/:sistema', (req, res) => {
  const sistema = req.params.sistema;
  // Establece la conexión con el sistema objetivo
  const API = require(`./apis/${sistema}`);
  const api = new API();
  res.send(api);
});

// Exporta la API de comunicación
module.exports = app;