<script>
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineSearch from 'svelte-icons-pack/ai/AiOutlineSearch';
	//  import SearchIcon from '../SearchIcon.svelte'
	import globalStore from '../../store/globalStore';
	import CartBtn from '../Cart/CartBtn.svelte';
	import LoginLink from '../LoginLink.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
	import { isOverLayOpen } from '../../store/overlay';
	import { getCourses } from '../../Requests/courses';
	import SearchResult from '$lib/Course/SearchResult.svelte';
import { claim_html_tag } from 'svelte/internal';

	 let SearchTerm = '';
  export let searchPostResult = [];
	let searchCourse = [];
  
	const search = async () => {
		try {
      searchCourse = await getCourses();
       searchPostResult = searchCourse.filter(course => {
        return course.title.includes(SearchTerm)
      })
			isOverLayOpen.set(true);
			console.log(searchPostResult);
		} catch (error) {
			console.log(error);
		}
	};

	// export let user;
</script>

<header class="border-b-2 border-lgPur hide-mobile fixed z-10 w-screen">
	<div class=" flex flex-row items-center p-1 justify-between bg-white shadow-xs ">
		<div class="ml-10 pr-3  hidden md:flex">
			<a href="/" class="">
				<img src="/images/cs_logo.svg" alt="code side acdemy" class="w md:w-40" />
			</a>
		</div>
		<div class="font-bold text-lg text-dkPur hidden md:flex  pr-3 ">
			<a href="/course">Courses</a>
		</div>
		<span
			class="w-screen md:w-1/3 h-10 bg-lgPur cursor-pointer border border-gray-300 text-sm rounded-full flex "
		>
			<input
				type="search"
				name="serch"
				placeholder="Search For Courses ..."
				class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
				bind:value={SearchTerm}
			/>
			<div class="" on:click={search}>
				<i class="bx bx-search-alt m-1 mr-5 text-lg text-white w-4 h-4" />
			</div>
		</span>
		<div class="ml- text-lg text-dkPur hidden md:flex font-bold  pr-3 pl-3">
			<a href="https://medium.com/@codesideacademy" target="_blank"> Blog </a>
		</div>

		<div class="flex flex-row-reverse mr-8  md:flex">
			<div class=" text-center  px- py-2 m-2">
				<CartBtn />
			</div>
			<div
				class="text-dkPur rounded-2xl border border-lgPur  text-center  px-4 py-2 m-2 hover:bg-dkPur hover:text-white"
			>
				<a href="/login" class="">Login</a>
			</div>

			<div
				class="text-white bg-dkPur rounded-2xl border hover:border-lgPur  hover:bg-transparent hover:text-dkPur text-center  px-4 py-2 m-2 "
			>
				<a href="/register" class="text-center">Register</a>
			</div>
		</div>
	</div>
</header>

{#if $isOverLayOpen}
	<SearchResult {searchPostResult}/>
{/if}
