<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div id="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	#app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		display: flex;
		flex-direction: column;
		flex-grow: 1; /* This makes the main element take up remaining space */
		padding: 1rem;
		background-color: #71717a; /* bg-zinc-500 */
	}
</style>
