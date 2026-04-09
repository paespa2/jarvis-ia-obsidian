const os = require('os');
const fs = require('fs');
const path = require('path');

// Función para obtener la cantidad de RAM libre
function getFreeRam() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    return freeMem / (1024 * 1024 * 1024); // Convertir a GB
}

// Función para limpiar archivos temporales
function cleanTempFiles() {
    // Ruta de los archivos temporales en Windows
    const tempPath = process.env.TEMP || process.env.TMP;
    
    // Función para eliminar archivo
    function deleteFile(filePath) {
        try {
            fs.unlinkSync(filePath);
            console.log(`Archivo eliminado: ${filePath}`);
        } catch (err) {
            console.error(`Error al eliminar archivo: ${err}`);
        }
    }

    // Leer directorio de archivos temporales y eliminar archivos
    fs.readdirSync(tempPath).forEach(file => {
        const filePath = path.join(tempPath, file);
        const stats = fs.statSync(filePath);

        // Solo eliminar archivos (no directorios)
        if (stats.isFile()) {
            deleteFile(filePath);
        }
    });
}

// Verificar RAM libre y limpiar archivos temporales si es necesario
setInterval(() => {
    const freeRam = getFreeRam();
    if (freeRam < 1) {
        cleanTempFiles();
    }
}, 60000); // Verificar cada minuto