
<script>
    import HeroSection from "../lib/HeroSection.svelte";
    import CourseCat from '../lib/courseCat.svelte'
    import SystemHero from '../lib/SystemHero.svelte'
    import TopCategories from "$lib/Category/TopCategories.svelte";
    import InstructorHero from '../lib/InstructorHero.svelte'

    import {getCart  } from '../Requests/cart'
    let cartData = {}

    async function carts () {
      cartData = await getCart
    }
    // console.log( cartData )
  
</script>

<HeroSection/>
  <CourseCat/>
<SystemHero/>
<TopCategories/>
<InstructorHero/>



 