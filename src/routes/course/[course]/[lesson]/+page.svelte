<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	const { data } = $props();

	function parseHref(href: string): { course: string; lesson: string } {
		const parts = href.split('/').filter(Boolean);
		return {
			course: parts[1] || '1',
			lesson: parts[2] || '0'
		};
	}
</script>

<main>
	<section class="blueprint flex flex-col items-center justify-center p-16">
		<p class="text-xs font-light">{data.section.title}</p>
		<h1 class="text-center text-4xl font-black">
			{data.lesson.title}
		</h1>
		<p>
			{data.lesson.description}
		</p>
	</section>
	{#if data.lesson.isInfoPage}
		<section class="mx-auto max-w-4xl px-12 py-8">
			<h2 class="mb-8 text-2xl font-bold">Lessons in this section</h2>
			<div class="grid gap-4">
				{#each data.lesson.lessons as lesson, index (index)}
					<button
						class="group cursor-pointer rounded-xl border border-slate-600 bg-linear-to-br from-primary/10 to-primary/5 p-6 text-left transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
						onclick={() =>
							goto(
								resolve('/course/[course]/[lesson]', {
									course: String(data.courseId),
									lesson: String(index + 1)
								})
							)}
					>
						<div class="flex items-start justify-between">
							<div>
								<h3 class="text-lg font-semibold">{lesson.title}</h3>
								<p class="mt-2 text-sm text-slate-400">{lesson.description}</p>
								<p class="mt-3 text-xs font-medium text-slate-300">
									<span class="underline-red">Goal:</span>
									{lesson.goal}
								</p>
							</div>
							<iconify-icon
								icon="material-symbols:arrow-forward-rounded"
								width="24"
								height="24"
								class="shrink-0 text-primary transition-transform group-hover:translate-x-1"
							></iconify-icon>
						</div>
					</button>
				{/each}
			</div>
		</section>
	{:else}
		<section class="mx-auto prose max-w-4xl px-12 py-8 prose-slate dark:prose-invert">
			<blockquote>
				<p style="quotes:none!important;">
					<span class="underline-red font-bold">Goal:</span>
					{data.lesson.goal}
				</p>
			</blockquote>
			{@render data.lesson.content.default()}
		</section>
	{/if}
	<section class="mx-auto w-full max-w-4xl px-12 py-12">
		<div class="grid gap-4 md:grid-cols-2">
			{#if data.lesson.previous}
				<button
					class="group flex cursor-pointer flex-col justify-between rounded-xl border border-slate-700 bg-linear-to-br from-slate-900 to-slate-950 p-6 transition-all hover:border-slate-500 hover:shadow-lg hover:shadow-slate-900/50"
					onclick={() => {
						const { course, lesson } = parseHref(data.lesson.previous!.href);
						goto(resolve('/course/[course]/[lesson]', { course, lesson }));
					}}
				>
					<div class="flex items-center justify-between">
						<div class="flex flex-col items-start gap-1">
							<p class="text-xs font-semibold tracking-widest text-slate-400 uppercase">Previous</p>
							<p class="line-clamp-2 text-lg font-semibold text-slate-100">
								{data.lesson.previous?.title}
							</p>
						</div>
						<iconify-icon
							icon="material-symbols:arrow-back-rounded"
							width="32"
							height="32"
							class="shrink-0 text-slate-500 transition-transform group-hover:-translate-x-1"
						></iconify-icon>
					</div>
				</button>
			{:else}
				<div></div>
			{/if}
			{#if data.lesson.next}
				<button
					class="group flex cursor-pointer flex-col justify-between rounded-xl border border-slate-600 bg-linear-to-br from-primary/10 to-primary/5 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
					onclick={() => {
						const { course, lesson } = parseHref(data.lesson.next!.href);
						goto(resolve('/course/[course]/[lesson]', { course, lesson }));
					}}
				>
					<div class="flex items-center justify-between">
						<div class="flex flex-col items-start gap-1">
							<p class="text-xs font-semibold tracking-widest text-slate-400 uppercase">Next</p>
							<p
								class="line-clamp-2 bg-linear-to-r from-primary to-primary/80 bg-clip-text text-lg font-semibold text-transparent"
							>
								{data.lesson.next?.title}
							</p>
						</div>
						<iconify-icon
							icon="material-symbols:arrow-forward-rounded"
							width="32"
							height="32"
							class="shrink-0 text-primary transition-transform group-hover:translate-x-1"
						></iconify-icon>
					</div>
				</button>
			{/if}
		</div>
	</section>
</main>
