import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Cliente from './pages/Cliente';
import AddCliente from './pages/AddCliente';
import EditCliente from './pages/EditCliente';
import ViewCliente from './pages/ViewCliente';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='cliente' element={<Cliente />} >
          <Route index  element={<AddCliente />} />
          <Route path='edit/:id' element={<EditCliente />} />
          <Route path='view' element={<ViewCliente />} />  
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
