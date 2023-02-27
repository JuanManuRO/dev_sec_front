import React, {useState, useEffect} from 'react';
import { Pregunta } from './Pregunta';
import { useNavigate} from 'react-router-dom';
// import axios from'axios';


/* VERSIÓN CON BACKEND (incompleto, probablemente no funciona)*/
/*const FormPreguntas = () => {
    useEffect(()=>{
        axios.get('link_servidor')
            .then(res=>{
                console.log(res.data.data);
                setPreguntas(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    const [pregunta, setPreguntas] = useState([])

    const preguntas=pregunta.map((data, id)=>{
        return <div key={id}>
            <Pregunta idpregunta={data.idpregunta} pregunta={data.pregunta} opcion1={data.opcion1} opcion2={data.opcion2} opcion3={data.opcion3} opcion4={data.opcion4}/>
        </div>
    })
    
    return(
        preguntas
    );
}*/



const FormPreguntas=()=>{

    const navigate = useNavigate();

    const arraypreguntas=[
        {idpregunta: "hola123", pregunta:"pregunta", opcion1:"a", opcion2:"b", opcion3:"c", opcion4:"d"},
        {idpregunta: "probando", pregunta:"pregunta", opcion1:"a", opcion2:"b", opcion3:"c", opcion4:"d"},
        {idpregunta: "funcionaa", pregunta:"pregunta", opcion1:"a", opcion2:"b", opcion3:"c", opcion4:"d"}
    ]//preguntas de prueba

    let preguntas =[]; //para renderizar el numero de preguntas que lleguen
    let idpreguntas = {}; //para actualizar State de FormPreguntas
    
    const [respuestas, setRespuestas] = useState({});

    const respuestaAForm=(id, respuestapregunta)=>{
        if (id === undefined | respuestapregunta === undefined){}
        else{
           idpreguntas[id]=respuestapregunta 
        }
        //console.log(idpreguntas) //para pruebas
    } //para Lifting
    
    const enviarRespuestas = (e) =>{
        e.preventDefault();
        setRespuestas(idpreguntas) //se actualiza por el map de forma idpregunta:respuesta
        if (true) {
            navigate('/reportes')
        }
    }

    arraypreguntas.forEach((pregunta)=> preguntas.push(<Pregunta idpregunta={pregunta.idpregunta} pregunta={pregunta.pregunta} opcion1={pregunta.opcion1} opcion2={pregunta.opcion2} opcion3={pregunta.opcion3} opcion4={pregunta.opcion4} respuestaAForm={respuestaAForm}/>)) //para renderizar el numero de preguntas que lleguen

    arraypreguntas.forEach((pregunta)=> idpreguntas[pregunta.idpregunta]='') //para crear el map de forma idpregunta:respuesta

    
    return <div className="Preguntas">
        <div className="Contenedor-preguntas">
        <h1 id="titulo-preguntas">¡Que comience el juego!</h1>
        <form onSubmit={enviarRespuestas}>
            {preguntas}
            <input type="submit" id="submit-preguntas" value="Enviar"></input>
        </form> 
        </div>
    </div> 
    
    //se renderizan las preguntas dentro del formulario
    
}

export default FormPreguntas;