import express, { json } from 'express';

const port = 3000;

const app = express();

let id = 1;
const clientes = [	{
		"nome": "Agatha",
		"idade": 31,
		"endereco": "papicu",
		"id": 1
	}];

app.use(json());

app.get('/',(requisicao,resposta)=>{
    resposta.json(clientes);
});

app.get('/cliente/:id',(requisicao,resposta)=>{

    const {id} = requisicao.params;

    const [resultado] = clientes.filter(cliente => cliente.id === Number.parseInt(id));

    if(resultado !== undefined){
        resposta.status(200).json(resultado);
    }
    else{
        resposta.status(404).json({"erro":"cliente não encontrado"});
    }
});

app.post('/',(requisicao,resposta)=>{

    //const cliente = requisicao.body.cliente;
    let { cliente } = requisicao.body;

    cliente = {...cliente,"id":id}

    id++;

    clientes.push(cliente);

    resposta.status(200).json(cliente);

});

app.put('/:id',(requisicao,resposta)=>{

    const {id} = requisicao.params;

    const { cliente } = requisicao.body

    let [resultado] = clientes.filter(cliente => cliente.id === Number.parseInt(id));

    if(resultado !== undefined){
        for(let propriedade in resultado){

            if(cliente[propriedade]!== undefined)
                resultado[propriedade] = cliente[propriedade];
        }

        resposta.status(200).json(resultado);
    }    
    else{
        resposta.status(404).json({"erro":"cliente não encontrado"});
    }
});


app.listen(port,()=>{
    console.log(`o   servidor está rodando em http://127.0.0.1:${port}`);
});