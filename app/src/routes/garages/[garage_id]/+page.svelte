<script lang="ts">
	const { data } = $props();

	let vehicles = $state(data.garage?.vehicles || []);
</script>

<main class="flex flex-col gap-8">
	<div class="flex flex-col gap-2">
		<h1 class="text-xl font-light tracking-wider">Recents</h1>
		<div class="flex w-full flex-row gap-4">
			{#each vehicles as vehicle}
				<a
					href={`/garages/${vehicle.garage_id}/vehicles/${vehicle.id}`}
					class="card preset-filled-surface-100-900 flex h-60 w-full max-w-1/3 flex-col overflow-hidden"
				>
					<div class="flex-1 overflow-hidden">
						<img src={vehicle.photo} alt="" />
					</div>
					<footer class="flex h-10 items-center justify-between bg-gray-600 px-2">
						<span class="text-lg">{vehicle.year} {vehicle.make} {vehicle.model}</span>
						<span class="text-lg">
							{vehicle.service_visits.at(0)?.odometer.toLocaleString('en-US') ?? '-'}
						</span>
					</footer>
				</a>
			{/each}
		</div>
	</div>
</main>
