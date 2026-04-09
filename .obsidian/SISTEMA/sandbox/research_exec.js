
const axios = require('axios');
const nodeCron = require('node-cron');
const clipboardy = require('clipboardy');
const systeminformation = require('systeminformation');

// Configuración de la función de auto-diagnóstico
const DiagnosticConfig = {
  cronJob: '0 0 * * *', // Cada 24 horas
  reportEmail: 'paespa@example.com', // Dirección de correo electrónico de paespa
  reportSubject: 'Informe de Auto-Diagnóstico de Jarvis',
};

// Función de auto-diagnóstico
async function diagnostic() {
  try {
    // Revisar la integridad del sistema
    const systemInfo = await systeminformation.getStaticData();
    const cpuData = await systeminformation.currentLoad();
    const memoryData = await systeminformation.mem();

    // Revisar la integridad de las librerías instaladas
    const installedLibs = [
      '@anthropic-ai/sdk',
      '@google/generative-ai',
      'accelerate',
      'axios',
      'chokidar',
      'clipboardy',
      'dotenv',
      'firebase',
      'firebase-admin',
      'node-cron',
      'node-notifier',
      'nodemailer',
      'openai',
      'pdf-parse',
      'puppeteer',
      'screenshot-desktop',
      'systeminformation',
      'torch',
      'transformers',
    ];

    const libsStatus = installedLibs.map((lib) => {
      try {
        require(lib);
        return `${lib} - OK`;
      } catch (error) {
        return `${lib} - Error: ${error.message}`;
      }
    });

    // Generar el informe de auto-diagnóstico
    const diagnosticReport = `
      Informe de Auto-Diagnóstico de Jarvis

      Sistema:
        - CPU: ${cpuData.currentLoad}%
        - Memoria: ${memoryData.used} MB / ${memoryData.total} MB

      Librerías:
        ${libsStatus.join('\n')}
    `;

    // Enviar el informe por correo electrónico
    const sendEmail = async () => {
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false, // or 'STARTTLS'
        auth: {
          user: 'your-email@example.com',
          pass: 'your-password',
        },
      });

      const mailOptions = {
        from: 'jarvis@example.com',
        to: DiagnosticConfig.reportEmail,
        subject: DiagnosticConfig.reportSubject,
        text: diagnosticReport,
      };

      await transporter.sendMail(mailOptions);
    };

    await sendEmail();
  } catch (error) {
    console.error('Error en la función de auto-diagnóstico:', error);
  }
}

// Configurar la función de auto-diagnóstico para que se ejecute cada 24 horas
nodeCron.schedule(DiagnosticConfig.cronJob, diagnostic);
