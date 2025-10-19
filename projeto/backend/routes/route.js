let express = require('express');
let router = express.Router();
 
const clientes = require('../servicos/servico.js');

router.post('/cliente', clientes.createCliente);
router.get('/cliente/:id', clientes.getCliente);
router.get('/clientes', clientes.clientes);
router.put('/cliente', clientes.updateCliente);
router.delete('/cliente/:id', clientes.deleteCliente);

module.exports = router;