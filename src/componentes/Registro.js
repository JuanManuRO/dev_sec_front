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
  const [conf_password, setConfPassword] = useState('');
  const [email, setEmail] = useState('');
  const [tema_interes, setTema] = useState('');

  function HandleChange(name, value) {
    if (name === 'usuario') {
      setUser(value)
    } else if (name === 'contraseña') {
      setPassword(value)

    } else if (name === 'conf_contraseña') {
      setConfPassword(value)

    }else if (name === 'tema_interes') {
      setTema(value)
    } else {
      setEmail(value)
    }
  };

  function HandleSubmit() {
    const api=new Api();
    api.postRegistro({username: user,
                     password: password, 
                     password2: conf_password,
                     email: email,
                     tema_interes: tema_interes})

    let newaccount = { user, password, conf_password ,email, tema_interes }
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
          <Label text='Confirmar contraseña:' />
          <Input
            attribute={{
              id: 'conf_contraseña',
              name: 'conf_contraseña',
              type: 'password',
              placeholder: 'Confirmar contraseña'
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
          <Label text='Tema de interés:' />
          <Input
            attribute={{
              id: 'tema_interes',
              name: 'tema_interes',
              type: 'text',
              placeholder: 'Tema de interés:'
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
