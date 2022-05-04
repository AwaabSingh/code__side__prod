<script>
    import { loginUser} from '../Requests/users'
    import { goto } from '$app/navigation'
    import globalStore from '../store/globalStore'

    let email;
    let password;

    $: isEmpty =  !email || !password 

    
    const handleSubmit = async () => {
        
        try {
            globalStore.toggleItem('alert', true, 'loading data ... please wait!')
            let user;
            user = await loginUser({ email, password})


            if(user.status == 200){
                console.log('200');
                globalStore.toggleItem('alert', true, 'success')

                goto('/')
            } 
            // console.log(user)
        } catch (error) {
            console.log(error);
            
        }
       
   
         
        
    }

</script>

<section id="register">
    <div class="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
        <div class=" text-gray-500  w-full overflow-hidden" style="max-width:1000px">
            <div class="md:flex w-full">
                <div class="hidden md:block w-1/2  py-20 px-10">
                    <img src="/images/login_Artboard 1.svg" alt="">
                </div>
                <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                    <div class="text-center mb-10">
                        <h1 class="font-bold text-3xl text-dkPur md:text-left">Welcome Back</h1>
                        
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
                                <button class="block w-full max-w-xs mx-auto bg-lgPur   text-white rounded-lg px-3 py-3 font-semibold" disabled={isEmpty} class:disabled={isEmpty}>LOGIN</button>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                              <p class='text-center pt-5 text-black'> Forgot Password ?</p>
                            </div>
                        </div>
                        <div class="flex -mx-3">
                            <div class="w-full px-3 mb-5">
                              <p class='text-center  text-black'>Don't Have an Account ?  <a href='/register' class='text-lgPur font-bold'>  Register </a></p>
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