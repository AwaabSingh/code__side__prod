
<script>
    import HeroSection from "../lib/HeroSection.svelte";
    import CourseCat from '../lib/courseCat.svelte'
    import SystemHero from '../lib/SystemHero.svelte'
    import TopCategories from "$lib/Category/TopCategories.svelte";
    import InstructorHero from '../lib/InstructorHero.svelte'
    import Loading from '../lib/Loading.svelte'
    // export let categories;

    let loading;

    

</script>

<HeroSection/>
  <CourseCat/>
<SystemHero/>
<TopCategories/>
<InstructorHero/>



 