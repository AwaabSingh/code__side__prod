<script>
     import Loading from '$lib/Loading.svelte';
import { claim_svg_element } from 'svelte/internal';
import { getCourses } from '../../Requests/courses'
import comma from '../../store/numcomma'
import AllCourse from '$lib/Course/AllCourse.svelte';
</script>

<div class=" mx-auto px-4 md:px-12">
      <h1 class='text-dkPur pt-28 font-bold text-4xl pb-10'>All Courses Available</h1>
    

        {#await getCourses()}
            <Loading/>
        {:then courses}
           <AllCourse {courses}/>
        {/await}
        <!-- Column -->
        
        <!-- END Column -->


   
</div>