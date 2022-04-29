<script>


    import {  session } from '$app/stores'
    import axios from 'axios'
    import url from '../../store/url'
    export let cartItem

    //   vars
    const userToken = $session.current_user.access_token;
    // const pk = cartItem.publickKey

      async function removeItem (courseKey){
        try {
        const config = {
            headers:  {
             'content-type': 'application/json',
             'user-token': ` ${userToken}`
      }}
        
                    
        await axios.delete(`${url}/deleteitem?courseKey=${courseKey}`, config)
        location.reload()
        
      } catch (error) {
        console.log(error)
        
      }
      }

      // removeItem()     
</script>

<div class="cart-item px-3 py-5 shadow-lg rounded-xl">
    <img src='/images/hero.jpg' alt={cartItem.title}/>
    <div class="flex justify-between">
       <div class="">
        <h4 class='font-semibold text-dkPur'>{cartItem.title}</h4>
        <h5 class='font-semibold text-dkPur'> &#8358;{cartItem.price}</h5>
       </div>
         <button class='cart-btn remove-btn' on:click={() => removeItem(cartItem.publickKey)}>
            <i class='bx bxs-trash-alt text-red-600 text-2xl'></i> 
        </button>
    </div>
     <div>
     
     </div>
</div>
<style>
 
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
}
.cart-item img {
  width: 5rem;
  border-radius: 30px;
}
.cart-item h4 {
  font-size: 0.85rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  margin-bottom: 0;
}
.cart-item h5 {
  margin: 0.5rem 0;
  letter-spacing: 0.1rem;
} 
.remove-btn {
  color: var(--darkGrey);
  letter-spacing: var(--mainSpacing);
  cursor: pointer;
  font-size: 0.8rem;
}
/* .item-amount {
  text-align: center;
  margin-bottom: 0;
}
.cart-btn {
  background: transparent;
   border: none; 
  cursor: pointer;
}

.amount-btn {
  color: var(--primaryColor);
  font-size: 1rem;
}  */
</style>