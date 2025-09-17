export default class Pessoa{

    #id
    #nome
    #dataNascimento
    
    constructor(id, nome, dataNascimento){
        this.#id = id;
        this.#nome = nome;
        this.#dataNascimento = dataNascimento;
    }

    get id(){
        return this.#id;
    }

    set id(id){
        this.#id = id;
    }

    get nome(){
        return this.#nome;
    }

    set nome(nome){
        this.#nome = nome;
    }

    get dataNascimento(){
        return this.#dataNascimento;
    }

    set dataNascimento(dataNascimento){
        this.#dataNascimento = dataNascimento;
    }

    normalizaDataNascimento(){
        return this.#dataNascimento.toString().split("-").reverse().join("/");
    }

    toString(){
        return `Pessoa {id: ${this.#id}, nome: ${this.#nome}, dataNascimento: ${this.normalizaDataNascimento()} }`
    }
}