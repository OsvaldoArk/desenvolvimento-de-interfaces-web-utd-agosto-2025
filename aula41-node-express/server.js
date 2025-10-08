import express from 'express';

const port = 3000;

const app = express();

app.get('/',(requisicao,resposta)=>{
    resposta.json({"messagem":"criando uma rota com express"});
});

app.get('/numero-da-sorte/:numero/:numeroazar',(requisicao,resposta)=>{

    const parametro = requisicao.params.numero;

    const outroParametro = requisicao.params.numeroazar;

    const {numero,numeroazar} = requisicao.params;

    resposta.send(`esse é o número da sorte: ${parametro} - ${outroParametro}`);
});

app.listen(port,()=>{
    console.log(`o   servidor está rodando em http://127.0.0.1:${port}`);
});