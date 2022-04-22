 <script>
      import Sidebar from '../../lib/Dashboard/SideBar.svelte'; 
      import Mycourse from '../../lib/Dashboard/Mycourse.svelte'
 </script>

<div class="flex flex-wrap bg-gray-100 w-full h-screen ">
<Sidebar/>
<div class="w-9/12">
     <div class="p-4 text-gray-500">
         <Mycourse/>
     </div>
 </div>
</div>