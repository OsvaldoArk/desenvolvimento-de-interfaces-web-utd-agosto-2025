/*
function elevadoA(expoente){
    return function (numero){
        return numero ** expoente;
    }
}
*/
const elevadoA = expoente => numero => numero ** expoente;

const quadrado = elevadoA(2);
const cubo = elevadoA(3);

console.log(quadrado(6));
console.log(cubo(6));