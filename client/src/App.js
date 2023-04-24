import './App.css';
import LandingPage from './vistas/LandingPage.jsx';
import Home from './vistas/Home.jsx';
import Nav from './componentes/Nav.jsx';
import Busqueda from './vistas/Busqueda';
import Detail from './vistas/Detail';
import FormCreate from './vistas/FormCreate'
import { Routes, Route, useLocation} from 'react-router-dom'
function App() {
  const location=useLocation([]);
  return (
    <div className="App">
      {location.pathname === '/' ? <LandingPage/> : <Nav/>}
       <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/search' element={<Busqueda/>}/>
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/createGame" element={<FormCreate />} />
      </Routes>
     
    </div>
  );
}

export default App;
