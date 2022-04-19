import API_URL from './url'
import axios from 'axios'

// get all categries
export const getCategories = async () => {
    try {
        const response = await axios.get(`${API_URL}/getcategories`);

        return response.data.detail;
    } catch (error) {
        console.error(error)
    }
} 