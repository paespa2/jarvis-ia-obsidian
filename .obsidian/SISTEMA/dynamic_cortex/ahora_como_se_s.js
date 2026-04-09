const { Transformer } = require('transformers');

class Jarvis {
  constructor() {
    this.transformer = new Transformer();
  }

  processText(text) {
    const inputIds = this.transformer.encodeInput(text);
    const output = this.transformer.decodeOutput(inputIds);
    return output;
  }
}

module.exports = Jarvis;