
function Listitem({item}){

    const {link, nome} = item;

    return(
        <>
            <li><a href={link}>{nome}</a></li>
        </>
    );
}

export default Listitem;