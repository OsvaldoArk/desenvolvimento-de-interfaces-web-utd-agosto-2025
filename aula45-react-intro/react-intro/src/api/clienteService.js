import { apiServices } from "./api";

export const clienteService = {

    getAllClientes : async () =>{
        const resposta = await apiServices.get('/clientes');
        return resposta;
    },

    getClienteById : async (id) =>{
        const cliente = await apiServices.get(`/cliente/${id}`);
        return cliente
    }
}