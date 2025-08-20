var numero = 629

var unidade = numero % 10;

var dezena = (numero % 100 - unidade) /10;

var centena = Math.trunc(numero / 100);

console.log(unidade);

console.log(dezena);

console.log(centena);