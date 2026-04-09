const axios = require('axios');
const fs = require('fs');

// Utilizamos la API pública de CoinGecko para obtener el precio actual del Bitcoin
axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
  .then(response => {
    const bitcoinPrice = response.data.bitcoin.usd;
    const cryptoData = { bitcoin: bitcoinPrice };

    // Escribimos el precio del Bitcoin en el archivo crypto.json
    fs.writeFile('crypto.json', JSON.stringify(cryptoData), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Precio del Bitcoin guardado en crypto.json');
      }
    });
  })
  .catch(error => {
    console.error(error);
  });