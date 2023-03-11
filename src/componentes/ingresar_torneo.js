import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Api from '../apis/api';
import {useNavigate, Link} from 'react-router-dom';
import './ingresar_torneo.css'
// const temas_prueba = {
//     python: 1,
//     c: 2,
//     r: 3,
//     ruby: 4    
// }; 

 

function IngresarTorneo () {
    const navigate = useNavigate();

    const ir_reportes = ()=>{
      navigate('/reportes')
    }
  
    const [TorDetails, setDetails] = useState({torTema: "", torPreg: "", torPart: "", torFecha: "" });
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (true) {
          navigate('/preguntas')
        }
    };

    return (
        <Stack className='App'>
        <div className='texto'>
          <h1>Ingresar a un Torneo</h1>
        </div>
        <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="ingreso">
            <Form.Group className="ingresar" controlId="formPreg">
                <Form.Label></Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Codigo" 
                    onChange = {e => setDetails({...TorDetails, torPreg: e.target.value})} value = {TorDetails.torPreg}/>
                <Button variant="primary" type="submit" className = "button">
                  ¡Listo!
                </Button>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFecha">
              <div className='text_no'>
              ¿No tienes un torneo?
              </div>
              <Link to = {'/crear_torneo'}>Crea uno</Link>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formFecha">
            <div className='text_no'>
              <h1>Revisa el historial de torneos:</h1>
            </div>
            </Form.Group>
            <Row className="justify-content-md-center">
            <Button variant="primary"  className = "button" onClick = {ir_reportes}>
                ¡Vamos!
            </Button>
            </Row>

        </Form>
        </div>
      </Stack>
    )
}


export default IngresarTorneo;