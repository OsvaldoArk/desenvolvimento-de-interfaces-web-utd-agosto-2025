import express from 'express';

const PORT = 3000;

const app = express();

app.get('/inicio',(req,res)=>{
    res.send("criando uma rota com express");
});

app.listen(PORT,()=>{
    console.log(`o servidor está rodando no endereco http://127.0.0.1:${PORT}`);
});