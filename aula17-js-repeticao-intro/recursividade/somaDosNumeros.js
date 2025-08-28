
function somaRecursiva(numero){

    if(numero === 1) return numero;

    return numero + somaRecursiva(numero-1);
}

console.log(somaRecursiva(1000));
