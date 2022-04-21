import axios from 'axios';
import url from '../store/url'
import setupUser from './setupUser'

// Register users

export const registerUser = async ({email, fullname, password}) => {
       try {
           const response = await axios.post(`${url}/signup`, {email, fullname, password})
            if(response){
               setupUser(response)
            }

            return response;
       } catch (error) {
           console.log(error)
       }
}


//  authenticate or login user with
  export const loginUser = async ({ email, password}) => {
      try {
          const response = await axios.post(`${url}/signin`, {email, password})

          if(response) {
            setupUser(response)
          }

          return response;
      } catch (error) {
          console.log(error)
      }
  }