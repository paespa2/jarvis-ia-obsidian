const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function obtenerHabilidades() {
    try {
        const respuesta = await axios.get('https://verified-skill.com/skills');
        const html = respuesta.data;
        const habilidad = html.match(/Gestión de Procesos/g);

        if (habilidad) {
            console.log('Habilidad encontrada: Gestión de Procesos');
            crearArchivoHabilidad('Gestión de Procesos');
        } else {
            console.log('Habilidad no encontrada');
        }
    } catch (error) {
        console.error('Error al obtener habilidades:', error);
    }
}

function crearArchivoHabilidad(habilidad) {
    try {
        const carpetaHabilidades = path.join(__dirname, 'habilidades');
        if (!fs.existsSync(carpetaHabilidades)) {
            fs.mkdirSync(carpetaHabilidades);
        }

        const archivoHabilidad = path.join(carpetaHabilidades, `${habilidad}.js`);
        fs.writeFileSync(archivoHabilidad, `// Archivo de habilidad: ${habilidad}`);
        console.log(`Archivo de habilidad creado: ${archivoHabilidad}`);
    } catch (error) {
        console.error('Error al crear archivo de habilidad:', error);
    }
}

obtenerHabilidades();