import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Table from 'react-bootstrap/Table';

const reportes_prueba = [
    {'nombre': 'ciber', 'ganador': 'a', 'fecha': 1},
    {'nombre': 'prob', 'ganador': 'b', 'fecha': 2},
    {'nombre':'prob', 'ganador': 'c', 'fecha': 3},
]; 

function crearLista() {
    let lista = [];
    let reportes = Object.entries(reportes_prueba);
    reportes.forEach((reporte)=> lista.push(<tr><td>{reporte}</td> <td>{reporte}</td> <td>{reporte}</td></tr>));
    return lista;
};  

function Reportes () {


    return (
        <div>
            <h2 style={{textAlign: "center", color: 'white'}}>Historial de torneos</h2>
            <p style={{color: 'white'}}> Si no ves tu torneo aquí, revisa después de la fecha límite.</p>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Ganador</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                {
                        reportes_prueba.map((item) => (
                            <tr>
                                <td>{item.nombre}</td>
                                <td>{item.ganador}</td>
                                <td>{item.fecha}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
      );
}


export default Reportes;