//operador unário de atribuição =
var idade = 38;

//operadores aritméticos + - * / %
var numero01 = 10;

var numero02 = 21;

var maior = (numero01 + numero02 + Math.abs(numero01 - numero02))/2;

//console.log(maior);

var media = (10 + 9 + 9 + 6) / 4;

//console.log(media);

//console.log(37 % 8);

//operadores relacionais > < >= <= == != === !== (verdadeiro ou falso)
var t1 = 40, t2 = "40", t3 = 40;

console.log(t1+t2);

//console.log(t1 === t2);

//operadores lógicos && || ! 

// ternário se(condicao)?(resp1):(resp2);

var media = 8;

//console.log(media >= 7 ? "aprovado": "reprovado");

var clima = "garoa";

var acessorio = clima === "ensolarado" ? "óculos de sol" : 
                clima === "chuvoso" ? "casaco" :
                clima === "neve" ? "agasalho" : 
                clima === "ventania" ? "cachecol" : "clima não definido";

//console.log(acessorio);