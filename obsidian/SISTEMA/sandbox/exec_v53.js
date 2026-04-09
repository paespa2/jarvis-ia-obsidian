const os = require('os');
const fs = require('fs');
const childProcess = require('child_process');

// Configuración de la habilidad
const RAM_LIMITE = 1 * 1024 * 1024 * 1024; // 1GB
const TEMP_DIR = 'C:\\Windows\\Temp'; // Directorio temporal de Windows

// Función para obtener la RAM libre
function getFreeRam() {
  const memoria = os.totalmem() - os.freemem();
  return memoria;
}

// Función para limpiar archivos temporales
function cleanTempFiles() {
  fs.readdir(TEMP_DIR, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = `${TEMP_DIR}\\${file}`;
      try {
        fs.unlinkSync(filePath);
        console.log(`Eliminado archivo temporal: ${file}`);
      } catch (err) {
        console.error(err);
      }
    });
  });
}

// Función principal de la habilidad
function systemOptimizer() {
  const freeRam = getFreeRam();
  if (freeRam < RAM_LIMITE) {
    console.log('RAM libre es menor a 1GB, limpiando archivos temporales...');
    cleanTempFiles();
  }
}

// Configuración del intervalo de ejecución
const intervalo = 60 * 1000; // 1 minuto
setInterval(systemOptimizer, intervalo);

// Inicialización de la habilidad
systemOptimizer();