<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Paginator, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import type { PaginationSettings } from '@skeletonlabs/skeleton/dist/components/Paginator/types';
	export let entries: HarEntry[] = [];

	// Define the source data
	const sourceData = entries.map((entry) => {
		return {
			url: entry.request?.url,
			blocked: Math.round((Number(entry.timings?.blocked) + Number.EPSILON) * 100) / 100,
			connect: Math.round((Number(entry.timings?.connect) + Number.EPSILON) * 100) / 100,
			dns: Math.round((Number(entry.timings?.dns) + Number.EPSILON) * 100) / 100,
			receive: Math.round((Number(entry.timings?.receive) + Number.EPSILON) * 100) / 100,
			send: Math.round((Number(entry.timings?.send) + Number.EPSILON) * 100) / 100,
			ssl: Math.round((Number(entry.timings?.ssl) + Number.EPSILON) * 100) / 100,
			wait: Math.round((Number(entry.timings?.wait) + Number.EPSILON) * 100) / 100
		};
	});

	const timingsTable: TableSource = {
		head: ['URL', 'Blocked', 'Connect', 'DNS', 'Receive', 'Send', 'SSL', 'Wait'],
		body: tableMapperValues(sourceData, [
			'url',
			'blocked',
			'connect',
			'dns',
			'receive',
			'send',
			'ssl',
			'wait'
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

<div class="rounded-none col-span-3 text-sm table-compact">
	<h1 class="unstyled text-lg ml-3 font-bold mb-1">Request Timings (in ms)</h1>
	<Table source={timingsTable} />
	<div class="mt-3">
		{#if sourceData.length > 10}
			<Paginator bind:settings={page} />
		{/if}
	</div>
</div>
