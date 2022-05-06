<script>
	import { page } from '$app/stores';
    const refId = $page.params.reference.split('&')[0]
	const txdId = $page.params.reference.split('&')[1]
	console.log($page);
	console.log(refId);
	console.log(txdId);
</script>

<h1>Ref</h1>
