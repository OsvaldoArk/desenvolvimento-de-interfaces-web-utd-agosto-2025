import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addCliente } from '../../services/cliente-requests';

function AddCliente(){
 
    const navigate = useNavigate();

    const [cliente,setCliente] = useState({
        nome:'',
        idade:'',
        email:''
    });

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
    
    const salvaCliente = async (event) =>{
        event.preventDefault();
        console.log(cliente);

        await addCliente(cliente);

        navigate('/cliente/view');

    }

    return(
        <>
            <h1>adicionar cliente</h1>
            <form onSubmit={salvaCliente}>
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
                <button type='submit'>salvar</button>
            </form>
        </>
    );
}

export default AddCliente;
