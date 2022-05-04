<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch";
//  import SearchIcon from '../SearchIcon.svelte'
import globalStore from '../../store/globalStore'
import CartBtn from '../Cart/CartBtn.svelte'
import LoginLink from '../LoginLink.svelte'

  // export let user;
</script>

<!-- <header class='border-b-2 border-lgPur hide-mobile'>
<nav class="relative container mx-auto px-6 py-1"> -->
<!-- Flex container -->
<!-- <div class="flex items-center justify-between sticky"> -->
<!-- Logo -->
<!-- <div class="pt-2 flex space-x-20">
<a href='/' class=""> -->
    <!-- <img src="/images/cs_logo.svg" alt="code side acdemy" class='w md:w-40'> -->
<!-- </a>
<div class="courses">
   <a href="/#">Courses</a>
</div>
<div class="">
    <div class="relative text-gray-600 focus-within:text-gray-400 mt-3">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
            <Icon src={AiOutlineSearch} color='gray' size='20'/>
          </button>
        </span>
        <input type="search" class=" mb- py-2 px-12 text-sm text-white bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Browse courses..." autocomplete="on">
      </div>
     
  </div>
</div> -->
<!-- text-s -->

<!-- Button -->
<!-- <div class="flex space-x-12 justify-center items-center ml-5"> -->
 <!-- <LoginLink/> -->
 <!-- <a href="/login" class="hidden p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Login</a>
<div class="px-10">
<CartBtn/> 
</div>

</nav>
</header> -->

<!-- This is an example component -->
<header class='border-b-2 border-lgPur hide-mobile '>
  <div class=" flex flex-row items-center p-1 justify-between bg-white shadow-xs ">
    <div class="ml-10 pr-3  hidden md:flex">
      <a href='/' class=""> 
    <img src="/images/cs_logo.svg" alt="code side acdemy" class='w md:w-40'> 
   </a>
    </div>
     <div class="font-bold text-lg text-dkPur hidden md:flex  pr-3 ">Courses</div>
    <span class="w-screen md:w-1/3 h-10 bg-lgPur cursor-pointer border border-gray-300 text-sm rounded-full flex ">
      <input type="search" name="serch" placeholder="Search For Courses ..."
        class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none">
      <i class="bx bx-search-alt m-1 mr-5 text-lg text-white w-4 h-4">
      </i>
    </span>
  <div class="ml- text-lg text-dkPur hidden md:flex font-bold  pr-3 pl-3">
     <a href="https://medium.com/@codesideacademy" target="_blank">
        Blog
    </a>
  </div>
      <!-- <div class="flex flex-row-reverse mr-8 md:flex">
        <div class=" text-center  px-4 py-2 m-2">
          <CartBtn/>
        </div>
        <div class="">
           <a href="/login" class="mt-2 p-2 px-16 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur">Login</a>
        </div>
      </div> -->
      <div class="flex flex-row-reverse mr-8  md:flex">
        <div class=" text-center  px- py-2 m-2">
          <CartBtn/>
        </div>
        <div class="text-dkPur rounded-2xl border border-lgPur  text-center  px-4 py-2 m-2 hover:bg-dkPur hover:text-white">
          <a href="/login" class='text-center'>Login</a>
        </div>
        <div class="text-dkPur rounded-2xl border border-lgPur  text-center  px-4 py-2 m-2 hover:bg-dkPur hover:text-white">
          <a href="/login" class=''>Register</a>
        </div>
      </div>
  </div>
  </header>