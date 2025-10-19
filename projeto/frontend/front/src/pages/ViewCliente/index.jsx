import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import { getClientes, removeCliente } from "../../services/cliente-requests";
import {FaTrash,FaEdit} from 'react-icons/fa';
function ViewCliente(){
 
    const [clientes,setClientes] = useState([]); 

    useEffect(()=>{
        carregaClientes();
    },[clientes]);

    const carregaClientes = async () =>{
        const clientesResponse = await getClientes();

        setClientes(await clientesResponse.data);

        console.log(clientes);
    }

    const deleteCliente = async (id)=>{
        await removeCliente(id);
    }

    return(
        <>
            <h1>ViewCliente</h1>
            
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>idade</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                {clientes.map(cliente=>(
                            <tr key={cliente.id}>
                            <td data-label="Id" >{cliente.id}</td>
                            <td data-label="Nome" >{cliente.nome}</td>
                            <td data-label="Idade" >{cliente.idade}</td>
                            <td data-label="Endereco">{cliente.email}</td>
                            <td>
                                
                                <Link to={`../edit/${encodeURIComponent(cliente.id)}`}><button><FaEdit/></button></Link>
                                <button onClick={()=>deleteCliente(cliente.id)}><FaTrash/></button>
                            </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
}

export default ViewCliente;
