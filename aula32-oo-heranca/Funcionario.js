import Pessoa from "./Pessoa.js";

export default class Funcionario extends Pessoa{

    #funcao
    #setor

    constructor(id, nome, dataNascimento,funcao,setor){
        super(id,nome,dataNascimento);
        this.#funcao = funcao;
        this.#setor = setor;
    }

    get funcao(){
        return this.#funcao;
    }

    set funcao(funcao){
        this.#funcao = funcao;
    }

    get setor(){
        return this.#setor;
    }

    set setor(setor){
        this.#setor = setor;
    }

    toString(){
        return `Funcionario { id: ${this.id}, nome:  ${this.nome}, dataNascimento: ${this.normalizaDataNascimento()}, funcao: ${this.#funcao}, setor: ${this.#setor}}`
    }
}