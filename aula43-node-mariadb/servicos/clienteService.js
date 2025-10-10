import { pool } from "../conexao/ConnectionFactory.js";

export const getClientes = async ()=>{

    let conn;
    try{
    
        conn = await pool.getConnection();
    
        const respostaClientes = await conn.query('SELECT * FROM clientes');
        
        return respostaClientes;
    }
    catch(erro){
        throw erro;
    }
    finally{
        if(conn) conn.end();
    }
}

export const getClienteById = async (id)=>{

    let conn;
    try{
        conn = await pool.getConnection();
    
        const [cliente] = await conn.query('SELECT * FROM clientes WHERE id=?',[id]);
        
        return cliente;
    }
    catch(erro){
        throw erro;
    }
    finally{
        if(conn) conn.end();
    }
}

export const addCliente = async (cliente)=>{
    let conn;

    const {cpf,nome,idade} = cliente;

    try{
        conn = await pool.getConnection();
    
        const clienteResposta = await conn.query('INSERT INTO clientes(cliente_cpf, cliente_nome, cliente_idade) values(?,?,?)',[cpf,nome,idade]);
        
        return clienteResposta;
    }
    catch(erro){
        throw erro;
    }
    finally{
        if(conn) conn.end();
    }
}

export const deleteCliente = async (id) =>{
    let conn;
    try{
    
        conn = await pool.getConnection();
    
        await conn.query('DELETE FROM clientes WHERE id=?',[id]);
        
        console.log('cliente deletado com sucesso');
    }
    catch(erro){
        throw erro;
    }
    finally{
        if(conn) conn.end();
    }
}