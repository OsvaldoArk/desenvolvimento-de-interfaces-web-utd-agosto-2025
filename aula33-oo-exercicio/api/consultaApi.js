class Filme{
    #titulo
    #ano
    #estreia
    #genero
    #duracao
    #enredo
    #poster

    constructor(titulo,ano,estreia,genero,duracao,enredo,poster){
        this.#titulo = titulo;
        this.#ano = ano;
        this.#estreia = estreia;
        this.#genero = genero;
        this.#duracao = duracao;
        this.#enredo = enredo;
        this.#poster = poster;
    }

    get titulo(){
        return this.#titulo;
    }

    get ano(){
        return this.#ano;
    }

    get estreia(){
        return this.#estreia;
    }

    get genero(){
        return this.#genero;
    }

    get duracao(){
        return this.#duracao;
    }

    get enredo(){
        return this.#enredo
    }

    get poster(){
        return this.#poster;
    }
}

document.querySelector("#formulario").addEventListener("submit",async (evento)=>{

    evento.preventDefault();

    const minhaChave = "sua chave aqui";

    const titulo = document.querySelector("#tituloId").value;

    const ano = document.querySelector("#anoId").value;

    const painel = document.querySelector("#painel");

    const resposta = await fetch(`http://www.omdbapi.com/?apikey=${minhaChave}t=${titulo}`);

    const {Title,Year,Released,Genre,Runtime,Plot,Poster} = await resposta.json();

    const f = new Filme(Title,Year,Released,Genre,Runtime,Plot,Poster);

    const tituloFilme = document.createElement("p");

    tituloFilme.innerText = f.titulo;

    const anoFilme = document.createElement("p");

    anoFilme.innerText = f.ano;

    const estreiaFilme = document.createElement("p");

    estreiaFilme.innerText = f.estreia;

    const generoFilme = document.createElement("p");

    generoFilme.innerText = f.genero;

    const duracaoFilme = document.createElement("p");

    duracaoFilme.innerText = f.duracao;

    const enredoFilme = document.createElement("p");

    enredoFilme.innerText = f.enredo;

    const posterFilme = document.createElement("img");

    posterFilme.setAttribute("src",f.poster);

    painel.innerHTML = '';

    painel.appendChild(tituloFilme);
    painel.appendChild(anoFilme);
    painel.appendChild(estreiaFilme);
    painel.appendChild(generoFilme);
    painel.appendChild(duracaoFilme);
    painel.appendChild(enredoFilme);
    painel.appendChild(posterFilme);
});

