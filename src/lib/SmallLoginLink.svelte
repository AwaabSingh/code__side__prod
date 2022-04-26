<script>
   import { logoutUser } from '../store/userStore'
    import globalStore from '../store/globalStore'
    import { onMount } from 'svelte'

//     let jwt;

//    onMount(() => {
       
//        jwt = $user.detail.access_token
//    })

  
</script>


<a  on:click="{() => {
    logoutUser()
    globalStore.toggleItem('sidebar', false)}}"
    href="/"
    class=" p-2 px-32 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
    >
    Logout
</a>
<a  on:click="{() => globalStore.toggleItem('sidebar', false)}"
    href="/login"
    class=" p-2 px-32 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
    >
    Login
</a>
