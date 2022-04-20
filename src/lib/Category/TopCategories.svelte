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
           <div class="pb-3 font-bold text-lgPur">
            <h4>{cat.name}</h4>
        </div>
        <!-- Image -->
        <div class="pb-2">
            <img src="/images/hero.jpg" alt= "" class='w-auto rounded-lg'>
        </div>
         </div>
         {/each}
         {/await}
      </div>
      
 </section>