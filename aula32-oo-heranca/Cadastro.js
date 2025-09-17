// Cadastro
export default class Cadastro {
    #dataCadastro
    #ativo
    #email
    #telefone
    #endereco

    constructor(dataCadastro, ativo, email, telefone, endereco) {
        this.#dataCadastro = dataCadastro
        this.#ativo = ativo
        this.#email = email
        this.#telefone = telefone
        this.#endereco = endereco
    }

    get dataCadastro() {
        return this.#dataCadastro
    }

    set dataCadastro(dataCadastro) {
        this.#dataCadastro = dataCadastro
    }

    get ativo() {
        return this.#ativo
    }

    set ativo(ativo) {
        this.#ativo = ativo
    }

    get email() {
        return this.#email
    }

    set email(email) {
        this.#email = email
    }

    get telefone() {
        return this.#telefone
    }

    set telefone(telefone) {
        this.#telefone = telefone
    }

    get endereco() {
        return this.#endereco
    }

    set endereco(endereco) {
        this.#endereco = endereco
    }

    normalizaDataCadastro() {
        return this.#dataCadastro.toString().split("-").reverse().join("/");
    }

    toString() {
        const e = this.#endereco
        return `Cadastro {
  dataCadastro: ${this.normalizaDataCadastro()},
  ativo: ${this.#ativo},
  email: ${this.#email},
  telefone: ${this.#telefone},
  endereco: {
    rua: ${e.rua},
    numero: ${e.numero},
    complemento: ${e.complemento},
    bairro: ${e.bairro},
    cidade: ${e.cidade},
    estado: ${e.estado},
    cep: ${e.cep}
  }
}`
    }
}
