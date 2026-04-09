// Importar bibliotecas de reconocimiento de voz
const { WebSpeechAPI } = require('witai');
const { Recognizer, Language } = require('browser-webkit-speech');

const nombreReal = 'Pablo Estrada Patiño';
const claveReconocimiento = 'apseap oñitap adartse olbap';

// Crea objeto para el reconocimiento de voz
const reconocedor = new Recognizer();

// Define función para reconocer la voz de paespa
async function reconocerVoz(audio) {
  // Configura el lenguaje para español
  await reconocedor.setLanguage(Language.Spa);

  // Obtiene la transcripción del audio
  const transcripcion = await reconocedor.recognize(audio);

  // Comprueba si el nombre real o clave de reconocimiento están presentes en la transcripción
  if (transcripcion.includes(nombreReal) || transcripcion.includes(claveReconocimiento)) {
    // Si está, devuelve la transcripción completada
    return transcripcion;
  } else {
    // Si no, devuelve null
    return null;
  }
}

// Comienza a capturar audio a través del micrófono
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();

    source.connect(analysifier); // Nota: "analysifier" debería ser "analisier" (sin "s")

    // Cuando se detecte un comando de paespa, puedes ejecutar la acción correspondiente
    stream.onaudioprocess = event => {
      const audioBuffer = analyser.getValue();
      const transcripcion = reconocerVoz(audioBuffer);
      if (transcripcion !== null) {
        console.log(`Comando detectado:`);
        console.log(transcripcion);
        // Ejecuta acción correspondiente
        if (transcripcion.includes('encender luz')) {
          console.log('Encendiéndola...');
        } else if (transcripcion.includes('apagar luz')) {
          console.log('Apagué la luz...');
        } 
        // Agrega más comandos según sea necesario
        else {
          console.log('Comando desconocido...');
        }
      }
    };
  })
  .catch(error => console.log('Error:', error));