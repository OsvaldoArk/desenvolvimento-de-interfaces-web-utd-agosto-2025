import { useParams } from "react-router-dom";

function ClienteEdit(){

    const {id} = useParams();

    return (
        <>
            <h1>Página edição cliente {id}</h1>
        </>
    );
}

export default ClienteEdit;