import { Link } from "react-router-dom";
import { useState } from "react";

function Formulario(){

    const [cliente,editCliente] = useState({nome:'',idade:0,email:'',endereco:''});

    function handleClienteChange(event){
        const {name,value} = event.target;

        editCliente({...cliente,[name]:value});
    }

    return (
        <>
            <h3>{cliente.nome}</h3>
            <h3>{cliente.idade}</h3>
            <h3>{cliente.email}</h3>
            <h3>{cliente.endereco}</h3>
            <form>
                <input type="text"
                       name="nome"
                       id="" 
                       value={cliente.nome} 
                       placeholder="digite seu nome" 
                       onChange={handleClienteChange}
                />
                <input type="number" 
                       name="idade" 
                       value={cliente.idade} 
                       id="" 
                       onChange={handleClienteChange} 
                />

                <input type="text" 
                       name="email" 
                       value={cliente.email} 
                       id="" 
                       onChange={handleClienteChange}
                />
                <input type="text" 
                       name="endereco" 
                       value={cliente.endereco} 
                       id="" 
                       onChange={handleClienteChange}
                />
            </form>

            <Link to='/cliente'>Voltar a lista de clientes</Link>
        </>


    );
}

export default Formulario;