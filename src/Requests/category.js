import url from '../store/url'
import axios from 'axios'

// get all categories 
export const getCategories = async () => {
      try {
          const response = await axios.get(`${url}/getcategories`)

          return response.data.detail
      } catch (error) {
          console.log(error)
      }
}

export const getCourseByCategory = async (pk) => {
	try {
		const response = await axios.get(`${url}/getCourse?categoriespbk=${pk}`);
		console.log(response.data.detail);
		return response.data.detail;
	} catch (error) {
		console.log(error);
	}
};
