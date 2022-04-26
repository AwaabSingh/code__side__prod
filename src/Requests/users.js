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
          const response = await axios.post(`api/login`, {email, password})
          console.log(response);

        //   if(response) {
        //     setupUser(response)
        //   }

          return response;
      } catch (error) {
          console.log(error)
      }
  }



  export const GetUser = async (data)=>{
      const res = await axios.post(`http://localhost:3000/api/me`,data)
      return res
  }