const fs = require('fs');
const path = require('path');
const axios = require('axios');
const moment = require('moment');
const cron = require('node-cron');

// Configuración de la función de backup
const backupConfig = {
  // Ruta de la configuración local
  localConfigPath: path.join(__dirname, 'config.json'),
  // Ruta de la configuración en la nube
  cloudConfigPath: 'https://example.com/config.json',
  // Intervalo de tiempo para realizar el backup (1 semana)
  cronInterval: '0 0 * * 0', // cada domingo a las 0:00
};

// Función para realizar el backup
async function realizarBackup() {
  try {
    // Lee la configuración local
    const localConfig = JSON.parse(fs.readFileSync(backupConfig.localConfigPath, 'utf8'));

    // Envía la configuración a la nube
    const response = await axios.put(backupConfig.cloudConfigPath, localConfig);
    console.log(`Backup realizado con éxito. ID de respuesta: ${response.data.id}`);

    // Guarda la configuración en la nube en un archivo
    fs.writeFileSync('backup.json', JSON.stringify(localConfig));
  } catch (error) {
    console.error(`Error al realizar el backup: ${error.message}`);
  }
}

// Configura el cron para realizar el backup cada semana
cron.schedule(backupConfig.cronInterval, realizarBackup);