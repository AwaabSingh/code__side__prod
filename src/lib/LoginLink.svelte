<script>
    import { logoutUser } from '../store/userStore'
    import globalStore from '../store/globalStore'
    import user from '../store/userStore'
    import { onMount } from 'svelte'

    let jwt;

    onMount(() => {
       
        jwt = $user.detail.access_token
    })

    
</script>

{#if jwt}
     <a href="/" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur" on:click="{() => 
    { logoutUser()
     globalStore.toggleItem('sidebar', false)}}">Logout</a>
{:else}
<a href="/login" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"  on:click="{() => globalStore.toggleItem('sidebar', false)}">Login</a>
{/if}
<!-- <a href="/login"
class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
>
Login
</a> -->