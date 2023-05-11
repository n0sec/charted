<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Paginator, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/dist/components/Paginator/types';

	export let entries: HarEntry[] = [];

	let fourHundredResponseCodes = entries.filter(
		(code) => code.response?.status! >= 400 && code.response?.status! < 500
	);

	const sourceData = fourHundredResponseCodes.map((entry) => {
		return {
			url: entry.request?.url,
			method: entry.request?.method,
			statusCode: entry.response?.status,
			size:
				entry.request?.method == 'GET'
					? Math.round((Number(entry.response?.bodySize) + Number.EPSILON) * 100) / 100
					: Math.round((Number(entry.request?.bodySize) + Number.EPSILON) * 100) / 100,
			contentSize: Math.round((Number(entry.response?.content?.size) + Number.EPSILON) * 100) / 100,

			time: Math.round((Number(entry.time) + Number.EPSILON) * 100) / 100,
			serverIPAddress: entry.serverIPAddress,
			statusText: JSON.parse(entry.response?.content?.text as string)
				? JSON.parse(entry.response?.content?.text as string).message
				: '' // This may cause an issue with non JSON responses and if there is no `message` property
		};
	});

	const fourHundredResponseCodesTable: TableSource = {
		head: [
			'URL',
			'Method',
			'Status',
			'Error Text',
			'Body Size (bytes)',
			'Content Size (bytes)',
			'Time (ms)',
			'Server IP Address'
		],
		body: tableMapperValues(sourceData, [
			'url',
			'method',
			'statusCode',
			'statusText',
			'size',
			'contentSize',
			'time',
			'serverIPAddress'
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

<div class="rounded-none space-y-3-[:not(.unstyled)] text-sm table-compact">
	<h1 class="unstyled text-lg font-bold ml-3 mb-1">400 Response Codes Details</h1>
	<Table source={fourHundredResponseCodesTable} class="!rounded-none" />
	<div class="mt-3">
		{#if sourceData.length > 10}
			<Paginator bind:settings={page} />
		{/if}
	</div>
</div>
