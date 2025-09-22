const fila = ["josé","marco","inara","lucas","márcia"];

const numeros = [1,2,6,3,9,8,4,5,7];

numeros.sort((a,b)=> b -a );

fila.sort((a,b)=> b.localeCompare(a));

console.log(numeros);

//console.log(numeros.slice(3,5));
console.log(numeros.splice(2,3));
console.log(numeros);
