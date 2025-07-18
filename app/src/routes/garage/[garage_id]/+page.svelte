<script lang="ts">
	const { data } = $props();

	let vehicles = $state(data.garage?.vehicles || []);
</script>

<main>
	<h1 class="text-2xl tracking-wider">Quick Picks</h1>

	<div class="flex flex-row gap-2">
		{#each vehicles as vehicle}
			<!-- <div class="border-5 p-6"> -->
			<!-- 	{vehicle.year} -->
			<!-- 	{vehicle.make} -->
			<!-- 	{vehicle.model} -->
			<!-- </div> -->
			<div class="card preset-filled-surface-100-900 h-60 w-full max-w-md">
				<header class="h-8 bg-gray-500"></header>
				<div>
					{vehicle.year}
					{vehicle.make}
					{vehicle.model}
				</div>
			</div>
		{/each}
	</div>
	{JSON.stringify(data)}

	<h1 class="text-2xl tracking-wider">Service Visits</h1>
</main>
