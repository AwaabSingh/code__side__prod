export const handle = async ({event,resolve})=>{
        const res = await resolve(event)
        return res
}

// export const getSession = (event)=>{
//     // console.log(event.request.headers)
// }