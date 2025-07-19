<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	const menu_items = [
		{
			label: 'Garage',
			slug: '/garages'
		}
	];
</script>

<div class="flex h-screen w-screen flex-row">
	<div class="relative flex min-w-60 flex-col items-center p-6">
		<div class="absolute inset-0 -z-1 bg-black opacity-40"></div>

		<nav class="w-full flex-col">
			<a href="/">
				<h1 style="font-family: 'Bitcount Single', sans-serif;" class="text-4xl font-semibold tracking-wide">
					<span>Open</span>
					<div class="flex gap-2">
						<span>Garage</span>
						<span class="anchor">></span>
					</div>
				</h1>
			</a>
			<ul class="mt-8 flex flex-col gap-4">
				{#each menu_items as menu_item}
					<li
						class:border-b-1={page.url.href.includes(menu_item.slug)}
						class:border-r-1={page.url.href.includes(menu_item.slug)}
						class="border-primary-50 flex"
					>
						<a href={menu_item.slug} class="anchor flex-1 py-1">{menu_item.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="h-full w-full overflow-hidden overflow-y-scroll p-6">
		{@render children()}
	</div>
</div>
