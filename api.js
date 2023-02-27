import axios from 'axios';

class Api{
    constructor(){
        this.API = axios.create({

        })
    }

    getTopics=async (page) => {
        try {
            console.log(page)
            const rest = await this.API.get(`http://10.19.93.211:3001/api/v1/topics`)

            return rest.data
        } catch (e) {
            throw e
        }
    }
}

export default Api;