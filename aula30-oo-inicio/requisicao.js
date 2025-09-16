import { Endereco } from "./Endereco.js";
/*
fetch(`https://viacep.com.br/ws/60160-150/json/`).then(resposta => resposta.json())
                                                 .then(dados=>console.log(dados));
*/

const instanciaObjeto = async ()=>{

    const resposta = await fetch(`https://viacep.com.br/ws/60160-150/json/`);

    const {logradouro,bairro,localidade,estado,uf,regiao,cep} = await resposta.json();

    const end = new Endereco(logradouro,bairro,localidade,estado,uf,regiao,cep);

    console.log(end);
    console.log(end.toString());
}

instanciaObjeto();