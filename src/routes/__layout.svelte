<script>
    import '../app.css'
    import Navbar from  '../lib/Navbar/Navbar.svelte'
    import Sidebar from '../lib/Navbar/Sidebar.svelte'
    import globalStore  from '../store/globalStore'
    import Footer from '../lib/Footer.svelte'
    import Alert from '$lib/Alert.svelte'

</script>

<!-- Navbar -->
<Navbar/>
{#if $globalStore.sidebar}
<Sidebar/>
{/if}
{#if $globalStore.alert}
 <Alert/>
{/if}
<slot/>
<Footer/>