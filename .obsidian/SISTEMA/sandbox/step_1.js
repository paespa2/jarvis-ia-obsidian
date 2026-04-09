const os = require('os');
const fs = require('fs');
const path = require('path');

// Función para obtener la memoria RAM disponible
function getAvailableRAM() {
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    return freeMem / (1024 * 1024 * 1024); // Convertir a GB
}

// Función para limpiar archivos temporales
function cleanTempFiles() {
    const tempDir = os.tmpdir(); // Obtiene el directorio temporal del sistema
    fs.readdir(tempDir, (err, files) => {
        if (err) {
            console.error(err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(tempDir, file);
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(err);
                }
            });
        });
    });
}

// Verificar la memoria RAM cada minuto y limpiar archivos temporales si es necesario
setInterval(() => {
    const availableRAM = getAvailableRAM();
    if (availableRAM < 1) {
        console.log('Memoria RAM disponible menor a 1GB. Limpieza de archivos temporales iniciada.');
        cleanTempFiles();
    }
}, 60000); // 60000 ms = 1 minuto