var contador = 11000, soma = 0;

do{
    contador++;

    if(contador % 2 === 0) continue;

    soma+=contador;
}while(contador <= 1000)

console.log("contador: ",contador);
console.log("soma",soma);