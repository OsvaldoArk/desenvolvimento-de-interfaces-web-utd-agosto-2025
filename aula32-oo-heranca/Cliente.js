//cadastro, cartao, tipoCliente
import Pessoa from "./Pessoa.js"

export default class Cliente extends Pessoa {
    #cadastro
    #cartao
    #tipoCliente

    constructor(id, nome, dataNascimento, cadastro, cartao, tipoCliente) {
        super(id, nome, dataNascimento)
        this.#cadastro = cadastro
        this.#cartao = cartao
        this.#tipoCliente = tipoCliente
    }

    get cadastro() {
        return this.#cadastro
    }

    set cadastro(cadastro) {
        this.#cadastro = cadastro
    }

    get cartao() {
        return this.#cartao
    }

    set cartao(cartao) {
        this.#cartao = cartao
    }

    get tipoCliente() {
        return this.#tipoCliente
    }

    set tipoCliente(tipoCliente) {
        this.#tipoCliente = tipoCliente
    }

    toString() {
        return `Cliente {
  id: ${this.id},
  nome: ${this.nome},
  dataNascimento: ${this.normalizaDataNascimento()},
  tipoCliente: ${this.#tipoCliente},
  cadastro: ${this.#cadastro.toString()},
  cartao: ${this.#cartao.toString()}
}`
    }
}
