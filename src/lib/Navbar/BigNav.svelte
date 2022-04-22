<script>
  import Icon from 'svelte-icons-pack/Icon.svelte';
import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch";
//  import SearchIcon from '../SearchIcon.svelte'
import globalStore from '../../store/globalStore'
import CartBtn from '../Cart/CartBtn.svelte'
import LoginLink from '../LoginLink.svelte'

</script>

<header class='border-b-2 border-lgPur'>
<nav class="relative container mx-auto px-6 py-1">
<!-- Flex container -->
<div class="flex items-center justify-between">
<!-- Logo -->
<div class="pt-2 flex space-x-20">
<a href='/' class="">
    <img src="/images/cs_logo.svg" alt="code side acdemy" class='w md:w-40'>
</a>
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
</div>

<!-- Button -->
<div class="flex space-x-12 justify-center items-center ml-5">
<LoginLink/>
<div class="px-10">
<CartBtn/> 
</div>

</nav>
</header>