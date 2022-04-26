<script>
    import CartBtn from '../Cart/CartBtn.svelte'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineBars from "svelte-icons-pack/ai/AiOutlineBars";
    import globalStore from '../../store/globalStore';
    import AiOutlineMenu from "svelte-icons-pack/ai/AiOutlineMenu";
    import {Toggle} from "$lib/utilities/actions"

    // let openSidebar = globalStore.toggleItem
</script>

<header class='border-b border-lgPur show-mobile'>
  <nav class='relative container mx-auto px-6 py-3'>
    <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="pt-2 flex space-x-12">
          <a href='/' class="">
              <img src="/images/cs_logo.svg" alt="code side acdemy" class='w-28'>
          </a>
          
        </div>
      
        <div class="flex space-x-5 items-center">
          <CartBtn/>
          <button class="mx-auto" on:click="{() => Toggle('mobile-menu','active')}">
              <Icon src={ AiOutlineMenu} color="#4F4F86" size="25"/>
          </button>
        </div>
        </div>
      
        
  </nav>
</header>

