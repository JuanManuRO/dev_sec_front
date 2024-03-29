
import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom';
import Api from '../apis/api';

import Tittle from './Tittle';
import Label from './Label';
import Input from './Input';


const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function HandleChange(name, value) {
    if (name === 'usuario') {
      setUser(value)
    } else {
      setPassword(value)

    }
  };

  function HandleSubmit() {
    const api=new Api();
    const response=api.postLogin({username:user, password:password})
    alert(response)

    let account = { user, password }
    if (account) {
      console.log('account:', account)
    }
    if (false) {
      navigate('/ingresar')
      
    }
  };
  return (

    <div className='login-container'>
      <div className='login-content'>
        <Tittle text='Log in' />
        <Label text='Nombre de usuario:' />
        <Input
          attribute={{
            id: 'usuario',
            name: 'usuario',
            type: 'text',
            placeholder: 'Ingrese su usuario'
          }}
          handleChange={HandleChange}

        />
        <Label text='Contraseña:' />
        <Input
          attribute={{
            id: 'contraseña',
            name: 'contraseña',
            type: 'password',
            placeholder: 'Ingrese su contraseña'
          }}
          handleChange={HandleChange}

        />
        
        <div className='submit-button-container'>
          <button onClick={HandleSubmit} className='button'>
            ¡Listo!
          </button>
          <Link to = {'./registro'}>¿Sin cuenta?</Link>
        
        </div>
      </div>
    </div>
  )

};

export default Login;
