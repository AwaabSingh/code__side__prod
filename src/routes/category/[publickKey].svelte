<script>
     import { page } from  '$app/stores'
import Loading from '$lib/Loading.svelte';
     import { getCourseByCategory } from '../../Requests/category'
     import comma  from '../../store/numcomma'
      import { Skeleton } from 'svelte-loading-skeleton';
     
     let pk = $page.params.publickKey;
     let CatCourse = [];

     async function CatReq() {
          
     CatCourse = await getCourseByCategory(pk);
  
     }

     CatReq()
   </script>

<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <!-- Column -->
       {#each CatCourse as course}
           <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href={`/course/${course.publickKey}`}>
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline font-bold text-black" href="#">
                            {course.title}
                        </a>
                    </h1>
                   
                </header>
                <article class='flex items-center justify-between leading-none p-2 md:p-4'>
                    <!-- Rating -->
                       <div class="">
                           4.5
                       </div>
                    <!-- Duration -->
                      <div class="">16 Hrs</div>
                </article>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <div class="">
                        Course Price
                    </div>
                    <div class="no-underline  hover:text-red-dark">
                        <span class="">&#8358;{comma(course.price)}</span>
                        <i class="fa fa-heart"></i>
                    </div>
                </footer>

            </article>
            <!-- END Article -->

        </div>
        {:else}
         <Loading/>
       {/each}
        <!-- END Column -->


    </div>
</div>