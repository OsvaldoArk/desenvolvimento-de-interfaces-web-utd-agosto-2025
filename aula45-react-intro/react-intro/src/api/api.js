import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8080/api/',
    headers:{
        'Content-Type':'application/json'
    }
});

export const apiServices = {

    get: async (endpoint)=>{
        const res = await api.get(endpoint);

        return res.data;
    }
}

export const teste = async () =>{
    const resposta = await axios.get('http://localhost:8080/api/clientes');

    return resposta;
}