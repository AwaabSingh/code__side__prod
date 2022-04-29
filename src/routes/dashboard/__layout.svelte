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
    import Sidebar from '$lib/Dashboard/SideBar.svelte';
    import globalStore from '../../store/globalStore'
    import Mboard from '$lib/Dashboard/Mboard.svelte'
    
    export let u;
    const user = u;

    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineMenu from "svelte-icons-pack/ai/AiOutlineMenu";
    import {Toggle} from "$lib/utilities/actions"
</script>


    <div class="flex min-h-screen">
       
        <Sidebar {user}/>
        {#if $globalStore.mboard}
        <Mboard {user}/>
        {/if}
        
      
        <div class="flex flex-col w-full mx-5">
        <div class="md:hidden py-5">
            <div class="bg-white py-2 px-3 shadow-xl  w-12 rounded-full" on:click={() => globalStore.toggleItem('mboard', true)}>
                <Icon src={ AiOutlineMenu} color="#4F4F86" size="25"/>
            </div>
        </div>
         
         <slot/>
        </div>
      </div>