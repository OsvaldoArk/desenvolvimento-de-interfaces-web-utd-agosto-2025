import mariadb from 'mariadb';

export const pool = mariadb.createPool({
    host:'127.0.0.1',
    user:'admin',
    password:'qwe123',
    database:'testedb',
    connectionLimit:5
});

async function teste(){
    let conn; 

    try{
        conn = pool.getConnection();
        console.log('conexão estabelecida com sucesso');
    }
    catch(erro){
        throw erro
    }
    finally{
        if(conn) conn.end;
    }
}