<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import RequestedUrlTable from './RequestedURLTable.svelte';
	export let entries: HarEntry[] = [];
</script>

<RequestedUrlTable {entries} />
