<script>

import Icon from 'svelte-icons-pack/Icon.svelte';
   import BsCameraVideo from "svelte-icons-pack/bs/BsCameraVideo";
   import RiDocumentNewspaperLine from "svelte-icons-pack/ri/RiDocumentNewspaperLine";
   import RiSystemArrowDropDownLine from "svelte-icons-pack/ri/RiSystemArrowDropDownLine";

   let displaySection = false;

   function toggleSession () {
      displaySection = !displaySection;
   }

</script>

<div class=" flex flex-col mt-5 md:m-5 ">
      <div class=" flex hover:shadow-lg px-4 md:px-10 py-5 rounded-md bg-white shadow-md mb-3 hover:border-gray-500 cursor-pointer">
        <div>
             <h1 class="font-semibold "> Section 1: Introduction</h1>
             <div class="flex pt-2 md:space-x-4 space-x-1">
                    <!-- vid -->
                      <div class="flex items-center space-x-2">
                          <!-- icon -->
                          <div class="">
                            <Icon src={BsCameraVideo} color='#4F4F86' size='20'/>
                          </div>
                          <h6 class='text-sm'>4 Lessons & task</h6>
                         
                      </div>
                    <!-- mat -->
                    <div class="flex items-center space-x-2">
                        <!-- icon -->
                        <div class="">
                          <Icon src={RiDocumentNewspaperLine} color='#4F4F86' size='20'/>
                        </div>
                        <h6 class='text-sm '>4 Lessons & task</h6>
                    </div>
             </div>
        </div>
        <div class="right m-auto mr-0">
          <div class="icon" on:click="{toggleSession}">
            <Icon src={RiSystemArrowDropDownLine} color='#4F4F86' size='30'/>
          </div>
        </div>
      </div>

  
      {#if displaySection}
      <div class="text-center ">
        <h1>Maryam Atole</h1>
      </div>
      {/if}
  </div>

