var valorProduto = 0, valorFinal = 0, quantidadeProduto = 0,quantidade = 2, produto = "";

console.table([{codigo:100, produto:"cachorro quente",preco:1.7},
{codigo:101, produto:"bauru simples",preco:2.3},
{codigo:102, produto:"bauru com ovo",preco:2.6},
{codigo:103, produto:"hamburguer",preco:2.4},
{codigo:104, produto:"cheeseburguer",preco:2.5},
{codigo:105, produto:"refrigerante",preco:1}]);

var opcao = 106;

switch(opcao){
    case 100: valorProduto = 1.7; produto ="cachorro quente"; break;
    case 101: valorProduto = 2.3; produto ="bauru simples"; break;
    case 102: valorProduto = 2.6; produto ="bauru com ovo"; break;
    case 103: valorProduto = 2.4; produto ="hamburguer"; break;
    case 104: valorProduto = 2.5; produto ="cheeseburguer"; break;
    case 105: valorProduto = 1; produto ="refrigerante"; break;
    default: console.log("código inválido"); return;
}

valorFinal = valorProduto * quantidade;

console.log("produto: ",produto," quantidade: ",quantidade," x ",valorProduto," = ",valorFinal);

