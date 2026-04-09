const systeminformation = require('systeminformation');

// Configuración del intervalo de revisión (24 horas)
const intervaloRevision = 24 * 60 * 60 * 1000; // 24 horas en milisegundos

// Función de auto-diagnóstico
async function autoDiagnostico() {
  try {
    // Revisar integridad y rendimiento del sistema
    const sistema = await systeminformation.system();
    const cpu = await systeminformation.cpu();
    const memoria = await systeminformation.mem();
    const disco = await systeminformation.fsSize();

    // Verificar si hay anomalías
    let anomalias = [];
    if (cpu.currentload > 80) {
      anomalias.push(`Carga de CPU alta: ${cpu.currentload}%`);
    }
    if (memoria.used / memoria.total > 0.8) {
      anomalias.push(`Memoria RAM alta: ${(memoria.used / memoria.total) * 100}%`);
    }
    if (disco[0].use > 80) {
      anomalias.push(`Espacio en disco alto: ${disco[0].use}%`);
    }

    // Reportar anomalías a paespa
    if (anomalias.length > 0) {
      console.log(`Anomalías detectadas:`);
      anomalias.forEach((anomalia) => {
        console.log(anomalia);
      });
      // Aquí puedes agregar la lógica para enviar un mensaje a paespa
    } else {
      console.log('Sin anomalías detectadas');
    }
  } catch (error) {
    console.error('Error en auto-diagnóstico:', error);
  }
}

// Ejecutar la función de auto-diagnóstico cada 24 horas
setInterval(autoDiagnostico, intervaloRevision);

// Ejecutar la función de auto-diagnóstico una vez al iniciar
autoDiagnostico();