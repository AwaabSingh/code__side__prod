<script>
     import BigNav from './BigNav.svelte'
     import SmallNav from './SmallNav.svelte'
     import globalStore from '../../store/globalStore'
     // export let user;
     // console.log(user);

     let screenWidth;
     $: if (screenWidth > 800) {
        globalStore.toggleItem('sidebar', false)
     }
</script>

<svelte:window bind:innerWidth={screenWidth}/>

{#if screenWidth > 800} 
<BigNav/>
{:else}
<SmallNav/>
{/if}