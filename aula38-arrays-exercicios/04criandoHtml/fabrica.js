const painel = document.getElementById("painel");

const elementos = [
  {tag: "img", atributos: [{chave: "alt", valor:"imagem!"},
                           {chave: "src", valor: "https://horadecodar.com.br/wp-content/uploads/2023/04/Linguagem-HTML-scaled.jpg"},
                           {chave:"style",valor:"width:200px;height:auto"}],
    conteudo:""},
  {tag: "p", atributos: [{chave: "class", valor:"texto"}], conteudo: "sou um parágrafo!"},
  {tag: "h1", atributos:[], conteudo: "sou um título"}
];

elementos.forEach(elemento => {
    const tag = document.createElement(elemento.tag);

    elemento.atributos.forEach(atributo =>{
        if(elemento.atributos.length>0)
            tag.setAttribute(atributo.chave,atributo.valor);
    });

    tag.innerText = elemento.conteudo;
    painel.appendChild(tag);
});