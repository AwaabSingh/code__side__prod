<script>
    import FaBrandsTwitter from "svelte-icons-pack/fa/FaBrandsTwitter";
    import FaBrandsInstagram from "svelte-icons-pack/fa/FaBrandsInstagram";
    import FaBrandsLinkedin from "svelte-icons-pack/fa/FaBrandsLinkedin";
    import FaBrandsYoutube from "svelte-icons-pack/fa/FaBrandsYoutube";
    import Icon from 'svelte-icons-pack/Icon.svelte';

</script>

<footer>
    <div class="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start pt-20">
        <div class="p-5 ">
            <ul>
                <!-- <p class="text-gray-800 font-bold text-3xl pb-6">
                    Code  <span class="text-blue-600"> Side</span>
                </p> -->
                <img src="/images/cs_logo.svg" alt="" class='h-14'>
                <div class="flex gap-6 pb-5">
<!--                    
                    <Icon src={FaBrandsInstagram} class="text-2xl cursor-pointer hover:text-yellow-600" />
                    <Icon src={ FaBrandsTwitter} class="text-2xl cursor-pointer hover:text-blue-600" />
                    <Icon src={FaBrandsLinkedin} class="text-2xl cursor-pointer hover:text-blue-600" />
                    <Icon src={FaBrandsYoutube} class="text-2xl cursor-pointer hover:text-red-600" /> -->
                </div>
            </ul>
        </div>
        <div class="p-5">
            <ul>
                <p class="text-gray-800 font-bold text-2xl pb-4">Product</p>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Stocks
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Futures & Options
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Mutual Funds
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Fixed deposits
                </li>
            </ul>
        </div>
        <div class="p-5">
            <ul>
                <p class="text-gray-800 font-bold text-2xl pb-4">Company</p>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    About
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Products
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Pricing
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Careers
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Press & Media
                </li>
            </ul>
        </div>
        <div class="p-5">
            <ul>
                <p class="text-gray-800 font-bold text-2xl pb-4">Support</p>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Contact
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Support Portals
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    List Of Charges
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Downloads & Resources
                </li>
                <li class="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                    Videos
                </li>
            </ul>
        </div>
    </div>
   
</footer>