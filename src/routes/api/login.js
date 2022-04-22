import axios from "axios"
import url from "../../store/url";
import * as cookie from "cookie";
export const post = async({request})=>{
    const res = await request.json()
    const submitToserver = await axios.post(`${url}/signin`,res)
    let DataBody = submitToserver.data.detail
    console.log(DataBody);
    if( DataBody.status_code == 200){
        const headers = {
            "Set-Cookie":cookie.serialize('access_token',DataBody.access_token,{
                httpOnly:true,
                sameSite:"lax",
                maxAge: 60*60*24*7,
                path:'/'
                }),
            
        }
        return { 
            status:200,
            headers,
            body:{
                data:DataBody
            }
        }
    }


    return { 
        status:500,
        body:{
            data:DataBody
        }
    }


    // console.log(submitToserver);

    


}