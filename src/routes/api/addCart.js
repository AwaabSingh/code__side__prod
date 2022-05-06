import axios from 'axios'

export const post = async ({ request }) => {
    const res = await request.json()
    const submitToserver = await axios.post(`https://aqueous-beyond-13704.herokuapp.com/addcart;
`,res)
    let DataBody = submitToserver.data.detail 


    // console.log(decode);
    // console.log('param');

    return{
        status:200,
        body: DataBody
    }
}