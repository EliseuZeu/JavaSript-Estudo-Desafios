const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const listrosConsumidos = distanciaEmKm / kmPorLitros;
const gastoCombustivel = precoCombustivel * listrosConsumidos; /*  */

console.log(gastoCombustivel.toFixed(2));

