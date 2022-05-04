<script context="module">
	export function load({ error, status }) {
		return {
			props: { msg: error.message, status }
		};
	}
</script>

<script>
	export let status;
	export let msg;
</script>

<div class="min-h-screen md:flex">
	<div class="flex items-center justify-center w-full py-10 bg-white md:w-1/2">
		<div class="max-w-md">
			<div class="text-5xl font-black text-gray-800 md:text-8xl">
				{status}
			</div>

			<div class="w-16 h-1 my-3 bg-primary md:my-6" />

			<p class="text-2xl font-light leading-normal text-dkPur md:text-3xl">{msg}</p>

			<a href="/">
				<button
					class="px-4 py-2 mt-4 text-lg text-dkPur transition-colors duration-300 transform border border-lgPur rounded-lg hover:bg-dkPur hover:text-white focus:outline-none"
				>
					Go Home
				</button>
			</a>
		</div>
	</div>

	<div class="relative w-full pb-full md:flex md:pb-0 md:min-h-screen md:w-1/2">
		<div class="flex items-center w-full h-full max-w-4xl mx-auto">
			<img
				class="object-cover w-full"
				src="/svg/404-error-with-broken-robot-pana.svg"
				alt="Error"
			/>
		</div>
	</div>
</div>
