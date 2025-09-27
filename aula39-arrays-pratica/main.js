let listaProdutos = [];
const tabela = document.getElementById("conteudo");

const fetchProdutos = async ()=>{
    const resposta = await fetch("https://fakestoreapi.com/products");
    const dados = await resposta.json();
    return dados;
}

const populaTabela = (listaProdutos)=>{
    listaProdutos.forEach(produto =>{

        const linha = document.createElement("tr");

        for(let atributo in produto){
            const coluna = document.createElement("td");

            switch(atributo){
                case "description": coluna.innerText = produto[atributo].slice(0,30)+"..."; 
                break;

                case "image": const img = document.createElement("img");
                              img.setAttribute("src",produto[atributo]);
                              img.setAttribute("class","imagem");
                              coluna.appendChild(img);
                break;

                case "rating": for(let pontuacao in produto[atributo]){
                                    const item = document.createElement("td");
                                    item.innerText = produto[atributo][pontuacao];
                                    linha.appendChild(item);
                               };
                               continue;

                default: coluna.innerText = produto[atributo];
            }

            linha.appendChild(coluna);
        }
        tabela.appendChild(linha);
    });
}

document.addEventListener("DOMContentLoaded",async ()=>{
    listaProdutos = await fetchProdutos();

    populaTabela(listaProdutos);
});

document.getElementById("filtro").addEventListener("input", (evento)=>{

    const filtroProduto = evento.target.value.toLowerCase();

    if(filtroProduto.length >3){
        tabela.innerHTML = "";    

        const listaFiltrada = listaProdutos
                            .filter( produto => produto.title.toLowerCase()
                                                             .includes(filtroProduto));

        populaTabela(listaFiltrada);
    }
    else{
        populaTabela(listaProdutos);
    }
});
