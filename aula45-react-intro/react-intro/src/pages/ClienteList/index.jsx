import { useEffect, useState } from "react";
import { clienteService } from "../../api/clienteService";
import './clienteList.css';

function ClienteList(){

    const [clientes,editClientes] = useState([]);
    
    useEffect(()=>{
      
      fetchCliente();
    },[]);

    const fetchCliente = async ()=>{
        const resposta = await clienteService.getAllClientes();
        
        editClientes(resposta);
    }

    return (
        <>
            <h1>Página de listagem de cliente</h1>
            <div id="container">

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
                        {clientes.map(linha=> 
                            <tr key={linha.id}>
                                <td>{linha.id}</td>
                                <td>{linha.nome}</td>
                                <td>{linha.idade}</td>
                                <td>{linha.email}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ClienteList;