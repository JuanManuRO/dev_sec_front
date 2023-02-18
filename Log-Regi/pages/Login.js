
import React, { useState } from 'react'

import Tittle from './Componentes/Tittle';
import Label from './Componentes/Label';
import Input from './Componentes/Input';


const Login = () => {

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
    let account = { user, password }
    if (account) {
      console.log('account:', account)
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
        <Label text ='¿Sin cuenta?'/>
        </div>
      </div>
    </div>
  )

};

export default Login;
