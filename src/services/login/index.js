import axios from "axios";
import { handleErrors } from "../../common/utils/handlers/handleErrors";
import { post } from "../baseService";

export const login = async (payLoad) => {
    try {
        const response = await post('http://localhost:3333/sessions', payLoad);
        console.log(response)
        if (response.success) {
            localStorage.setItem('TOKEN_KEY', response.data.token);
        }

        return response;
    } catch (error) {
        return handleErrors(error)
    }

}

// export const login = async (payload) => {
//     let token = localStorage.setItem('TOKEN_KEY', response.data.token)
//     const config = {
//         headers: { Authorization: `Bearer ${token}`}
//     }
//     return await axios.post('http://localhost:3333/sessions', payload,config)
// }