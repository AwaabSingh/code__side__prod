 <script>
     export let courses;

       import { paginate, LightPaginationNav } from 'svelte-paginate'
 
  let items = courses
  let currentPage = 1
  let pageSize = 9
  $: paginatedItems = paginate({ items, pageSize, currentPage })
 </script>
 <div class="flex flex-wrap -mx-1 lg:-mx-4 pb-5">
 {#each paginatedItems as course}
           <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">

                <a href={`/course/${course.publickKey}`}>
                    <img alt="Placeholder" class="block h-auto w-full" src={`https://aqueous-beyond-13704.herokuapp.com/static/${course.banner}`}>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline font-bold text-black" href={`/course/${course.publickKey}`}>
                            {course.title}
                        </a>
                    </h1>
                   
                </header>
                <article class='flex items-center justify-between leading-none p-2 '>
                    <!-- Rating -->
                       <div class="px-5">
                           <i class='bx bx-star text-csYellow text-xl'></i>
                            <span class='mx-2 text-lgPur font-bold text-sm md:text-xl'>4.5</span>
                       </div>
                    <!-- Duration -->
                      <div class="">
                         <i class='bx bx-time-five text-xl text-lgPur pt-2'></i>  
                         <span class='mx-1 text-lgPur font-bold text-sm mr-5 md:text-xl '>16 hrs</span>
                        </div>
                </article>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <div class="text-gray-500 text-md font-bold">
                        Course Price
                    </div>
                    <div class="no-underline ">
                        <span class="text-gray-500 text-md font-bold">&#8358;{course.price}</span>
                        <i class="fa fa-heart"></i>
                    </div>
                </footer>

            </article>
            <!-- END Article -->

        </div>
        {/each}
</div>
 
<div class="light-pagination-nav">
            <LightPaginationNav
  totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>
</div>

<style>
 .light-pagination-nav :global(.pagination-nav) {
  display: flex;
  justify-content: center;
  background: #6363A3;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.light-pagination-nav :global(.option) {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all ease-out;
  user-select: none;
  color: hsl(200, 90%, 10%);
 
}
.light-pagination-nav :global(.option.number),
.light-pagination-nav :global(.option.ellipsis) {
  padding: 10px 15px;
}
.light-pagination-nav :global(.option:hover) {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
}
.light-pagination-nav :global(.option.active) {
  color: #fff;
}
</style>