import React, { useState } from 'react'

import Tittle from './Componentes/Tittle';
import Label from './Componentes/Label';
import Input from './Componentes/Input';



const Registro = () => {


  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function HandleChange(name, value) {
    if (name === 'usuario') {
      setUser(value)
    } else if (name === 'contraseña') {
      setPassword(value)

    } else {
      setEmail(value)
    }
  };

  function HandleSubmit() {
    let newaccount = { user, password, email }
    if (newaccount) {
      console.log('new account:', newaccount)
    }
  };
  return (

    <div>
      <div className='registro-container'>
        <div className='registro-content'>
          <Tittle text='Registro' />
          <Label text='Nombre de usuario:' />
          <Input
            attribute={{
              id: 'usuario',
              name: 'usuario',
              type: 'text',
              placeholder: 'Nombre de usuario'
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
          <Label text='Email:' />
          <Input
            attribute={{
              id: 'email',
              name: 'email',
              type: 'text',
              placeholder: 'Email'
            }}
            handleChange={HandleChange}

          />

          <div className='submit-button-container'>
            <button onClick={HandleSubmit} className='button'>
              ¡Listo!
            </button>
            <Label text='¿Ya tienes cuenta?' />
          </div>
        </div>
      </div>


    </div>
  )

};
export default Registro;