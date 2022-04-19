<script>
         import Icon from 'svelte-icons-pack/Icon.svelte';
     import AiOutlineSearch from "svelte-icons-pack/ai/AiOutlineSearch";
</script>


            <div class="relative text-gray-600 focus-within:text-gray-400 mt-3">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                    <Icon src={AiOutlineSearch} color='gray' size='20'/>
                  </button>
                </span>
                <input type="search" class="py-2 px-12 text-sm text-white bg-gray-100 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Browse courses..." autocomplete="on">
              </div>
             
          
      