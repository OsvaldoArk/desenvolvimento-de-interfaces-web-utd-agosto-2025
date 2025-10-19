import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editCliente, getCliente } from '../../services/cliente-requests';


function EditCliente(){

    const {id} = useParams();

    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        id:'',
        nome:'',
        idade:'',
        email:''
    });

    useEffect(()=>{
        buscaCliente(id);
    },[]);

    const buscaCliente = async(id)=>{
        const clienteDados = await (await getCliente(id)).data;
        console.log(clienteDados);

        setCliente(clienteDados);
    }

    const handleChange = (event) =>{
        
        const {name,value} = event.target;

        setCliente((clienteAnterior)=>{
            return {
                ...clienteAnterior,
                [name]:value
            }
        }
        );

    }
    
    const editarCliente = async (event) =>{
        event.preventDefault();
        console.log(cliente);

        await editCliente(cliente);

        navigate('/cliente/view');

    }

    return(
        <>
            <h1>editar cliente</h1>
            <form onSubmit={editarCliente}>
                
                <label>id</label>
                <input 
                type="text"
                name='id'
                value={cliente.id}
                onChange={handleChange} readOnly/>
                
                <label>nome</label>
                <input 
                type="text"
                name='nome'
                value={cliente.nome}
                onChange={handleChange} />

                <label>idade</label>
                <input 
                type="text"
                name='idade'
                value={cliente.idade}
                onChange={handleChange} />

                <label>email</label>
                <input 
                type="text"
                name='email'
                value={cliente.email}
                onChange={handleChange} />
                <button type='submit'>atualizar cliente</button>
            </form>
        </>
    );
}

export default EditCliente;
