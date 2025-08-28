var continua = true;

const numeros = [10,5,2,6,9,1,0];
let contador=0,soma=0;

while(continua){    
    if(numeros[contador]===0){ 
        break;
    }
    else{
        soma+=numeros[contador];
        contador++;
    }
}

console.log(soma/contador);