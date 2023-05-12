<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Paginator, Table, type TableSource } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/dist/components/Paginator/types';

	export let entries: HarEntry[] = [];

	let fourHundredResponseCodes = entries.filter(
		(code) => Number(code.response?.status!) >= 400 && Number(code.response?.status!) < 500
	);

	const sourceData = fourHundredResponseCodes.map((entry) => {
		return [
			String(entry.request?.url), // url
			String(entry.request?.method), // method
			String(entry.response?.status), // status
			String(entry.response?.statusText), // statusText/Error Text
			entry.request?.method === 'GET' // bodySize
				? String(Math.round((Number(entry.response?.bodySize) + Number.EPSILON) * 100) / 100)
				: String(Math.round((Number(entry.request?.bodySize) + Number.EPSILON) * 100) / 100),
			String(Math.round((Number(entry.response?.content?.size) + Number.EPSILON) * 100) / 100), // contentSize
			String(entry._resourceType), // resourceType
			String(Math.round((Number(entry.time) + Number.EPSILON) * 100) / 100), // time
			String(entry.serverIPAddress), // serverIPAddress
			String(entry._fromCache) // cache
		];
	});

	const fourHundredResponseCodesTable: TableSource = {
		head: [
			'URL',
			'Method',
			'Status',
			'Error Text',
			'Body Size (bytes)',
			'Content Size (bytes)',
			'Resource Type',
			'Time (ms)',
			'Server IP Address',
			'Cache'
		],
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

<div class="rounded-none space-y-3-[:not(.unstyled)] text-sm table-compact">
	<h1 class="unstyled text-lg font-bold ml-3 mb-1">400 Response Codes Details</h1>
	<Table source={{ head: fourHundredResponseCodesTable.head, body: paginatedEntries }} />
	<div class="mt-3">
		{#if sourceData.length > 10}
			<Paginator bind:settings={page} />
		{/if}
	</div>
</div>
