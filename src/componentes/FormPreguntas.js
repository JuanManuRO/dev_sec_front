import React, {useState} from 'react';
import { Pregunta } from './Pregunta';
import { useNavigate} from 'react-router-dom';
import Api from '../apis/api';

const FormPreguntas=()=>{

    const navigate = useNavigate();

    //preguntas de prueba
    /*const arraypreguntas=[
        {idpregunta: "hola123", pregunta:"pregunta", opcion1:"a", opcion2:"b", opcion3:"c", opcion4:"d"},
        {idpregunta: "probando", pregunta:"pregunta", opcion1:"a", opcion2:"b", opcion3:"c", opcion4:"d"},
        {idpregunta: "funcionaa", pregunta:"pregunta", opcion1:"a", opcion2:"b", opcion3:"c", opcion4:"d"}
    ]*/

    const api = new Api();
    const preguntasApi = api.getPreguntas();
    const preguntas=preguntasApi.map((data, id)=>{
        return <div key={id}>
            <Pregunta idpregunta={data.idpregunta} pregunta={data.pregunta} opcion1={data.opcion1} opcion2={data.opcion2} opcion3={data.opcion3} opcion4={data.opcion4} respuestaAForm={respuestaAForm}/>
        </div>
    })

    //let preguntas =[]; //para renderizar el numero de preguntas que lleguen con arraypreguntas
    let idpreguntas = {}; //para actualizar State de FormPreguntas
    
    const [respuestas, setRespuestas] = useState({});

    const respuestaAForm=(id, respuestapregunta)=>{
        if (id === undefined){throw "undefinedID"}
        else{
           idpreguntas[id]=respuestapregunta 
        }
    }//para Lifting
    
    const enviarRespuestas = (e) =>{
        e.preventDefault()
        setRespuestas(idpreguntas);
        errorRespuestas();
    }
    
    const errorRespuestas = () =>{ //para no enviar respuestas vacías
        try {
            emptyResponse();
            api.postPreguntas(respuestas);
            navigate("/crear_torneo");
        } catch (err){
            alert("RESPONDA TODAS LAS PREGUNTAS (si ya ha respondido, ignore este mensaje y vuelva a Enviar"); //no logré que todas las respuestas se actualizaran al instante, pero sirve dando un click más al botón de Enviar
        }
    }

    const emptyResponse=()=>{ //error de respuestas vacías
        let error=0;
        let cont=0;
        for(var respuesta in respuestas){
            cont++;
            console.log(respuestas[respuesta])
            if (respuestas[respuesta]===undefined){
                error++;
            }
        }
        if(error>0 | cont===0){
            throw "emptyResponse"
        }
    }

    //para preguntas de prueba
    /*arraypreguntas.forEach((pregunta)=> preguntas.push(<Pregunta idpregunta={pregunta.idpregunta} pregunta={pregunta.pregunta} opcion1={pregunta.opcion1} opcion2={pregunta.opcion2} opcion3={pregunta.opcion3} opcion4={pregunta.opcion4} respuestaAForm={respuestaAForm}/>)) //para renderizar el numero de preguntas que lleguen

    arraypreguntas.forEach((pregunta)=> idpreguntas[pregunta.idpregunta]='') //para crear el map de forma idpregunta:respuesta*/

    
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