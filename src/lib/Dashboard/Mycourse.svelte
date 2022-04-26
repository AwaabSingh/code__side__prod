<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import BsBook from "svelte-icons-pack/bs/BsBook";
  
  const cards = [0,1,2,3]
</script>

<div class="max-w-6xl px- mx-auto mt-20  ">
  <!-- Heading -->
  <h2 class="text-xl md:text-4xl font-bold text-center">
      My Courses
  </h2>
  <div class="mt-20 mx-4 gap-6 grid grid-cols-1 md:grid-cols-3">
      {#each cards as card}
      <div class="mx- my-">
        <div class="mx-auto flex  flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 space-x-4">
          <!-- img -->
          <img class="aspect-video  rounded-t-2xl object-cover object-center" src="/images/hero.jpg" alt=""/>
          <!-- text information -->
          <div class="p-4">
           <div class="space-y-2">
            <small class=" text-xs">Web Development</small>
            <h1 class="text-2xl font-medium text-slate-600 pb-2">Papa React</h1>
               <div class="flex space-x-5 ">
                 <Icon src={BsBook} color='#4F4F86' size='20'/>
                 <h6>95 lessons</h6>
               </div>
           </div>
           <!-- btn -->
           <div class="mt-6">
               <h6 class="text-lgPur">Resume to course</h6>
           </div>
          </div>
        </div>
      </div>
      {/each}
 
      
  </div>
    
</div>