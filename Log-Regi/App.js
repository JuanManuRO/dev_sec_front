import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './pages/Login'
import Registro from './pages/Registro'

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>todo ok..</h1>
        <hr/>
        <Routes>
          <Route path='/contacto'>
            Esta es la pagina de login
          </Route>

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
