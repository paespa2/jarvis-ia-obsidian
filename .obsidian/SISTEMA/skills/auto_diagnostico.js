
const fs = require('fs');
const os = require('os');
const childProcess = require('child_process');
const cron = require('node-cron');

function autoDiagnostico() {
    const memoriaTotal = os.totalmem();
    const memoriaLibre = os.freemem();
    const porcentajeMemoriaLibre = (memoriaLibre / memoriaTotal) * 100;

    const cargaCpu = childProcess.execSync('wmic cpu get loadpercentage').toString().trim();
    const temperaturaCpu = childProcess.execSync('wmic /namespace:\\root\wmi PATH MSAcpi_ThermalZoneTemperature get CurrentTemperature').toString().trim();

    if (porcentajeMemoriaLibre < 10 || cargaCpu > 80 || temperaturaCpu > 80) {
        console.log('Anomalía detectada:');
        console.log(`Memoria libre: ${porcentajeMemoriaLibre}%`);
        console.log(`Carga CPU: ${cargaCpu}%`);
        console.log(`Temperatura CPU: ${temperaturaCpu}°C`);
        // Reporta la anomalía a paespa
    } else {
        console.log('Sistema operativo funcionando correctamente.');
    }
}

cron.schedule('0 0 * * *', () => {
    autoDiagnostico();
});
