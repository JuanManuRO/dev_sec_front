import PropTypes from 'prop-types'
import { useState, useEffect } from "react";
import { FormGroup, Label, Input } from "reactstrap";

export function Pregunta({
  idpregunta,
  pregunta = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada justo ut risus congue consectetur. In aliquam vestibulum velit vitae aliquet. Phasellus pellentesque consequat convallis. Cras tempor consequat metus, id.",
  opcion1 = "opcion1",
  opcion2 = "opcion2",
  opcion3 = "opcion3",
  opcion4 = "opcion4",
  respuestaAForm //para Lifting
}) {
  const [respuesta, setRespuesta] = useState();

  useEffect(()=>{ //para actualizar instantáneamente
    if (respuesta===undefined){}
    else{
      respuestaAForm(idpregunta, respuesta);
    }
  },[respuesta, idpregunta, respuestaAForm]);

  const cambioRadioRespuesta= (e)=>{
    setRespuesta(e.target.value)
    respuestaAForm(idpregunta, respuesta) //para lifting
  }

  return (
    <div className="FormPreguntas">
      <FormGroup>
        <div className="fondoPregunta">
          <p id="pregunta">¿{pregunta}?</p>
        </div>
        <br />

        <FormGroup className="formGroupRadios">
          <FormGroup>
            <Input
              id={idpregunta+opcion1} //para que cada opcion tenga un id único, sin importar si la opcion llega a ser igual en varias preguntas
              type="radio"
              value={idpregunta+opcion1}
              name={idpregunta+opcion1}
              checked={respuesta === idpregunta+opcion1 ? true : false}
              onChange={cambioRadioRespuesta}
            />
            <Label for={idpregunta+opcion1}>{opcion1}</Label>
          </FormGroup>

          <FormGroup>
            <Input
              id={idpregunta+opcion2}
              type="radio"
              value={idpregunta+opcion2}
              name={idpregunta+opcion2}
              checked={respuesta === idpregunta+opcion2 ? true : false}
              onChange={cambioRadioRespuesta}
            />
            <Label for={idpregunta+opcion2}>{opcion2}</Label>
          </FormGroup>

          <FormGroup>
            <Input
              id={idpregunta+opcion3}
              type="radio"
              value={idpregunta+opcion3}
              name={idpregunta+opcion3}
              checked={respuesta === idpregunta+opcion3 ? true : false}
              onChange={cambioRadioRespuesta}
            />
            <Label for={idpregunta+opcion3}>{opcion3}</Label>
          </FormGroup>

          <FormGroup>
            <Input
              id={idpregunta+opcion4}
              type="radio"
              value={idpregunta+opcion4}
              name={idpregunta+opcion4}
              checked={respuesta === idpregunta+opcion4 ? true : false}
              onChange={cambioRadioRespuesta}
            />
            <Label for={idpregunta+opcion4}>{opcion4}</Label>
          </FormGroup>
        </FormGroup>
      </FormGroup>
    </div>
  );
}

Pregunta.propTypes = { //para que todos los parametros tengan un tipo de dato obligatorio
  idpregunta: PropTypes.string,
  pregunta: PropTypes.string,
  opcion1: PropTypes.string,
  opcion2: PropTypes.string,
  opcion3: PropTypes.string,
  opcion4: PropTypes.string
}
