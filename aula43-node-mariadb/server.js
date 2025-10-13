import express, { json } from 'express';
import router from './controller/clienteController.js';

const HOST = '127.0.0.1';

const app = express();
app.use(json());
app.use('/api', router);

const server = app.listen(8080,HOST, function () {

    let host = server.address().address
    let port = server.address().port
    console.log("App está rodando no endereço http://%s:%s", host, port); 
});