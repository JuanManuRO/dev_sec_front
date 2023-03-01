import React, { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom';
import Api from '../apis/api';

import Tittle from './Tittle';
import Label from './Label';
import Input from './Input';



const Registro = () => {
  const navigate = useNavigate();

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
    const api=new Api();
    api.postRegistro({name:user})
    
    let newaccount = { user, password, email }
    if (newaccount) {
      console.log('new account:', newaccount)
    }
    if (true) {
      navigate('/')
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
            <Link to = {'/'}>¿Ya tienes cuenta?</Link>
          </div>
        </div>
      </div>


    </div>
  )

};
export default Registro;
