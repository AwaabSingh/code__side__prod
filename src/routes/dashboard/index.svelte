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

        // console.log(u);
        // console.log(session);
        return {
            props:{u}
        }
    }

</script>


<script>
      import Sidebar from '../../lib/Dashboard/SideBar.svelte'; 
      import Mycourse from '../../lib/Dashboard/Mycourse.svelte'
      export let u;
      const user = u.data

    //   console.log(session.current_user.access_token);
 </script>

<<<<<<< HEAD
<div class="flex  bg-gray-100 w-full h-full ">
<Sidebar/>
<div class="md:w-9/12 h-auto">
=======
<div class="flex flex-wrap bg-gray-100 w-full h-screen ">
<Sidebar user={user}/>
<div class="w-9/12">
>>>>>>> dc1cd1308b911486d34f6a93491ebe6324b32df0
     <div class="p-4 text-gray-500">
         <Mycourse/>
     </div>
 </div>
</div>