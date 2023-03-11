import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import IngresarTorneo from './componentes/ingresar_torneo'
import CrearTorneo from './componentes/crear_torneo'
import FormPreguntas from './componentes/FormPreguntas'
import Reportes from './componentes/reportes'

document.body.style = 'background: #000000;';

function App() {
  return (
    <Router>
      <div className='App'>
        <hr/>
        <Routes>
          <Route exact path='/' element = { <Login/> }/>
          <Route exact path='/registro' element = { <Registro/> }/>
          <Route exact path='/ingresar' element = { <IngresarTorneo/> }/>
          <Route exact path='/crear_torneo' element = { <CrearTorneo/> }/>
          <Route exact path='/preguntas' element = {<FormPreguntas/> }/>
          <Route exact path='/reportes' element = {<Reportes/> }/>
        </Routes>
        
        {/*
        <header className='App-header'>
          <Login />
        </header>
  */}

      </div>
    </Router>

  );
}

export default App;
