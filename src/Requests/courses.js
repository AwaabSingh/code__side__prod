import url from '../store/url';
import axios from 'axios'


// Get all products
export const getCourses = async () => {
    try {
        const response = await axios.get(`${url}/allcourse`)

     
       return response.data.detail;
       
    } catch (error) {
        console.log(error)
    }
}

export const getCourse = async (coursePk) => {
    try {
        const response = await axios.get(`${url}/getcousebyid/${coursePk}`)

        return response.data.detail;
    } catch (error) {
        console.log(error)
    }
}