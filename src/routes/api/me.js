import jwt_decode from "jwt-decode";


export const post = async({request})=>{
    const data = await request.json()

    const decode = jwt_decode(data.token)
    console.log(decode);
    console.log('param');

    return{
        status:200,
        body:decode
    }
}