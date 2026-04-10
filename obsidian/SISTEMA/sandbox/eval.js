const fs = require('fs');
const path = require('path');

// Ruta raíz del proyecto
const rootPath = 'C:/Users/ppaes/OneDrive/Escritorio/jarvis ia';

// Función para limpiar la lista de pendientes
function cleanPendientes() {
  const unprocessedFiles = [];
  mappedFiles.forEach((file) => {
    if (!path.basename(file).includes('node_modules')) {
      // Filtrar archivos que contengan palabras clave en su nombre o contenido
      if (['Trading', 'HackerOne', 'Finanzas', 'Barbería'].some((keyword) => path.basename(file).includes(keyword) || fs.readFileSync(file, 'utf8').includes(keyword))) {
        unprocessedFiles.push(file);
      }
    }
  });
  return unprocessedFiles;
}

// Limpieza de la lista de pendientes
const cleanPendientesList = cleanPendientes();
console.log(cleanPendientesList);