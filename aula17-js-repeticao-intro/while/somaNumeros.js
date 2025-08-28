var contador = 0, soma = 0;

while(contador <= 1000){
    contador++;

    if(contador % 2 === 0) continue;

    soma+=contador;
}

console.log("contador: ",contador);
console.log("soma",soma);