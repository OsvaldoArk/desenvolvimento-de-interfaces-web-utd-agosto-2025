import { Outlet } from "react-router-dom";

function Cliente(){
 
    return(
        <>
            <h1>Cliente</h1>
            <Outlet />
        </>
    );
}

export default Cliente;