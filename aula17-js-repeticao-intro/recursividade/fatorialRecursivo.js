function fatorialRecursiva(numero){
    if(numero===1) return numero;

    return numero * fatorialRecursiva(numero-1);
}

console.log(fatorialRecursiva(3));

// 3 * 2 * 1
