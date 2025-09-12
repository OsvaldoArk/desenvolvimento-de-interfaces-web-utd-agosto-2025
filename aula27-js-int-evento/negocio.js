const produtos = [
    {id:1,nome:"manga",preco:4.1},
    {id:2,nome:"banana",preco:2.25},
    {id:3,nome:"abacate",preco:5.8},
    {id:4,nome:"laranja",preco:3.1},
    {id:5,nome:"abacaxi",preco:3.7},
    {id:6,nome:"maçã",preco:9.8},
]

const compra = [];

document.getElementById("adicionar").addEventListener("click",()=>{

    const idProduto = Number.parseInt(document.getElementById("descricao").value);

    const quantidadeProduto = Number.parseInt(document.getElementById("quantidade").value);

    const corpo = document.querySelector("tbody");

    const divTotal = document.getElementById("total");

    compra.push([idProduto,quantidadeProduto]);
    
    corpo.innerHTML = "";

    let total = 0;

    for(let item of compra){

        const produto = produtos[item[0]-1];

        const linha = document.createElement("tr");

        const tdId = document.createElement("td");

        tdId.innerText = produto.id;

        const tdNome = document.createElement("td");
        
        tdNome.innerText = produto.nome;

        const tdPreco = document.createElement("td");

        tdPreco.innerText = produto.preco;

        const tdQuantidade = document.createElement("td");

        tdQuantidade.innerText = item[1];

        linha.appendChild(tdId);
        linha.appendChild(tdNome);
        linha.appendChild(tdPreco);
        linha.appendChild(tdQuantidade);
        
        corpo.appendChild(linha);

        total+=produto.preco*item[1];
    }

    divTotal.innerText = total;
});

