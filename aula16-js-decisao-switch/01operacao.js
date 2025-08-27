var numero01 = 10, numero02 = 25,resultado = 0,operacao = '';

console.log("escolha uma das opções\n1-média entre os números\n2-diferença entre os números\n3-produto entre os números\n4-divisão entre os números");

var opcao = "arroz";

switch(opcao){

    case 1: operacao = "média";
            resultado = (numero01 + numero02)/2;
            break;

    case 2: operacao = "diferença";    
            resultado = numero01 - numero02;
            break;

    case 3: operacao = "produto";
            resultado = numero01 * numero02;
            break;

    case 4: operacao = "divisão";
            resultado = numero01 / numero02;
            break;

    default: console.log("opção inválida"); return;    
}

console.log(operacao," entre ", numero01, " e ", numero02, " = ",resultado);