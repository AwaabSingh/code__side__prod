 <script>
      import Sidebar from '../../lib/Dashboard/SideBar.svelte'; 
      import Mycourse from '../../lib/Dashboard/Mycourse.svelte'
 </script>

<div class="flex  bg-gray-100 w-full h-full ">
<Sidebar/>
<div class="md:w-9/12 h-auto">
     <div class="p-4 text-gray-500">
         <Mycourse/>
     </div>
 </div>
</div>