import { Outlet } from "react-router-dom";

function Cliente(){
    return (
        <>
            <h1>Página Mãe Cliente</h1>
            <Outlet/>
        </>
    );
}

export default Cliente;