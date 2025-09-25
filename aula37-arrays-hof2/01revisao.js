const precos = [10,26,8,100,2.5,18,6.2,30];

const isPagamentoCartaoClienteFeliz = true;

let precoDesconto = [], total = 0;

if(isPagamentoCartaoClienteFeliz){
    //preco = preco - (preco*0.1); 
    precoDesconto = precos.map(produto => {

        produto-=produto*0.1;

        total+=produto;

        return produto;
    });
}

console.log(precos);
console.log(precoDesconto);
console.log((total/precoDesconto.length).toFixed(2));