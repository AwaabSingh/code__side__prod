<script>
     import BigNav from './BigNav.svelte'
     import SmallNav from './SmallNav.svelte'
     let screenWidth;
     
</script>

<svelte:window bind:innerWidth={screenWidth}/>

{#if screenWidth > 768} 
<BigNav/>
{:else}
<SmallNav/>
{/if}