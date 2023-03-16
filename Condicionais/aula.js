const precoGasolina = 5.79;
const precoEtanol = 4.69;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const listrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const gastoCombustivel = precoEtanol * listrosConsumidos; /*  */
    console.log('Preço da Etanol e: ' + gastoCombustivel.toFixed(2));
} else {
    const gastoCombustivel = precoGasolina * listrosConsumidos; /*  */
    console.log('Preço da Gasolina e: ' + gastoCombustivel.toFixed(2));
}


