import api from './api';

export async function getCliente(id){
    return await api.get(`/cliente/${id}`).then(response=>response);
}

export async function getClientes(){
    return await api.get("/clientes").then(response=>response);
}

export async function removeCliente(id){
    return await api.delete(`/cliente/${id}`).then(response=>response); 
}

export async function addCliente(cliente){
    return await api.post("/cliente",cliente).then(response=>response);
}

export async function editCliente(cliente){
    return await api.put(`/cliente`,cliente).then(response=>response);
}
