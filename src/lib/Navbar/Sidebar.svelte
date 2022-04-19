<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import RiSystemCloseFill from "svelte-icons-pack/ri/RiSystemCloseFill";
    import { fly, fade } from 'svelte/transition'
    import globalStore from '../../store/globalStore'
    import SearchIcon from '../SearchIcon.svelte'
    
  

    let closeSidebar = globalStore.toggleItem;
</script>
    <div class="sidebar-container" transition:fly={{ x: -1000}}>
        <div class="sidebar" transition:fade={{delay: 400 }}>
            <!-- Header -->
               <div class="sidebar-header">
                   <button class='btn-close ' on:click="{() => {
                     closeSidebar('sidebar', false)
                   }}">
                       <Icon src={RiSystemCloseFill} color='red' size='30' />
                  </button>
               </div>
           <!-- logo -->
           <a href="/" class='nav-logo'   on:click="{() => globalStore.toggleItem('sidebar', false)}">
            <img src="/images/cs_logo.svg" alt="code side acdemy" class='w-40 '>
           </a>
           <SearchIcon/>
       <ul class='mt-10 flex flex-col space-y-10'>
          <li class=""   on:click="{() => globalStore.toggleItem('sidebar', false)}">
            <a
        href="/login"
        class=" p-2 px-32 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
        >
        Login
    </a>
          </li>
          <!-- <li class=""   on:click="{() => globalStore.toggleItem('sidebar', false)}">
            <a
        href="/register"
        class=" p-2 px-28 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
        >
        register
    </a>
          </li> -->
       </ul>
            
        </div>  
   
    </div>


    <style>
        .sidebar-container {
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
}

.sidebar {
  width: 85vw;
  margin: 0 auto;
}
.sidebar-header {
  height: 5rem;
  display: flex;
  align-items: center;
}
/* .sidebar-logo {
  margin-top: 1.5rem;
} */

/* .sidebar-links {
  margin-top: 2.5rem;
}
.sidebar-links a {
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: var(--mainSpacing);
  display: block;
  margin: 0.5rem 0;
  transition: var(--mainTransition);
}
.sidebar-links a:hover {
  color: var(--primaryColor);
  padding-left: 0.5rem;
} */
    </style>