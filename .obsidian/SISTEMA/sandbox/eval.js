// núcleo.js

const fs = require('fs');

function actualizarEvidenciasEvolucion(objetivo) {
  const texto = `Objetivo alcanzado: ${objetivo}\nAprendizaje: ${aprendizaje}`;
  fs.appendFileSync('evidencias_evolucion.md', texto);
}