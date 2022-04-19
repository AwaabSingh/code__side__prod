import url from '../store/url';
import axios from 'axios'


// Get all products
export const getProducts = async () => {
    try {
        const response = await axios.get(`${url}/allcourse`)

       return response.data;

    } catch (error) {
        console.log(error)
    }
}