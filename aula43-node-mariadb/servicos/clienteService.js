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

export const updateCliente = async (id,clienteInput) =>{
    let conn;
    try{
        conn = await pool.getConnection();
    
        const [cliente] = await conn.query('SELECT * FROM clientes WHERE id=?',[id]);
        
        if(cliente){
            /*
            let query = 'UPDATE clientes set ';
            let props = []
            for(let propriedade in clienteInput){

                query+='cliente_'+propriedade+'= ?,';
                props.push(clienteI 30 | siqueinput[propriedade]);

                cliente[propriedade] = clienteInput[propriedade]
            }

            query = query.slice(0,query.length-1);            

            query+=' WHERE id=?';

            props.push(id);
            */
            for(let propriedade in clienteInput){
                cliente[propriedade] = clienteInput[propriedade]
            }

            const {cliente_cpf,cliente_nome,cliente_idade,cliente_endereco} = cliente;

            const resposta = await conn.query('UPDATE clientes SET cliente_cpf=?,  cliente_nome=?, cliente_idade=?, cliente_endereco=? WHERE id=?',[cliente_cpf,cliente_nome,cliente_idade,cliente_endereco,id]);

            return resposta;
        }else{
            throw "Cliente não encontrado";
        }
    }
    catch(erro){
        throw erro;
    }
    finally{
        if(conn) conn.end();
    }
}