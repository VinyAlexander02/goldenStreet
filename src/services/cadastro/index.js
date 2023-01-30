import axios from 'axios'
// import { get } from '../baseService'


export const createProducts = async (payLoad) => {
    let token = localStorage.getItem('TOKEN_KEY')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post('http://localhost:3333/products', payLoad, config)
} 

export const getProducts = async () => {
    let token = localStorage.getItem('TOKEN_KEY')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get('http://localhost:3333/products', config)  

}

