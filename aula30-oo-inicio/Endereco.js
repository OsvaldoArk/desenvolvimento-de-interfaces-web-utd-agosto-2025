export class Endereco{

    #logradouro;
    #bairro;
    #municipio;
    #estado;
    #uf;
    #regiao;
    #cep;

    constructor(logradouro,bairro,municipio,estado,uf,regiao,cep){
        this.#logradouro = logradouro
        this.#bairro = bairro
        this.#municipio = municipio
        this.#estado = estado
        this.#uf = uf
        this.#regiao = regiao
        this.#cep = cep
    }

    get logradouro(){
        return this.#logradouro;
    }

    set logradouro(logradouro){
        this.#logradouro = logradouro;
    }

    toString(){
        return `Endereco { logradouro:${this.#logradouro} }`;
    }
}