<script>
    import Loading from '../Loading.svelte'
    import { getCategories } from '../../Requests/category'
  

</script>

 <section id="top__categories" class='bg-lgPur pb-16'>
      <div class="text-center md:text-left py-5">
           <h1 class='font-bold text-2xl md:text-4xl pl-16 text-white'>Top Categories</h1>
      </div>
      <!-- content -->
    
      <div class=" grid grid-cols-2 mx-3 mt-10 gap-x-3 md:gap-x-4 md:gap-y-6 md:grid-cols-3 lg:grid-cols-4 md:mx-10">
          {#await getCategories()}
          <Loading/>
          {:then catgories}
        {#each catgories as cat}
         <div class="bg-white px-5 py-3 rounded-xl shadow-lg mb-3 ">
              <!-- text -->
              <a href={`/category/${cat.publickKey}`}>
           <div class="pb-3 font-bold text-lgPur uppercase">
            <h4>{cat.name}</h4>
        </div>
        </a>
        <!-- Image -->
        <div class="pb-2">
            <a href={`/category/${cat.publickKey}`}>
            <!-- {#if cat.name === "Web development"}
            <img src="/images/webdev-01.png" alt= "" class='w-auto rounded-lg'>
            {:else if cat.name === "Web3"}
            <img src="/images/web3_w3.png" alt= "" class='w-auto rounded-lg'>
            {:else if cat.name === "Data Science"}
            <img src="/images/datascience_ds.png" alt= "" class='w-auto rounded-lg'>
            {:else if cat.name === "Blockchain technology"}
            <img src="/images/blockchain-01.png" alt= "" class='w-auto rounded-lg'>
            {:else if cat.name === "Machine learning"}
            <img src="/images/machine-learning-01.png" alt= "" class='w-auto rounded-lg'>
            {:else if cat.name === "Computer Science"}
            <img src="/images/compscience-01.png" alt= "" class='w-auto rounded-lg'>
            {:else} -->
            <img src={`https://aqueous-beyond-13704.herokuapp.com/static/${cat.banner}`} alt= "" class='w-auto rounded-lg'>
            <!-- {/if} -->
            </a>
        </div>
         </div>
         {/each}
         {/await}
      </div>
      
         <!-- <div class="pb-2">
            <a href={`/category/${cat.publickKey}`}>
             <img src={`${url}/static/${cat.banner}`} alt= "" class='w-auto rounded-lg'>
             </a>
            
        </div> -->
 </section>