
<script>
    import { page, session } from '$app/stores'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BiLeftArrowAlt from "svelte-icons-pack/bi/BiLeftArrowAlt";
    import AiOutlineStar from "svelte-icons-pack/ai/AiOutlineStar";
    import CourseLevel from '$lib/Course/CourseLevel.svelte'
    import BiCheck from "svelte-icons-pack/bi/BiCheck";
    import CourseSessions from '$lib/Course/CourseSessions.svelte'
    import BiSolidFilePdf from "svelte-icons-pack/bi/BiSolidFilePdf";
    import AiOutlineCloudDownload from "svelte-icons-pack/ai/AiOutlineCloudDownload";
    import { getCourse } from '../../Requests/courses'
    import AboutInstructor from '$lib/Course/AboutInstructor.svelte'
    import Faq from '$lib/Course/Faq.svelte'
    import globalStore from '../../store/globalStore'
    import url from '../../store/url'
    import axios from 'axios'
import { goto } from '$app/navigation';
import Loading from '$lib/Loading.svelte';

    const userToken = $session.current_user.access_token;
     let pk = $page.params.publickKey
    let courseData = {}
    let cartData = {}
    let wishData = {}

    async function courses () {
        courseData = await getCourse(pk)
    }
  
    courses();


    // Add to cart func
    async function addToCart() {
      try {
        const config = {
            headers:  {
            'user-token': ` ${userToken}`,
             'content-type': 'application/json'
      }}
        
                              cartData.courseKey = pk;
         const response = await axios.post(`${url}/addcart`, cartData, config)
        
        
      } catch (error) {
        console.log(error)
        
      }
        
     }
    
     addToCart()
    //  add wish func
    const addWishlist = async () => {
       if(!userToken) {
          goto('/login')
       }else {
         try {
          const config = {
            headers:  {
              'content-type': 'application/json',
            'user-token': ` ${userToken}`,
            'Content-Type' : 'application/x-www-form-urlencoded'     
      }}
        
                              wishData.courseKey = pk;
         const response = await axios.post(`${url}/addwishlist`, wishData, config)
         goto('/dashboard/wishlist')
         } catch (error) {
           console.log(error)
         }
       }
    }
    const start = [0,1,2,3,]
    const secs = [0,1,2]

  
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
                {:else}
                 <Loading/>
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
               <div class="flex space-x-4 md:space-x-20">
                   <!-- butten -->
                   <button href="" class="px-5 py-3 text-white bg-dkPur rounded-xl" on:click="{() => {
                     addToCart()
                     globalStore.toggleItem('cart', true)}}">Add to cart</button>
                   <button class="px-5 py-3 text-white bg-dkPur rounded-xl" on:click={addWishlist}>
                    Add to wishlist
                   </button>
               </div>
      
        </div>
        <!-- Image -->
        <div class="md:w-1/2 md:pr-20 px-5">
          <img src="/images/hero.jpg" alt="" class='rounded-xl shadow-lg' />
        </div>
      </div>
      <!-- description -->
      <div class=" py-6  mx-4 px-4 items-center space-x-0 md:pl-24 space-y-0 md:space-y-0 md:px-8">
           <h4 class="text-gray-300 pb-5 font-bold">Description</h4>
           <p class="md:px-10 pl-4 text-gray-500 md:text-left  text-ellipsis overflow-hidden ">
               {courseData.description}
           </p>
      </div>

      <!--  -->
      <div class="flex flex-col  py-6 items-center  space-x-0 md:pl-2 space-y-0 md:space-y-0  md:flex md:flex-row">
           <nav class="rounded-xl bg-white px-16 md:px-auto  py-4 space-y-6  list-none md:space-x-4  md:mx-auto md:space-y-0 md:flex md:flex-row md:items-center">
               <li class='flex  md:pr-28'>
                  <span class='text-gray-400 '>Duration:</span>
                  <h3 class='ml-6 font-bold md:ml-4'>12 Months</h3>
               </li>
               <li class='flex md:selection:pr-20'>
                <span class='text-gray-400 md:ml-4'>Course Starts:</span>
                <h3 class='ml-6 font-bold md:ml-4'>16 May</h3>
             </li>
             <li class='flex md:pl-20'>
              <span class='text-gray-400 md:ml-4'>Language:</span>
              <h3 class='ml-6 font-bold md:ml-4'>English</h3>
           </li>
           </nav>
      </div>

      <!-- Why choose this course -->
      <CourseLevel/>

      <!-- what u will learn -->
      <div class="max-w-6xl px-5 md:mx-auto mt-20 text-center mx-3">
    
      <h2 class="text-xl md:text-4xl font-bold text-center md:text-left">
          What will you learn?
      </h2>
        <div class=" mt-20 h-56 grid md:grid-cols-3 gap-4 content-start md:gap-8 md:mx-5">
          <div class='flex '>
             <div class="pb-4">
              <Icon src={BiCheck} color='#4F4F86' size='25'/>
             </div>
               <p class="pl-4">
                Basics of Web-design and UX
               </p>
          </div>
          <div class='flex '>
            <div class="pb-4">
             <Icon src={BiCheck} color='#4F4F86' size='25'/>
            </div>
              <p class="pl-4">
               Basics of Web-design and UX
              </p>
         </div>
         <div class='flex '>
          <div class="pb-4">
           <Icon src={BiCheck} color='#4F4F86' size='25'/>
          </div>
            <p class="pl-4">
             Basics of Web-design and UX
            </p>
       </div>
       <div class='flex '>
        <div class="pb-4">
         <Icon src={BiCheck} color='#4F4F86' size='25'/>
        </div>
          <p class="pl-4">
           Basics of Web-design and UX
          </p>
     </div>
     <div class='flex '>
      <div class="pb-4">
       <Icon src={BiCheck} color='#4F4F86' size='25'/>
      </div>
        <p class="pl-4">
         Basics of Web-design and UX
        </p>
   </div>
        </div>
      </div>

       <!-- Trainning process -->
       <div class="max-w-6xl px-5 md:mx-auto mt-20 text-center mx-3">
    
        <h2 class="text-xl md:text-4xl font-bold text-center md:text-left">
            Training process
        </h2>
          <div class=" mt-20 pb-10 h-56 grid md:grid-cols-3 gap-4 content-start md:gap-8 md:mx-5 ">
            <div class='flex space-x-1  '>
               <div class="pb-4 font-bold text-dkPur">
                    1
               </div>
                 <p class="">
                   Learn new topics and apply knowledge in practical taskes
                 </p>
            </div>
            <div class='flex space-x-1  '>
              <div class="pb-4 font-bold text-dkPur">
               2
              </div>
                <p class="">
                  Learn new topics and apply knowledge in practical taskes
                </p>
           </div>
           <div class='flex space-x-1  '>
            <div class="pb-4 font-bold text-dkPur">
            3
            </div>
              <p class="">
                Learn new topics and apply knowledge in practical taskes
              </p>
         </div>
         <div class='flex space-x-1  '>
          <div class="pb-4 font-bold text-dkPur">
           4
          </div>
            <p class="">
              Learn new topics and apply knowledge in practical taskes
            </p>
       </div>
       <div class='flex space-x-1  '>
        <div class="pb-4 font-bold text-dkPur">
         5
        </div>
          <p class="">
            Learn new topics and apply knowledge in practical taskes
          </p>
     </div>
          </div>
        </div>

        <!-- courses sessions -->
        <div class="max-w-6xl px-5 md:mx-auto pt-20 text-center  ">
         <!-- header -->
          <div class="bg-dkPur rounded-xl py-3 mt-20 md:mt-0 md:text-left md:pl-14">
              <h3 class='font-bold text-white'>Course Program</h3>
          </div>
          <div class="max-w-6xl md:px- md:mx-auto text-center">
            {#each secs as sec}
            <CourseSessions/>
            {/each}
          </div>
        </div>

          <div class="max-w-6xl px-5 md:mx-auto mt-20 text-center mx-3">
            <h2 class="text-xl md:text-4xl font-bold text-center md:text-left">
              Alumni portfolio
          </h2>
          <div class=" mt-20 pb-10 h-56 grid md:grid-cols-3 gap-4 content-start md:gap-8 md:mx-8 ml-0">
                 {#each start as uhm}
              <div class='bg-dkPur flex py-3 px-4 rounded-xl  space-x-4 mx-8 items-center'>
                    <span class="">
                      <Icon src={BiSolidFilePdf} size='20' color='#fff'/>
                    </span>
                     <h6 class='text-white'>design catalog.pdf</h6>
                      <span>
                        <Icon src={AiOutlineCloudDownload} size='20' color='#fff' />
                      </span>
              </div>
               {/each}
            </div>
          </div>
         <!-- Instructor -->
         <div class="max-w-6xl px-5 md:mx-auto mt-20 text-center mx-3">
             <AboutInstructor/>
         </div>
        <!-- puchace -->
         <div class=" pt-5  mt-20 text-center  bg-dkPur ">
          <div
          class="flex flex-col-reverse items-center mx-20 m mt-10 space-y-0 md:space-y-0 md:flex-row"
        >
          <!-- Left item -->
          <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1
              class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white"
            >
             Course Price
            </h1>
            <h1
            class="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left text-white"
          >
          &#8358;{courseData.price}
          </h1>
            <div class="flex justify-center md:justify-start pt-5">
              <a
                href="/#"
                class="p-3 px-6 pt-2 bg-white text-dkPur font-bold rounded-full baseline hover:bg-brightRedLight"
                >Purchace the course</a
              >
            </div>
          </div>
          <!-- Image -->
          <div class="md:w-1/2">
            <img src="img/illustration-intro.svg" alt="" />
          </div>
        </div>
      </div>
      <!--  -->
      <div class="max-w-6xl px-5 md:mx-auto mt-20 text-center mx-3">
        <Faq/>
    </div>
    
     
     
</section>


<style>
    :global(.custom-icon) {
        background: '#F1A51F';
        color: '#f5f5f5'
    }
</style>