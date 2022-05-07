<script context="module">
	export function load({ url }) {
		const ref = url.searchParams.get('reference');
		console.log(url);
		return {
			props: {
				ref
			}
		};
	}
</script>

<script>
	export let ref;
	console.log(ref)
</script>

		<h1>Hello</h1>

