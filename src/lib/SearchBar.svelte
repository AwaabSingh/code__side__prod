<script>
	import { isOverLayOpen } from '../store/overlay';
  
  export let SearchTerm;


</script>

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
	<div class="" on:click={() => isOverLayOpen.set(true)}>
		<i class="bx bx-search-alt m-1 mr-5 text-lg text-white w-4 h-4" />
	</div>
</span>
