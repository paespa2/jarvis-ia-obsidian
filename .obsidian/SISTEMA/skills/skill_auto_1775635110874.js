const cron = require('node-cron');

function muestraHora() {
    const fecha = new Date();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    console.log(`La hora actual es: ${hora}:${minutos}:${segundos}`);
}

cron.schedule('* * * * *', () => {
    muestraHora();
});