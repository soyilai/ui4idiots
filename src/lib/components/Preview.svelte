<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */
	import Prism from 'prismjs';
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
		let formatted = '';
		let indent = 0;
		const voidElements = new Set([
			'area',
			'base',
			'br',
			'col',
			'embed',
			'hr',
			'img',
			'input',
			'link',
			'meta',
			'param',
			'source',
			'track',
			'wbr'
		]);
		const tagRegex = /<\/?([a-zA-Z0-9-]+)(\s[^>]*)?>|([^<]+)/g;
		let match: RegExpExecArray | null;
		let noCommentHtml = html.replace(/<!--[\s\S]*?-->/g, '');
		while ((match = tagRegex.exec(noCommentHtml)) !== null) {
			if (match[1]) {
				const tagName = match[1].toLowerCase();
				const isClosingTag = match[0].startsWith('</');
				const isVoidElement = voidElements.has(tagName);

				if (isClosingTag) {
					indent = Math.max(indent - 1, 0);
				}

				formatted += '  '.repeat(indent) + match[0].trim() + '\n';

				if (!isClosingTag && !isVoidElement) {
					indent++;
				}
			} else if (match[3]) {
				const text = match[3].trim();
				if (text) {
					formatted += '  '.repeat(indent) + text + '\n';
				}
			}
		}

		return Prism.highlight(formatted, Prism.languages.html, 'html').trim();
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
			<pre class="language-html overflow-x-auto rounded-xl bg-(--tw-prose-pre-bg) p-4 text-sm">
<code>{@html code}</code>
			</pre>
		{/if}
	</div>
</div>
