// Importa la biblioteca necesaria
const tf = require('@tensorflow/tfjs');

// Crea una instancia del modelo
let model = new tf.layers.model({
  inputShape: [784],
  outputShape: [10]
});

// Prepara los datos de entrenamiento
let xs = tf.random.normal([100, 784]);
let ys = model.predict(xs);

// Entrena el modelo con los datos de entrenamiento
model.fit(xs, ys, {epochs: 10});