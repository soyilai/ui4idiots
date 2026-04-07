<script lang="ts">
	import { resolve } from '$app/paths';
	import { course } from '$lib/course';

	function parseHref(href: string): { course: string; lesson: string } {
		const parts = href.split('/').filter(Boolean);
		return {
			course: parts[1] || '1',
			lesson: parts[2] || '0'
		};
	}
</script>

<main>
	<section class="blueprint flex min-h-screen flex-col items-center justify-center">
		<div>
			<h1 class="text-center text-2xl font-black md:text-6xl">
				<span class="underline-blue">UI</span> <span class="font-serif">For</span>
				<span class="underline-red">Idiots</span>
			</h1>
			<div>
				<p class="text-start text-muted md:mt-2">
					Learning to design, from idiots, for idiots, and for free.
				</p>
			</div>
		</div>

		<div class="mt-4 inline-flex gap-12">
			<a
				class="inline-flex cursor-pointer text-primary underline hover:text-primary-hover"
				href={resolve('/course/[course]/[lesson]', { course: '1', lesson: '0' })}
			>
				Get started
				<iconify-icon icon="material-symbols:arrow-right-alt-rounded" width="24" height="24"
				></iconify-icon>
			</a>
			<button
				class="inline-flex cursor-pointer text-muted underline hover:text-muted-hover"
				onclick={() => {
					window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
				}}
				>Read curriculum
				<iconify-icon icon="material-symbols:keyboard-arrow-down-rounded" width="24" height="24"
				></iconify-icon></button
			>
		</div>
	</section>
	<section class="p-16">
		<h2 class="underline-red text-center text-4xl font-bold">The Curriculum</h2>

		<ol class="mt-4 flex list-decimal flex-col">
			{#each course as section (section.title)}
				<li class="w-1/2 odd:self-start even:self-end">
					<h3 class="underline-blue text-xl font-semibold">{section.title}</h3>
					<p class="text-muted">{section.description}</p>
					<ol class="ml-4 list-decimal">
						{#each section.lessons as lesson (lesson.title)}
							<li class="mt-2">
								<a
									class="underline-red"
									href={resolve('/course/[course]/[lesson]', parseHref(lesson.href))}
								>
									{lesson.title}
								</a>
								<p class="text-muted">{lesson.description}</p>
							</li>
						{/each}
					</ol>
				</li>
			{/each}
		</ol>
	</section>
</main>
