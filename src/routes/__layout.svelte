<script>
	import '../app.css';
	import Navbar from '../lib/Navbar/Navbar.svelte';
	import globalStore from '../store/globalStore';
	import Footer from '../lib/Footer.svelte';
	import Alert from '$lib/Alert.svelte';
	import Cart from '$lib/Cart/Cart.svelte';
	import Sidebar from '$lib/Navbar/Sidebar.svelte'

//    console.log($globalSto)
</script>



<!-- Navbar -->

 
<Navbar/>

{#if $globalStore.sidebar}
  <Sidebar/>
{/if}
{#if $globalStore.cart}
	<Cart />
{/if}

{#if globalStore.alert}
	<Alert />
{/if}
<slot />
<Footer />
