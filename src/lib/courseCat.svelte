
<script>
     // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/svelte';
import CourseCard from '../lib/Course/CourseCard.svelte'
// import Products from '../store/courseStore'
import { onMount } from 'svelte'
import url from '../store/url'
import Loading from '../lib/Loading.svelte'
let courses = []

onMount( async () => {
    let reponse = await fetch(`${url}/allcourse`);
    let courseData = await reponse.json();
    courses = courseData.detail
})

// console.log(courses)
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


let screenWidth;






</script>
<svelte:window bind:innerWidth={screenWidth}/>

<section id="course__cat" class='bg-dkPur  pb-10 '>

 
       <div class="md:px-8 py-6 text-center md:text-left md:mx-8">
            <h1 class='font-bold text-white text-xl md:text-4xl py-3'>Choose a course that you like</h1>
       </div>

       <!-- category -->
       <!-- <div class="hidden md:block mx-8 my-8">
           {#each categories as cat}
              <a href="/#" class=" text-sm border mx- py-3 text-white px-10 rounded-lg hover:bg-white hover:text-dkPur">
                 {cat.name}
              </a>
           {/each}
       </div> -->
      
     
  <!-- course card -->
  {#if screenWidth > 1042} 
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={150}
  slidesPerView={4}
  navigation
  pagination={true}

>

  {#each courses as course}
  <SwiperSlide class='mx-8'>
    <CourseCard {course}/>
  </SwiperSlide>
  {:else}
  <Loading/>
  {/each}
  

 
</Swiper>
  {:else}
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={150}
  slidesPerView={3}
  navigation
  pagination={true}

>

{#each courses as course}
  <SwiperSlide class='mx-5'>
    <CourseCard {course}/>
  </SwiperSlide>
  {:else}
  <Loading/>
  {/each}
  

 
</Swiper>
  {/if}
 
</section>