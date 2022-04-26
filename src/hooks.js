import * as cookie from "cookie";

export const handle = async ({event,resolve})=>{
 
        // we get the cookie from the header and parse it 
        const cookies = cookie.parse(event.request.headers.get('cookie')||'')
        console.log(cookies.access_token);
        event.locals.user = cookie;

        //here we check if the cookie exist (contain access_token) we set the 
        // auth state to true  if not to false 
        if(!cookies.access_token){event.locals.user.is_authenticated = false
        }else{event.locals.user.is_authenticated = true}

        console.log(event.locals.user.access_token);
        const res = await resolve(event)
        return res
}

export const getSession = async (event)=>{
        // this getsession method will allow us to access users session in the
        // client side check dashboard to see  the demo
        const current_user =  cookie.parse(await event.request.headers.get('cookie')||'')
        console.log(current_user.access_token);
        if(!current_user.access_token){
                console.log('not here');
                return {}
        }

        console.log('here');
        return {
                current_user,
        }
    
}