<script>
    import CartItemList from './CartItemList.svelte'
    import axios from 'axios'
    import url from '../../store/url'
    import {  session } from '$app/stores'
    import { fly } from 'svelte/transition'
    import { flip } from 'svelte/animate'
    import comma from '../../store/numcomma'
    

    const userToken = $session.current_user.access_token;
     let cartData = [];

    async function getCartItems() {
      try {
        const config = {
            headers:  {
            'user-token': ` ${userToken}`,
             'content-type': 'application/json'
      }}
        
                    
         const response = await axios.get(`${url}/getcart`, config)
         cartData = response.data.detail

        // console.log(cartData.);
      } catch (error) {
        console.log(error)
        
      }
        
     }

     getCartItems()
    //  console.log(cartData)


     $: total =  cartData.reduce((acc, curr) => {
        return (acc +=  curr.price)
    }, 0)

    //  total.toFixed(2)
</script>

<section class="cart-items">
    <article>
{#each cartData as cartItem, index (index)}
<div in:fly={{ delay: (index + 1) * 500, x:100}} out:fly={{ x: -100}} animate:flip>
<CartItemList {cartItem} />
</div>
{:else}
<h2 class=' empty-cart'>is currently empty ... </h2>

{/each}
</article>

<h3 class='cart-total'>Total: &#8358;{comma(total)} </h3>

</section>

<style>
       .empty-cart {
  text-align: center;
}
.cart-items {
  display: grid;
  grid-template-rows: 1fr auto;
}
.cart-total {
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.3rem;
  font-size: 2rem;
  margin-top: 3rem;
}
</style>