<script>
     import BigNav from './BigNav.svelte'
     import SmallNav from './SmallNav.svelte'
     import globalStore from '../../store/globalStore'
     import { getCourses } from '../../Requests/courses'
    
     let screenWidth;

     
  
</script>

<svelte:window bind:innerWidth={screenWidth}/>

{#if screenWidth > 800} 

     <BigNav/>
{:else}
<SmallNav/>
{/if}