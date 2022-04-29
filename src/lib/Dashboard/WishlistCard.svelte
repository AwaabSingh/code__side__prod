<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineStar from "svelte-icons-pack/ai/AiOutlineStar";
    import AiOutlineClockCircle from "svelte-icons-pack/ai/AiOutlineClockCircle";
    import BsTrash from "svelte-icons-pack/bs/BsTrash";
import axios from 'axios';
import url from '../../store/url'
import {  session } from '$app/stores'

    export let wishItem;

    const userToken = $session.current_user.access_token;
    // const pk = cartItem.publickKey

      const removeWish = async (courseKey) => {
        try {
        const config = {
            headers:  {
             'content-type': 'application/json',
             'user-token': ` ${userToken}`
      }}
        
                    
        await axios.delete(`${url}/deletewish?courseKey=${courseKey}`, config)
       location.reload()
               
      } catch (error) {
        console.log(error)
        
      }
      }
   

</script>

<div class="mx- my-">
    <div class="relative mx-auto flex  flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 space-x-4">
      <!-- img -->
      <img class="aspect-video  rounded-t-2xl object-cover object-center" src="/images/hero.jpg" alt=""/>
       <div class="absolute  top-3 right-5 bg-white rounded-full py-2 px-2 shadow-lg" on:click="{() => removeWish(wishItem.publickKey)}">
           <Icon src={BsTrash} color='red' size='20'/>
       </div>
      <!-- text information -->
      <div class="p-4">
       <div class="space-y-2">
        <small class=" text-xs">Web Development</small>
        <h1 class="text-2xl font-medium text-slate-600 pb-2">{wishItem.title}</h1>
       <div class="card__rating flex py-4 justify-between">
                      <div class="flex items-center ">
                            <Icon src={AiOutlineStar} color='#F1A51F' size='20'/>
                            <span class='mx-2 text-lgPur font-bold text-sm md:text-xl'>4.5</span>
                      </div>
                      <div class="flex items-center">
                          <div class="">
                                <Icon color="#6363A3" src={AiOutlineClockCircle}/>
                          </div>
                          <span class='mx-1 text-lgPur font-bold text-sm mr-5 md:text-xl '>16 hrs</span>
                      </div>
                 </div>
   </div>
      <div class="card__price flex justify-between space-x-2 text-sm p">
          <div class="">
              <h6 class='md:font-bold text-md text-gray-500'>Course Price</h6>
          </div>
          <div class="md:font-bold text-md text-gray-500">
              <h6>&#8358;{wishItem.price}</h6>
          </div>
      </div>
      </div>
    </div>
  </div>
