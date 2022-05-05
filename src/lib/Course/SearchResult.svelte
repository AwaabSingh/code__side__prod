<script>
	import { isOverLayOpen } from '../../store/overlay';
	export let searchPostResult;
	import comma from '../../store/numcomma';
</script>

<div
	class="w-screen h-screen fixed flex top-0 left-0 justify-center items-center bg-purple-300 opacity-95 z-10 "
	on:click={() => isOverLayOpen.set(false)}
>
	<div
		class="bg-white text-white rounded-md px-8 py-10 relative w-screen h-screen mt-10  mx-40"
	>
		<button
			class="absolute text-center rounded-full px-3 py-0.5 bg-white top-2 right-3 text-4xl text-red-500"
			on:click={() => isOverLayOpen.set(false)}>&times;</button
		>
		{#each searchPostResult as searchPost}
			<div class="holder">
				<div
					class="card border w-96 bg-white  hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5"
				>
					<div class="profile w-full flex m-3 ml-4 text-white">
						<a href={`/course/${searchPost.publickKey}`}>
							<img
								class="w-28 h-28 p-1 bg-white rounded-full"
								src={`https://aqueous-beyond-13704.herokuapp.com/static/${searchPost.banner}`}
								alt={searchPost.title}
							/>
						</a>
						<div class="title m-2 ml-3 font-bold flex flex-col">
							<a href={`/course/${searchPost.publickKey}`}>
								<div class="name break-words text-dkPur">{searchPost.title}</div>
							</a>
							<article class="flex items-center justify-between leading-none p-2 ">
							
								<div class="px-5">
									<i class="bx bx-star text-csYellow text-xl" />
									<span class="mx-2 text-lgPur font-bold text-sm md:text-xl">4.5</span>
								</div>
								
								<div class="">
									<i class="bx bx-time-five text-xl text-lgPur pt-2" />
									<span class="mx-1 text-lgPur font-bold text-sm mr-5 md:text-xl ">16 hrs</span>
								</div>
							</article>

							<footer class="flex items-center justify-between leading-none p-2 md:p-4">
								<div class="text-gray-500 text-md font-bold">Course Price</div>
								<div class="no-underline ">
									<span class="text-gray-500 text-md font-bold"
										>&#8358;{comma(searchPost.price)}</span
									>
									<i class="fa fa-heart" />
								</div>
							</footer>
						</div>
					</div>
					<div
						class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3"
					>
					
					</div>
				</div>
				
			</div>
		{/each}
	</div>
</div>

<!-- <div style={{ overflow: 'hidden' }}>
	<div
		class="h-full w-full bg-[#0b0b0b] fixed top-0 left-0 z-[1042] overflow-hidden opacity-[0.8]"
	/>
	<button
		class="absolute text-center rounded-full px-3 py-0.5 bg-white top-2 right-3 text-4xl text-red-500"
		on:click={() => isOverLayOpen.set(false)}>&times;</button
	>
	<div class="top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed">
		<div class="top-0 left-0 w-full h-full z-[1042] overflow-hidden fixed">
			<div class="max-w-full mx-auto z-[1045] align-middle relative" />
		</div>
	</div>
</div> -->
