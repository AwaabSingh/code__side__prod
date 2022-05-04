<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineShoppingCart from "svelte-icons-pack/ai/AiOutlineShoppingCart";
    import globalStore from '../../store/globalStore'

  

     $: total = 0
    // console.log(total)
</script>

<div class="font-sans block  lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
    <div href="#/" role="button" class="relative flex">
      <button on:click={() => globalStore.toggleItem('cart', true)}>
        <Icon color="#4F4F86" size='30' src={AiOutlineShoppingCart} />
      </button>
       
        <span class="absolute -right-1 -top-1 rounded bg-lgPur w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
          {total}
      </span>
    </div>
  </div>