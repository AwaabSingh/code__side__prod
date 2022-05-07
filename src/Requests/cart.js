import axios from 'axios'
import url from '../store/url'

// Add to cart
// export const addCart = async (userToken, pk) => {
//     try {
//         const config = {
//                     headers:  {
//                     'user-token': ` ${userToken}`,
//                      'content-type': 'application/json'
//                                       }} 
//         const response = await axios.post(`${url}/addcart`, pk, config)
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Get cart

export const getCart = async (userToken) => {
    try {
        const config = {
            headers: {
                'content-type': 'application/json',
                'Authorization': `${userToken}`
            }
       } 
        const response = await axios.get(`${url}/getcart`, config)
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


