import {createServer} from 'http';

const PORT = 3000;

const server = createServer((req,res)=>{

    res.write(`<h3 style='color:red'>Isso e um titulo</h3>`,'utf-8',()=>{
        console.log("escrevendo HTML no nodejs");
    });

    res.end();
});

server.listen(PORT,()=>{
    console.log(`o servidor está rodando no endereco http://127.0.0.1:${PORT}`);
});