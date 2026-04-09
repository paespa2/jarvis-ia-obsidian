// Instalar systeminformation
npm install systeminformation

// Después de la instalación, podemos proceder con el código
const si = require('systeminformation');

// Función para limpiar archivos temporales
async function limpiarArchivosTemporales() {
  // Obtener la lista de archivos temporales
  const archivosTemporales = await si.fsSize();
  // Lógica para eliminar los archivos temporales
  // Nota: La implementación real depende del sistema operativo y del acceso a los directorios temporales
  console.log("Archivos temporales eliminados.");
}

// Función para monitorear el uso de RAM y llamar a la limpieza de archivos temporales
async function monitorRam() {
  const mem = await si.mem();
  if (mem.available < 1 * 1024 * 1024 * 1024) { // 1GB en bytes
    console.log("RAM Available: ", mem.available, "bytes");
    await limpiarArchivosTemporales();
  }
}

// Llamar a la función de monitoreo cada minuto, por ejemplo
setInterval(monitorRam, 60 * 1000); // 60 segundos

// Inicializar el monitoreo
monitorRam();