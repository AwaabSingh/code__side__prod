<script>
     import { page } from  '$app/stores'
import Loading from '$lib/Loading.svelte';
     import { getCourseByCategory } from '../../Requests/category'
     import comma  from '../../store/numcomma'
     
     let pk = $page.params.publickKey;
     console.log($page)
     let CatCourse = [];

     async function CatReq() {
          
     CatCourse = await getCourseByCategory(pk);
  
     }

     CatReq()
   </script>

<main id="bg" class="py-12">
<div class="container my- mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <!-- Column -->
       {#each CatCourse as course}
           <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg bg-white">

                <a href={`/course/${course.publickKey}`}>
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
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
                        <span class="text-gray-500 text-md font-bold">&#8358;{comma(course.price)}</span>
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
</main>
<style>
    /* #bg {
         background-image: linear-gradient(to right bottom, #fff, #545498) ,url('../img/hero.jpg');
  background-size: cover;
  background-position: top;
  position: relative;
    } */
</style>