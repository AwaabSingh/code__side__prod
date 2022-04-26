<script context="module">
    import axios from 'axios';
    import {GetUser} from '../Requests/users'

    export const load = async ({session})=>{
        let u = await GetUser({'token':session.current_user.access_token})


        if(session.current_user.access_token){
            // return {
            //     status:304,
            //     redirect:'/',
            //     body:{
            //         'message':'user not authorize'
            //     }
            // }
        }

        // console.log(u);
        // console.log(session);
        return {
            props:{u}
        }
    }

</script>


<script>
    import '../app.css'
    import Navbar from  '../lib/Navbar/Navbar.svelte'
    import globalStore  from '../store/globalStore'
    import Footer from '../lib/Footer.svelte'
    import Alert from '$lib/Alert.svelte'
    import Cart from '$lib/Cart/Cart.svelte'

    export let u
    console.log(u);
    const user = u
</script>

<!-- Navbar -->
<Navbar user={user} />

{#if $globalStore.cart}
<Cart/>
{/if}
{#if $globalStore.alert}
 <Alert/>
{/if}
<slot/>
<Footer/>