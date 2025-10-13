import { getClienteById, 
         getClientes,
         addCliente,
         updateCliente,
        deleteCliente } from "./servicos/clienteService.js";

//getClienteById(3).then( resposta => { console.log(resposta)});

//const cliente = {cpf:'1234567',nome:'laura',idade:32};

//addCliente(cliente).then( resposta => { console.log(resposta)});

//deleteCliente(11).then( resposta => { console.log(resposta)});

const cliente = {cliente_nome:'larissa',cliente_endereco: 'aldeota',cliente_idade:28};

updateCliente(3,cliente).then( resposta => { console.log(resposta)});