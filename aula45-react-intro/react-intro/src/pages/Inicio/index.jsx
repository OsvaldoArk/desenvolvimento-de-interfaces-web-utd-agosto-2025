import Listitem from "../../componentes/Listitem"
import Navbar from "../../componentes/Navbar"
import Aside from "../../componentes/Aside"
import Main from "../../componentes/Main"

function Inicio(){

  const itensNavegacao = [
    {nome:"HOME",link:"12456"},
    {nome:"PRODUCT",link:"12456"},
    {nome:"CONTACT",link:"12456"}
  ]


    return (
        <>
                  <Navbar>
      {
        itensNavegacao.map(aba => <Listitem item={aba} key={aba.nome}/>)
      }
      </Navbar>
      <Aside>
      
      </Aside>
      <Main />
        </>
    );
}

export default Inicio;