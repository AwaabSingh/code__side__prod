<script>
	import { Toggle } from '$lib/utilities/actions.js';
	import { onMount } from 'svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import RiSystemCloseFill from 'svelte-icons-pack/ri/RiSystemCloseFill';
	import { fly, fade } from 'svelte/transition';
	import SearchIcon from '../SearchBar.svelte';
	import globalStore from '../../store/globalStore';
	import SmallLoginLink from '$lib/SmallLoginLink.svelte';

	// onMount(()=>{
	//   document.getElementsByTagName("a").addEventListener("click",()=>{
	//       console.log('clicked here');
	//   });

	// })
</script>

<div id="mobile-menu" class="sidebar-container pt-20" transition:fly={{ x: -1000 }}>
	<div class="sidebar" transition:fade={{ delay: 400 }}>
		<!-- Header -->
		<div class="sidebar-header">
			<button
				class="left-10"
				on:click={() => {
					Toggle('mobile-menu', 'active');
				}}
			>
				<i class="bx bx-x is-red" />
			</button>
		</div>

		<ul class="mt-10 flex flex-col space-y-10">
			<li class="">
				<a
					on:click={() => globalStore.toggleItem('sidebar', false)}
					class=" p-2 px-20 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
					href="/course">Courses</a
				>
			</li>
			<li class="">
				<SmallLoginLink />
			</li>
			<li>
				<!-- <div class="ml- text-lg text-dkPur hidden md:flex font-bold  pr-3 pl-3"> -->
				<a
					on:click={() => globalStore.toggleItem('sidebar', false)}
					class=" p-2 px-20 pt-2 text-lgPur rounded-xl baseline hover:bg-dkPur hover:text-white md:block border border-dkPur"
					href="https://medium.com/@codesideacademy"
					target="_blank"
				>
					Blog
				</a>
				<!-- </div> -->
			</li>
		</ul>
	</div>
</div>

<style>
	.sidebar-container {
		background: #fff;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 4;

		display: none;
	}

	.sidebar {
		width: 85vw;
		margin: 0 auto;
	}
	.sidebar-header {
		height: 5rem;
		display: flex;
		align-items: center;
	}
	/* .sidebar-logo {
  margin-top: 1.5rem;
} */

	/* .sidebar-links {
  margin-top: 2.5rem;
}
.sidebar-links a {
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 400;
  letter-spacing: var(--mainSpacing);
  display: block;
  margin: 0.5rem 0;
  transition: var(--mainTransition);
}
.sidebar-links a:hover {
  color: var(--primaryColor);
  padding-left: 0.5rem;
} */
</style>
