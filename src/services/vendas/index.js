import axios from 'axios'


export const createSells = async (payLoad) => {
    let token = localStorage.getItem('TOKEN_KEY')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post('http://localhost:3333/sells', payLoad, config)
} 

export const getSells = async () => {
    let token = localStorage.getItem('TOKEN_KEY')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return await axios.get('http://localhost:3333/sells', config)
}