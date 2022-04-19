<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import CgCloseO from "svelte-icons-pack/cg/CgCloseO";
    import { fly, fade } from 'svelte/transition'
    import globalStore from '../store/globalStore'
    import { onMount, onDestroy } from 'svelte'

    const handleClose = () => {
         globalStore.toggleItem('alert', false)
    };

    let timeout
    onMount(() => {
        timeout  = setTimeout(() =>{
            globalStore.toggleItem('alert', false)
        }, 3000
        )
    })
</script>

 <div class="alert-container" in:fly={{ x: 50, duration: 1000}}
   out:fade={{ duration: 0 }}
   class:alert-danger={$globalStore.alertDanger}
   >
    <div class="alert">
         <p>
            {$globalStore.alertText}     
        </p>
         <button class='alert-close' on:click="{ handleClose}">
              <Icon src={CgCloseO}/>
         </button>
    </div>
 </div> 

 <style>
   .alert-container {
  position: fixed;
  top: 25%;
  right: 0%;
  transform: translate(0%, -30%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 10;
  background: #4CAF50;
  width: 23rem;
  padding: 2.5rem 1rem;
  text-align: center;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
  letter-spacing: 0.3rem;
  border-radius: 0.25rem;
  margin: 0 2rem;
}
/* .alert-center {
  position: relative;
} */
.alert p {
  margin-bottom: 0;
  line-height: 2;
}
.alert-danger {
  background:#bd0303;
}
.alert-close {
  color: #fff;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 7px;
  cursor: pointer;
  line-height: 0;
}
 </style>