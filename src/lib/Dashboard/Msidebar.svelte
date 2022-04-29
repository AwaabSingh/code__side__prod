<script>
    export let user
</script>

<nav class="w-80 flex-shrink-0 hidden md:block ">
      
    <div class="flex-auto bg-white p-3 h-full rounded shadow-lg">
      <div class="flex flex-col overflow-y-auto">
       
        <ul class="relative m-0 p-0 list-none h-full">
            <div class="space-y-3 pb-8">
                <div class=" w-20 h-20  mx-auto py-5 ">
                    <img src="https://randomuser.me/api/portraits/women/81.jpg" alt="" class="rounded-full border border-gray-100 shadow-sm">
                </div>
                <div class="py-5 text-center space-y-3 text-dkPur">
                    <h6 class='font-bold'>{user.fullname}</h6>
                     <p>{user.email}</p>
                </div>
          </div>
          <li>
            <a href="/dashboard" class="flex items-center space-x-3 text-gray-700 p-2 rounded font-medium hover:bg-slate-300 hover:border-l-4 hover:border-lgPur focus:shadow-outline py-6">
                <span class="text-gray-600">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>
                <span>My Learning</span>
            </a>
        </li>

        <li>
            <a href="#/" class="flex items-center space-x-3 text-gray-700 p-2 rounded font-medium hover:bg-slate-300 hover:border-l-4 hover:border-lgPur focus:shadow-outline py-6">
                <span class="text-gray-600">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                </span>
                <span>Courses Catalog</span>
            </a>
        </li>
        <li>
            <a href="/dashboard/profile" class="flex items-center space-x-3 text-gray-700 p-2 rounded font-medium hover:bg-slate-300 hover:border-l-4 hover:border-lgPur focus:shadow-outline py-6">
                <span class="text-gray-600">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span>My profile</span>
            </a>
        </li>
  
        <li>
            <a href="/dashboard/whislist" class="flex items-center space-x-3 text-gray-700 p-2 rounded font-medium hover:bg-slate-300 hover:border-l-4 hover:border-lgPur focus:shadow-outline py-6">
                <span class=" text-gray-600">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </span>
                <span>Wishlist</span>
            </a>
        </li>
        </ul>
      </div>
    </div>
  </nav>