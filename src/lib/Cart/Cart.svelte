<script>
    import globalStore from '../../store/globalStore'
    import { fly, fade, blur } from 'svelte/transition'
    
</script>

<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{ x:100 }}>
        <div class="cart" transition:fade={{ delay:400 }}>
            <!-- Cart Header -->
            <div class="cart-header">
                <button class="btn-close" on:click="{() => globalStore.toggleItem('cart', false)}">  
                    <i class="fas fa-window-close"></i>
                </button>
                <h2 class="cart-title">Your Cart</h2>
            </div>
            <!-- END Cart header -->
            <!-- cart items -->
                <!-- <ItemsList /> -->
            <!-- end  cart items -->
            <!-- Cart footer -->
             <div class="cart-footer">
                 <!-- {#if $user.jwt} -->
                    <!-- <a href="/checkout" class='btn btn-primary btn-block'  on:click="{() => globalStore.toggleItem('cart', false)}">Checkout</a> -->
                 <!-- {:else} -->
                 <p class="cart-login"> 
                     in order to process to  checkout please
                     <a href="/login"  on:click="{() => globalStore.toggleItem('cart', false)}">Login </a>
                 </p>
                 <!-- {/if} -->
             </div>
            <!-- end Cart footer -->
        </div>
    </div>
</div> 

<style>
   
.cart-overlay {
  background: rgba(35, 10, 36, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 6;
  /* overflow-y: scroll; */
}
.cart-container {
  width: 100%;
  height: inherit;
  overflow-y: scroll;
  background: #fff;
  margin-left: auto;
}

.btn-close {
  background: transparent;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
}

.cart-header,
.cart-footer {
  height: 5rem;
  display: flex;
  align-items: center;
}
.cart {
  width: 85%;
  height: inherit;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}
.cart-header {
  justify-content: space-between;
}
.cart-title {
  margin-bottom: 0;
  justify-self: center;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
}
.cart-login {
  text-transform: capitalize;
  font-size: 1.4rem;
  width: 100%;
}
.cart-login a {
  text-transform: uppercase;
  color: #6363A3;
}
@media screen and (min-width: 768px) {
  .cart-container {
    width: 30vw;
    min-width: 450px;
  }
}
.cart {
  width: 85%;
  height: inherit;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}
.cart-header {
  justify-content: space-between;
}
.cart-title {
  margin-bottom: 0;
  justify-self: center;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
}
.cart-login {
  text-transform: capitalize;
  font-size: 1.4rem;
  width: 100%;
}
.cart-login a {
  text-transform: uppercase;
  color: #6363A3;
}
</style>