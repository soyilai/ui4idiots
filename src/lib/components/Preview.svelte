<script lang="ts">
	let previewEl: HTMLDivElement | null | undefined = $state();
	let code = $state('');
	let tab = $state<'preview' | 'code'>('preview');

	const { children } = $props();

	$effect(() => {
		if (previewEl) {
			code = format(previewEl.innerHTML);
		}
	});

	function format(html: string) {
		return html
			.trim()
			.replace(/>\s+</g, '>\n<')
			.replace(/\n\s*\n/g, '\n');
	}
</script>

<div
	class="not-prose w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-800"
>
	<div
		class="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2 dark:border-slate-800 dark:bg-slate-950"
	>
		<div class="flex gap-1 rounded-lg bg-slate-100 p-1 dark:bg-slate-900">
			<button
				class={`rounded-md px-3 py-1 text-sm transition ${
					tab === 'preview'
						? 'bg-white text-slate-900 shadow dark:bg-slate-800 dark:text-slate-200'
						: 'text-slate-500 hover:text-slate-800 dark:text-slate-700 dark:hover:text-slate-300'
				}`}
				onclick={() => (tab = 'preview')}
			>
				Preview
			</button>

			<button
				class={`rounded-md px-3 py-1 text-sm transition ${
					tab === 'code'
						? 'bg-white text-slate-900 shadow dark:bg-slate-800 dark:text-slate-200'
						: 'text-slate-500 hover:text-slate-800 dark:text-slate-700 dark:hover:text-slate-300'
				}`}
				onclick={() => (tab = 'code')}
			>
				Code
			</button>
		</div>
	</div>

	<div class="p-4">
		{#if tab === 'preview'}
			<div
				class="rounded-xl border border-slate-200 bg-white p-4 text-black!"
				bind:this={previewEl}
			>
				{@render children()}
			</div>
		{:else}
			<pre class="overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">
<code>{code}</code>
			</pre>
		{/if}
	</div>
</div>
