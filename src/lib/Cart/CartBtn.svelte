<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineShoppingCart from "svelte-icons-pack/ai/AiOutlineShoppingCart";
</script>

<li class="font-sans block  lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
    <a href="#/" role="button" class="relative flex">
        <Icon color="#4F4F86" size='30' src={AiOutlineShoppingCart}/>
        <span class="absolute -right-1 -top-1 rounded bg-lgPur w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
      </span>
    </a>
  </li>