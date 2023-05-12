<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Paginator, Table, type TableSource } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/dist/components/Paginator/types';

	export let entries: HarEntry[] = [];

	// Variable that obtains the resourceType from each entry with the _resourceType property and the bodySize (if it was a POST request) and the content size (if it was a GET request)
	let sourceData = entries.map((entry) => {
		return [
			String(entry.request?.url),
			String(entry._resourceType),
			String(Math.round((Number(entry.response?.content?.size) + Number.EPSILON) * 100) / 100)
		];
	});

	// Variable that obtains the accumulation of all the different resource types from entries

	const resourceTypeTable: TableSource = {
		head: ['URL', 'Resource Type', 'Content Size (Bytes)'],
		body: sourceData
	};

	// Paginator Settings
	let page: PaginationSettings = {
		offset: 0,
		limit: 10,
		size: sourceData.length,
		amounts: [1, 2, 5, 10, 25]
	};

	if (sourceData.length > 25) {
		page.amounts.push(entries.length);
	}

	$: paginatedEntries = sourceData.slice(
		page.offset * page.limit, // start
		page.offset * page.limit + page.limit // end
	);
</script>

<div class="text-sm table-compact">
	<h1 class="unstyled text-lg font-bold ml-3 mb-1">Request Type Details</h1>
	<Table source={{ head: resourceTypeTable.head, body: paginatedEntries }} />
	<div class="mt-3">
		{#if sourceData.length > 10}
			<Paginator bind:settings={page} />
		{/if}
	</div>
</div>
