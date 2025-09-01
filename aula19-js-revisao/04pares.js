var numeros = [],contador=1,quantidadePar = 0,resultado = '';

while(contador<=10){
    
    var numero = Math.round(Math.random()* 100);

    numeros.push(numero);
    
    contador++;
}

for(var cont = 0; cont < 10; cont++){

    if(numeros[cont] % 2 === 0)
        quantidadePar++;

    resultado = resultado.concat(numeros[cont]+" ");
}
//modificando o arquivo no projeto para aparecer no git
console.log(resultado);
console.log("quantidade de números pares: ",quantidadePar);