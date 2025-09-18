// Cartao
export default class Cartao {
    #numero
    #validade
    #codigoSeguranca

    constructor(numero, validade, codigoSeguranca) {
        this.#numero = numero
        this.#validade = validade
        this.#codigoSeguranca = codigoSeguranca
    }

    get numero() {
        return this.#numero
    }

    set numero(numero) {
        this.#numero = numero
    }

    get validade() {
        return this.#validade
    }

    set validade(validade) {
        this.#validade = validade
    }

    get codigoSeguranca() {
        return this.#codigoSeguranca
    }

    set codigoSeguranca(codigoSeguranca) {
        this.#codigoSeguranca = codigoSeguranca
    }

    normalizaValidadeCartao() {
        return this.#validade.toString().split("-").reverse().join("/")
    }

    toString() {
        return `Cartao {
  numero: ${this.#numero},
  validade: ${this.normalizaValidadeCartao()},
  codigoSeguranca: ${this.#codigoSeguranca}
}`
    }
}
