<script context="module">
    import axios from 'axios';
    import {GetUser} from '../../Requests/users'
    export const load = async ({session})=>{
        const u = await GetUser({'token':session.current_user.access_token})
        if(!session.current_user.access_token){
            return {
                status:304,
                redirect:'/',
                body:{
                    'message':'user not authorize'
                }
            }
        }
        // console.log(u.data);
        // console.log(session);
        return {
            props:{u: u.data}
        }
    }
</script>

<script>
    import Sidebar from '$lib/Dashboard/SideBar.svelte'
    
    export let u;
    const user = u;
</script>

<!-- <div class="flex flex-wrap bg-gray-100 w-full h-auto ">
<Sidebar {user}/>
    <div class="md:w-9/12">
         <div class="p-4 text-center text-gray-500">
            <slot/>
         </div>
     </div>
    </div> -->

    <div class="flex min-h-screen">
       
        <Sidebar {user}/>
      
        <div class="flex flex-col w-full mx-5">
         
         <slot/>
        </div>
      </div>