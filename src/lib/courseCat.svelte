
<script>

  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  import { getCourses } from '../Requests/courses'
import { Swiper, SwiperSlide } from 'swiper/svelte';
import CourseCard from '../lib/Course/CourseCard.svelte'
import Loading from '../lib/Loading.svelte'


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
  {#if screenWidth > 922} 
  <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={150}
  slidesPerView={4}
  navigation
  pagination={true}

>

  {#await getCourses()}
  <Loading/>
  {:then courses}
  {#each courses as course}
  <SwiperSlide class='mx-8'>
    <CourseCard {course}/>
  </SwiperSlide>
  {/each}
  {/await}
  

 
</Swiper>
  {:else}
  <Swiper
  modules={[Navigation, Pagination , Scrollbar, A11y]}
  spaceBetween={150}
  slidesPerView={3}
  navigation
  pagination={true}

>

{#await getCourses()}
<Loading/>
{:then courses}
{#each courses as course}
<SwiperSlide class='mx-8'>
  <CourseCard {course}/>
</SwiperSlide>
{/each}
{/await}
  

 
</Swiper>
  {/if}

  <!-- <Swiper
  modules={[Navigation, Pagination, Scrollbar, A11y]}
  spaceBetween={150}
  slidesPerView={2}
  navigation
  pagination={true}

>

  {#each courses as course}
  <SwiperSlide class='mx-8'>
    <CourseCard {course}/>
  </SwiperSlide>
  {:else}
  <Loading/>
  {/each} -->
  

 
<!-- </Swiper> -->
 
</section>