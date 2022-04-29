<script>
import { goto } from '$app/navigation';

   
   import {  session } from '$app/stores'
    

    const userToken = $session.current_user.access_token;
 
    const logout = async () => {
     sessionStorage.clear();  
     goto('/')
    }
    
</script>

{#if userToken}
     <div class="flex space-x-5">
          <a href="/dashboard" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Dashboard</a>
          <!-- <button on:click="{logout}" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Logout</button> -->
     </div>
{:else}
<a href="/login" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Login</a>
{/if}