import {Route, Routes} from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cliente from './pages/Cliente'
import ClienteList from './pages/ClienteList'
import ClienteAdd from './pages/ClienteAdd'
import ClienteEdit from './pages/ClienteEdit'
import NotFound from './pages/NotFound'
import "./App.css"

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<Inicio/>} />
        <Route path='cliente' element={<Cliente />}>
          <Route index element={<ClienteList />} />
          <Route path='add' element={<ClienteAdd />} />
          <Route path=':id/edit' element={<ClienteEdit />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
