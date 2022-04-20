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