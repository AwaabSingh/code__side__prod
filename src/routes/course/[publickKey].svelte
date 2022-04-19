<script>
    import { onMount } from 'svelte'
    import { page } from '$app/stores'
    import axios from 'axios'
    import url from '../../store/url'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BiLeftArrowAlt from "svelte-icons-pack/bi/BiLeftArrowAlt";
    import AiOutlineStar from "svelte-icons-pack/ai/AiOutlineStar";
    import AiOutlineHeart from "svelte-icons-pack/ai/AiOutlineHeart";
    

    export let pk = $page.params.publickKey
    let courseData = {}
 
    onMount(async () => {
        const response = await axios.get(`${url}/getcousebyid/${pk}`)
        courseData = response.data.detail
        // console.log(courseData)
    })
    
    const start = [0,1,2,3,]
  
</script>
 
<section id="course__list" class='bg-[#F5F8FB]'>
    <div class="flex space-x-3 py-5 px-2 border-b border-gray-400 item-center">
        <a href='/' class="text-center ml-3">
            <Icon src={BiLeftArrowAlt} size='20' color='#4F4F86'/>
        </a>
        <h3 class='text-gray-500  font-bold'>Course Catalog</h3>
    </div>
    <!-- header flex cntainer -->
    

        <!--  -->
        <div
        class=" flex flex-col-reverse py-6 items-center space-x-0 md:pl-24 space-y-0 md:space-y-0 md:flex-row  "
      >
        <!-- Left item -->
        <div class="flex flex-col py-10  space-y-8 md:w-1/2 mt-8 justify-between ">
          <h1
            class="max-w-md text-dkPur text-4xl font-bold text-center md:text-5xl md:text-left"
          >
           {courseData.title}
          </h1>
          <!-- <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
           
          </p> -->
          <!-- Rating & student  -->
          <div class="rating flex justify-between">
          <div class="flex">
            <h3 class='text-csYellow text-xl'>4.0</h3>
           
            <div class="mx-5 flex space-x-2 mt-1">
                {#each start as stt}
                <Icon src={AiOutlineStar} size='20' color ='#F1A51F'/>
                {/each}
            </div>
            <div class="text-dkPur pl-12">
                <h3>Student: 150</h3>
            </div>
          </div>
            </div>
            <!-- instructor-->
            <div class="flex">
                 <h3 class='text-dkPur'>Instructor:</h3>
                 <h5 class='text-dkPur font-bold pl-4'>Legend</h5>
            </div>
            <div class="">
                <h1 class='text-dkPur font-bold text-3xl'>&#8358;{courseData.price}</h1>
            </div>
            <!-- card & which -->
               <div class="flex space-x-40">
                   <!-- butten -->
                   <button href="" class="px-5 py-3 text-white bg-dkPur rounded-xl">Add to cart</button>
                   <div class="mt-2 mr-10 md:pr-40">
                       <Icon src={AiOutlineHeart} color='red' size='35'/>
                   </div>
               </div>
          <!-- <div class="flex justify-center md:justify-start">
            <a
              href="#"
              class="p-3 px-6 pt-2 text-dkPur bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >Get Started</a
            >
          </div> -->
        </div>
        <!-- Image -->
        <div class="md:w-1/2 md:pr-20 px-5">
          <img src="/images/hero.jpg" alt="" class='rounded-xl shadow-lg' />
        </div>
      </div>
      <!-- description -->
      <div class=" py-6 items-center space-x-0 md:pl-24 space-y-0 md:space-y-0 px-8">
           <h4 class="text-gray-300 pb-5 font-bold">Description</h4>
           <p class="md:px-10  text-gray-500 md:text-left px-5 text-ellipsis overflow-hidden ">
               {courseData.description}
           </p>
      </div>
     
     
</section>


<style>
    :global(.custom-icon) {
        background: '#F1A51F';
        color: '#f5f5f5'
    }
</style>