var preco = 100,desconto=0,acrescimo=0;

var formaPagamento = "dinheiro";

var parcelas = 1;

if(formaPagamento === "dinheiro" || formaPagamento === "cheque" && parcelas === 1){
    
    var desconto = preco * 10/100;

}
else if(formaPagamento === "cartão" && parcelas === 1){
    var desconto = preco * 15/100;

}
else if(parcelas === 2){

}
else if(parcelas === 3){

   acrescimo = preco * 10/100;
}
var final =  (preco - desconto + acrescimo);
console.log("preço final: ",final);
