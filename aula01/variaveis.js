// projeto de calculadora de viagem //
var gasolinaComum = 4.90;
var gasolinaAditivada = 5.10;
var diesel = 5.50;
var etanol = 4.10;

const precoCombustivel = 4.89;
const KmPorLitros = 12;
const distanciaEmKm = 1780;

const litrosConsumidos = distanciaEmKm / KmPorLitros
const valorGasto = litrosConsumidos * precoCombustivel
console.log(valorGasto.toFixed(2))