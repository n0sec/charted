<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Paginator, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/dist/components/Paginator/types';

	export let entries: HarEntry[] = [];

	let fiveHundredResponseCodes = entries.filter(
		(code) => Number(code.response?.status!) >= 500 && Number(code.response?.status!) < 600
	);

	const sourceData = fiveHundredResponseCodes.map((entry) => {
		return [
			String(entry.request?.url), // url
			String(entry.request?.method), // method
			String(entry.response?.status), // status
			JSON.parse(entry.response?.content?.text as string) // errorText
				? JSON.parse(entry.response?.content?.text as string).message
				: entry.response?.content?.text,
			String(entry.request?.method) == 'GET'
				? String(Math.round((Number(entry.response?.bodySize) + Number.EPSILON) * 100) / 100)
				: String(Math.round((Number(entry.request?.bodySize) + Number.EPSILON) * 100) / 100),
			String(entry.response?.content?.size), // contentSize
			String(entry.time), // time
			String(entry.serverIPAddress), // serverIPAddress
			String(entry._fromCache) // cache
		];
	});

	const fiveHundredResponseCodesTable: TableSource = {
		head: [
			'URL',
			'Method',
			'Status',
			'Error Text',
			'Body Size (bytes)',
			'Content Size (bytes)',
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
	<h1 class="unstyled text-lg font-bold ml-3 mb-1">500 Response Codes Details</h1>
	<Table source={{ head: fiveHundredResponseCodesTable.head, body: paginatedEntries }} />
	<div class="mt-3">
		{#if sourceData.length > 10}
			<Paginator bind:settings={page} />
		{/if}
	</div>
</div>
