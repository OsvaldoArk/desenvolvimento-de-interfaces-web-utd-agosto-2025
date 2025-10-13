import express from 'express'
import { getClientes, getClienteById } from '../servicos/clienteService.js';
let router = express.Router();
 
router.get('/cliente/:id', async (req,res)=>{

    const {id} = req.params;

    const cliente = await getClienteById(id);

    cliente.id = Number.parseInt(cliente.id);

    res.json(cliente);
});

router.get('/clientes', async (req,res)=> {
    const clientes = await getClientes();

    const resposta = clientes.map(cliente =>{
        for(let propriedade in cliente){
            if(propriedade=='id')
                cliente[propriedade] = Number.parseInt(cliente[propriedade]);
        }
        return cliente;
    });

    res.json(resposta);
});
//router.put('/cliente', clientes.updateCliente);
//router.delete('/cliente/:id', clientes.deleteCliente);

export default router;