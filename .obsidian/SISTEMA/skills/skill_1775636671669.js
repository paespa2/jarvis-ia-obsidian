const axios = require('axios');
const fs = require('fs');

async function obtenerPrecioBitcoin() {
    try {
        const respuesta = await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD');
        const precio = respuesta.data.USD;
        await fs.promises.writeFile('crypto.json', JSON.stringify({ bitcoin: precio }, null, 2));
        console.log('Precio del Bitcoin guardado en crypto.json');
    } catch (error) {
        console.error('Error al obtener el precio del Bitcoin:', error);
    }
}

obtenerPrecioBitcoin();