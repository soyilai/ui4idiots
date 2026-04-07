<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import '$lib/assets/atomdark.css';

	const { children } = $props();
</script>

<Navbar />
{@render children()}
