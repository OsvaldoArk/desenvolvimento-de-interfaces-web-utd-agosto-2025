import Cliente from "./Cliente.js"
import Cadastro from "./Cadastro.js"
import Cartao from "./Cartao.js"

// Dados mínimos para exemplo
const endereco = {
    rua: "Rua Maria Julia",
    numero: 123,
    complemento: "Casa",
    bairro: "Santo Amaro",
    cidade: "Fortaleza",
    estado: "CE",
    cep: "60000-000"
}

const cadastro = new Cadastro("2025-09-17", true, "isaiaswebnet@gmail.com", "(85) 98689-1116", endereco)
const cartao = new Cartao("1111 2222 3333 4444", "2028-01", "123")

const cliente = new Cliente(1, "Francisco Isaias Oliveira de Sousa", "1980-11-12", cadastro, cartao, "cliente")

//console.log("Nome do cliente:", cliente.nome)

console.log(cliente.toString())