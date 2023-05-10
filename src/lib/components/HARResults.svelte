<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import RequestedUrlTable from './RequestedURLTable.svelte';
	import TimingsGraph from './TimingsGraph.svelte';
	import TimingsTable from './TimingsTable.svelte';
	export let entries: HarEntry[] = [];
</script>

<div class="mx-6 mt-6 space-y-5">
	<RequestedUrlTable {entries} />
	<div class="grid grid-cols-5 gap-x-3">
		<TimingsTable {entries} />
		<TimingsGraph {entries} />
	</div>
</div>
