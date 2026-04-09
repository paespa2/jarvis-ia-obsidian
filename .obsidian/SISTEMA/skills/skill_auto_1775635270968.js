const fs = require('fs');
const path = require('path');

const desktopPath = path.join(process.env.HOME, 'OneDrive', 'Escritorio');
const filePath = path.join(desktopPath, 'TEST.txt');
const fileContent = 'Jarvis está vivo';

fs.writeFile(filePath, fileContent, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Archivo creado correctamente');
  }
});