const fs = require('fs');
const path = require('path');

// Ruta a la carpeta 'logs'
const logsDir = path.join(__dirname, 'logs');

// Ruta al archivo Auditoria.md
const auditoriaPath = path.join(logsDir, 'Auditoria.md');

// Verificar si el archivo existe
fs.access(auditoriaPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`El archivo '${auditoriaPath}' no existe.`);
  } else {
    // Obtener la ruta absoluta del archivo
    const absolutePath = path.resolve(auditoriaPath);

    // Leer el tamaño del archivo en bytes
    fs.stat(absolutePath, (err, stats) => {
      if (err) {
        console.error(`Error leyendo el tamaño del archivo '${auditoriaPath}': ${err}`);
      } else {
        const sizeInBytes = stats.size;
        
        // Convertir el tamaño a kilobytes
        const sizeInKb = Math.floor(sizeInBytes / 1024);
        
        // Imprimir el resultado en consola
        console.log(`El archivo '${auditoriaPath}' pesa ${sizeInKb} KB.`);
      }
    });
  }
});