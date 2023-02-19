import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import CrearTorneo from './componentes/crear_torneo'

document.body.style = 'background: #000000;';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>todo ok..</h1>
        <hr/>
        <Routes>
          <Route exact path='/' element = { <Login/> }/>
          <Route exact path='/registro' element = { <Registro/> }/>
          <Route exact path='/crear_torneo' element = { <CrearTorneo/> }/>
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
