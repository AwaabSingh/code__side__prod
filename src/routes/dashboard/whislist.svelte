<script>
    import WishlistCart from '$lib/Dashboard/WishlistCard.svelte';
    import axios from 'axios';
    import url from '../../store/url'
    import {  session } from '$app/stores'
    import Loading from '$lib/Loading.svelte'

    const userToken = $session.current_user.access_token;
    let wishData = [];
    

    async function getWishlist () {
        try {
            const config = {
                headers: {
                    'content-type': 'application/json',
                    'user-token': ` ${userToken}`
                }
            }

            const response = await axios.get(`${url}/getwish`, config)
            wishData = response.data.detail
        } catch (error) {
            console.log(error)
        }
    }
    
    getWishlist()

    
</script>


<div class="max-w-6xl  mx-auto mt-10">
    <!-- Heading -->
    <h2 class="text-xl md:text-4xl font-bold text-center mt-20 text-dkPur">
        My WishList
    </h2>
    <div class="mt-10 mx-4 gap-6 grid grid-cols-1 md:grid-cols-3">
        {#each wishData as wishItem}
            <WishlistCart {wishItem}/>
        {:else}
        <h2 class='text-center mx-auto '>is currently empty ... </h2>
        {/each}
   
        
    </div>
      
  </div>