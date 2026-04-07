<script>
	const { src, alt, epi } = $props();
</script>

<div class="mx-auto h-fit w-fit rounded-md border border-slate-600">
	<img {src} {alt} class="m-0!" />
	<hr class="m-0! border-slate-600" />
	{#if epi}
		<p class="mb-0 p-4 text-center text-sm text-muted">{epi}</p>
	{/if}
</div>
