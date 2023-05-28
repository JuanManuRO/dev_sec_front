import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Api from '../apis/api';

const temas_prueba = {"topics":[{"_id":"64221cb1ab2fcb15c2c32fcf","name":"Ciberseguridad","createdAt":"2023-03-27T22:46:09.121Z","updatedAt":"2023-03-27T22:46:09.125Z"},{"_id":"64221cceab2fcb15c2c32fd8","name":"Analisis Forense","createdAt":"2023-03-27T22:46:38.396Z","updatedAt":"2023-03-27T22:46:38.396Z"},{"_id":"64221ce7ab2fcb15c2c32fdf","name":"Criptografia ","createdAt":"2023-03-27T22:47:03.324Z","updatedAt":"2023-03-27T22:47:03.324Z"},{"_id":"6424a9323df5fccbf33a538e","name":"IOS","createdAt":"2023-03-29T21:10:10.877Z","updatedAt":"2023-03-29T21:10:10.880Z"},{"_id":"6424a93f3df5fccbf33a5395","name":"Movil","createdAt":"2023-03-29T21:10:23.756Z","updatedAt":"2023-03-29T21:10:23.756Z"}]};

function crearSelTem() {
    const api = new Api();
    const topics = api.getTopics();
    let opciones = [];
    temas_prueba["topics"].forEach((tema)=> opciones.push(<option>{tema["name"]}</option>));
    return opciones;
};  





function CrearTorneo () {

    const navigate = useNavigate();

    const [TorDetails, setDetails] = useState({torTema: "", torPreg: "", torPart: "", torFecha: "" });
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            navigate("/ingresar")
        }
        setValidated(true);
        
    };

    return (
        <Stack
        style = {{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
        }}>
        <div>
        <h1 style = {{
          color: 'white'
        }}>
        Crear un toreno</h1>
        </div>
        <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="text-center">
            <Form.Select aria-label = 'Select_Tema' 
            onChange = {e => setDetails({...TorDetails, torTema: e.target.value})} value = {TorDetails.torTema}>
                {crearSelTem()}

            </Form.Select>

            <Form.Group className="mb-3" controlId="formPreg">
                <Form.Label style = {{color: 'white'}}>Cantidad de preguntas</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Cantidad" 
                    onChange = {e => setDetails({...TorDetails, torPreg: e.target.value})} value = {TorDetails.torPreg}/>
                <Form.Control.Feedback type="invalid">
                    Ingrese una cantidad
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPart">
                <Form.Label style = {{color: 'white'}}>Cantidad de participantes</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Cantidad" 
                    onChange = {e => setDetails({...TorDetails, torPart: e.target.value})} value = {TorDetails.torPart}/>
                <Form.Control.Feedback type="invalid">
                    Ingrese una cantidad
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFecha">
                <Form.Label style = {{color: 'white'}}>Fecha para finalizar</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="dd/mm/aaaa" 
                    onChange = {e => setDetails({...TorDetails, torFecha: e.target.value})} value = {TorDetails.torFecha}/>
                <Form.Control.Feedback type="invalid">
                    Ingrese una fecha
                </Form.Control.Feedback>
            </Form.Group>

            <Row className="justify-content-md-center">
            <Button variant="primary" type="submit" className = "button">
                Submit
            </Button>
            </Row>

        </Form>
        </div>
      </Stack>
    )
}


export default CrearTorneo;
