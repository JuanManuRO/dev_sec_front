import axios from 'axios';
const ip_temas = `http://18.235.214.57:3001/api/v1/topics`
const ip_registro = `http://34.226.45.247:5000/register`
const ip_login = `http://10.19.64.199:3000/api/auth/login`
const ip_torneo = ``


class Api{
    constructor(){
        this.API = axios.create({})
    }

    getTopics=async (page) => {
        try {
            console.log(page)
            const rest = await this.API.get(ip_temas)

            return rest.data
        } catch (e) {
            throw e
        }
    }

    postRegistro=async (name) => {
        try {
            console.log(name)
            const rest = await this.API.post(ip_registro, name)

            console.log(rest.data.message)
            alert("Credenciales correctas")
        } catch (e) {
            console.log(e)
            alert("Credenciales incorrectas")
        }
    }

    postLogin=async (name) => {
        axios.post(ip_login, name)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    getPreguntas = async (page) => {
        try {
            console.log(page)
            const rest = await this.API.get(ip_torneo)
        } catch (e) {
            console.log(e)
        }
    }

    postPreguntas = async (respuestas) => {
        try {
            console.log()
            const rest = await this.API.post(ip_temas,respuestas)

            console.log(rest.data.message)
            alert("Respuestas enviadas")
        } catch (e) {
            console.log(e)
            alert("Algo no salió bien...")
        }
    }

}

export default Api;
