const systeminformation = require('systeminformation');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

// Configuración del correo electrónico para notificar anomalías
const correoDesde = 'tu_correo-electronico@gmail.com';
const correoPara = 'paespa@example.com';
const passwordCorreo = 'tu_password_correo';

// Función para obtener datos del sistema
async function obtenerDatosSistema() {
  try {
    const datosSistema = await systeminformation.getStaticData();
    const cpuInfo = await systeminformation.currentLoad();
    const memoriaInfo = await systeminformation.mem();

    return {
      ...datosSistema,
      cpuInfo,
      memoriaInfo,
    };
  } catch (error) {
    console.error('Error obteniendo datos del sistema:', error);
    return null;
  }
}

// Función para verificar la integridad y rendimiento del sistema
async function verificarIntegridad() {
  const datosSistema = await obtenerDatosSistema();

  if (!datosSistema) {
    return;
  }

  const anomalias = [];

  // Verificar temperaturas
  if (datosSistema.cpuInfo.currentLoad > 90) {
    anomalias.push(`Carga de CPU alta: ${datosSistema.cpuInfo.currentLoad}%`);
  }

  // Verificar memoria
  if (datosSistema.memariaInfo.used / datosSistema.memoriaInfo.total > 0.8) {
    anomalias.push(`Memoria alta: ${(datosSistema.memoriaInfo.used / datosSistema.memoriaInfo.total) * 100}%`);
  }

  // Enviar correo electrónico si hay anomalías
  if (anomalias.length > 0) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // or 'STARTTLS'
      auth: {
        user: correoDesde,
        pass: passwordCorreo,
      },
    });

    const mailOptions = {
      from: correoDesde,
      to: correoPara,
      subject: 'Anomalías en el sistema',
      text: `Se han detectado las siguientes anomalías en el sistema:\n${anomalias.join('\n')}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error enviando correo electrónico:', error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
      }
    });
  }
}

// Programar la tarea para ejecutar cada 24 horas
schedule.scheduleJob('0 0 * * *', verificarIntegridad);

console.log('La función de auto-diagnóstico se está ejecutando cada 24 horas.');