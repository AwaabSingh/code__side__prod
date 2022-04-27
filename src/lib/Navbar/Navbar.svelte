<script>
     import BigNav from './BigNav.svelte'
     import SmallNav from './SmallNav.svelte'
     import SideBar from '$lib/Dashboard/SideBar.svelte';
     export let user;
     console.log(user);
</script>


<BigNav {user} />
<SmallNav/>
<SideBar {user}/>