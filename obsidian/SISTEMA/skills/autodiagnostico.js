
const fs = require('fs');
const os = require('os');
const childProcess = require('child_process');
const cron = require('node-cron');

// Función para revisar la integridad y rendimiento
function revisarIntegridad() {
    // Revisar la integridad del sistema
    const memoriaTotal = os.totalmem();
    const memoriaLibre = os.freemem();
    const porcentajeMemoria = (memoriaLibre / memoriaTotal) * 100;

    // Revisar el rendimiento del sistema
    const cpuUsage = childProcess.execSync('wmic cpu get loadpercentage').toString().trim();

    // Reportar anomalías
    if (porcentajeMemoria < 10 || cpuUsage > 80) {
        // Reportar anomalía a paespa
        console.log('Anomalía detectada. Porcentaje de memoria: ' + porcentajeMemoria + ', Uso de CPU: ' + cpuUsage);
        // Agregar código para reportar a paespa
    } else {
        console.log('Sistema funcionando correctamente. Porcentaje de memoria: ' + porcentajeMemoria + ', Uso de CPU: ' + cpuUsage);
    }
}

// Configurar tarea programada para ejecutar la función cada 24 horas
cron.schedule('0 0 * * *', () => {
    revisarIntegridad();
});
