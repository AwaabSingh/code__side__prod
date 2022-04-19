<script>
import { goto } from '$app/navigation';

    import { registerUser } from '../Requests/users'
    // import userStore from '../store/userStore'
    import globalStore from '../store/globalStore'

    // console.log($userStore.detail.access_token)

    let fullname;
    let email;
    let password;

    $: isEmpty = !fullname || !email || !password
    
    const handleSubmit = async () => {
        globalStore.toggleItem('alert', true, 'loading data ... please wait!')
        let user;
        user = await registerUser({fullname, email, password})
        let statusCode = user.data.status_code
       
         if(statusCode === 208) {
            globalStore.toggleItem('alert', true, "email address already in use", true)
         } else {
             globalStore.toggleItem('alert', true, 'Welcome to code side')
             goto('/login')
         }
    }

</script>

<section id="register">
    <div class="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
        <div class=" text-gray-500  w-full overflow-hidden" style="max-width:1000px">
            <div class="md:flex w-full">
                <div class="hidden md:block w-1/2  py-20 px-10">
                   <img src="/images/signup_Artboard 1.svg" alt="">
                </div>
                <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div class="text-center mb-10">
                        <h1 class="font-bold text-3xl text-dkPur md:text-left">Register to start</h1>
                        
                    </div>
                    <div class="flex -mx-3">
                           
                        <div class="w-full px-3 mb-5">
                            {#if isEmpty} 
                        <p class="text-center text-red-600 font-bold">Please Fill Out All Form Fields</p>
                    {/if}
                        </div>
                    </div>

                       <form  on:submit|preventDefault={handleSubmit}>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Full Name</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <input type="text" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 border-lgPur outline-none  text-dkPur" placeholder="John Smith" bind:value={fullname}>
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <label for="" class="text-xs font-semibold px-1">Email</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                    <input bind:value={email} type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 border-lgPur outline-none  text-dkPur" placeholder="johnsmith@example.com">
                                </div>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-12">
                                <label for="" class="text-xs font-semibold px-1">Password</label>
                                <div class="flex">
                                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                                    </div>
                                    <input bind:value={password} type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-b-2 border-lgPur outline-none  text-dkPur" placeholder="************">
                                </div>
                            </div>
                        </div>
                      
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                                <button class="block w-full max-w-xs mx-auto bg-lgPur   text-white rounded-lg px-3 py-3 font-semibold" disabled={isEmpty} class:disabled={isEmpty}>REGISTER NOW</button>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                              <p class='text-center pt-5 text-black'> By signing up, you agree to our <span class='text-lgPur'>Terms of Use</span></p>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                              <p class='text-center  text-black'>Have an Account ?  <a href='/login' class='text-lgPur font-bold'>  Login</a></p>
                            </div>
                        </div>

                       
                       </form>
                 
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .disabled {
  color: rgb(122, 121, 121);
  background:#afafaf;
  border-color: #afafaf;
}
.disabled:hover {
  background: transparent;
  color: #afafaf;
  border-color: #afafaf;
}
</style>