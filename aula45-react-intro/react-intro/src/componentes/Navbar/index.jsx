import './navbar.css';

function Navbar({children}){
    return(
        <>
            <nav className="navegacao">
                <h1>Reac app</h1>
                <ul>
                    {children}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;