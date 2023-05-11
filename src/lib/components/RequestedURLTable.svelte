<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Paginator, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/dist/components/Paginator/types';
	export let entries: HarEntry[] = [];

	const sourceData = entries.map((entry) => {
		return {
			url: entry.request?.url,
			method: entry.request?.method,
			status: entry.response?.status,
			size:
				entry.request?.method == 'GET'
					? Math.round((Number(entry.response?.bodySize) + Number.EPSILON) * 100) / 100
					: Math.round((Number(entry.request?.bodySize) + Number.EPSILON) * 100) / 100,
			time: Math.round((Number(entry.time) + Number.EPSILON) * 100) / 100,
			serverIPAddress: entry.serverIPAddress,
			cache: entry._fromCache?.toString()
		};
	});

	const requestTable: TableSource = {
		head: ['URL', 'Method', 'Status', 'Size (Bytes)', 'Time (ms)', 'Server IP Address', 'Cache'],
		body: tableMapperValues(sourceData, [
			'url',
			'method',
			'status',
			'size',
			'time',
			'serverIPAddress',
			'cache'
		]),
		foot: []
	};

	// Paginator Settings
	let page: PaginationSettings = {
		offset: 0,
		limit: 10,
		size: sourceData.length,
		amounts: [1, 2, 5, 10]
	};
</script>

<div class="text-sm table-compact">
	<h1 class="unstyled text-lg font-bold ml-3 mb-1">
		Request Data with Response Times & Status Codes
	</h1>
	<Table source={requestTable} />
	<div class="mt-3">
		{#if sourceData.length > 10}
			<Paginator bind:settings={page} />
		{/if}
	</div>
</div>
