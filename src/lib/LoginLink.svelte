<script>
   
    export let user;

 

    
</script>

{#if user}
     <a href="/dashboard" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Go Back to dashboard</a>
{:else}
<a href="/login" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Login</a>
{/if}
<!-- <a href="/login"
class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
>
Login
</a> -->