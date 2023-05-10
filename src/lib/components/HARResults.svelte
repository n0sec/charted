<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import RequestedUrlTable from './RequestedURLTable.svelte';
	import TimingsGraph from './TimingsGraph.svelte';
	import TimingsTable from './TimingsTable.svelte';
	export let entries: HarEntry[] = [];
</script>

<RequestedUrlTable {entries} />
<TimingsTable {entries} />
<TimingsGraph {entries} />
