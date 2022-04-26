<script>
     import BigNav from './BigNav.svelte'
     import SmallNav from './SmallNav.svelte'
     import SideBar from './SideBar.svelte';
     export let user;
     console.log(user);
</script>


<BigNav user={user} />
<SmallNav/>
<SideBar/>