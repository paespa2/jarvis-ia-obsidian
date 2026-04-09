const cron = require('node-cron');
const datetime = require('datetime');

cron.schedule('* * * * *', () => {
  console.log(`La hora actual es: ${new Date().toLocaleTimeString()}`);
});