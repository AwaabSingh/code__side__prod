<script>

    import globalStore from '../store/globalStore'

    import {  session } from '$app/stores'
    

    const userToken = $session.current_user.access_token;
  
</script>


{#if userToken}
<a  on:click="{() => globalStore.toggleItem('sidebar', false)}"
    href="/dashboard"
    class=" p-2 px-32 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
    >
    Dashboard
</a>

{:else}
<a  on:click="{() => globalStore.toggleItem('sidebar', false)}"
    href="/login"
    class=" p-2 px-32 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
    >
    Login
</a>
{/if}