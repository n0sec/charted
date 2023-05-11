<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	export let entries: HarEntry[] = [];

	const sourceData = [
		entries.map((entry) => entry.request?.url),
		entries.map((entry) => entry.request?.method),
		entries.map((entry) => entry.response?.status),
		entries.map((entry) =>
			entry.request?.method == 'GET'
				? Math.round((Number(entry.response?.bodySize) + Number.EPSILON) * 100) / 100
				: Math.round((Number(entry.request?.bodySize) + Number.EPSILON) * 100) / 100
		),
		entries.map((entry) => Math.round((Number(entry.time) + Number.EPSILON) * 100) / 100),
		entries.map((entry) => entry.serverIPAddress)
	];

	const requestTable: TableSource = {
		head: ['URL', 'Method', 'Status', 'Size', 'Time', 'Server IP Address'],
		body: tableMapperValues(sourceData, [
			'url',
			'method',
			'status',
			'size',
			'time',
			'serverIPAddress'
		]),
		foot: []
	};
</script>

<Table source={requestTable} />

<!-- <div class="table-container rounded-none">
	<h1 class="unstyled text-xl font-bold mb-1">Request Data with Response Times</h1>
	<table class="table table-hover table-compact rounded-none">
		<thead class="text-sm">
			<tr>
				<th>URL</th>
				<th>Method</th>
				<th>Status</th>
				<th>Size</th>
				<th>Time</th>
				<th>Server IP Address</th>
			</tr>
		</thead>
		<tbody>
			{#each entries as entry}
				<tr>
					<td>{entry.request?.url}</td>
					<td>{entry.request?.method}</td>
					<td>{entry.response?.status}</td>
					<td
						>{#if entry.request?.method == 'GET'}
							{Math.round((Number(entry.response?.bodySize) + Number.EPSILON) * 100) / 100}
						{:else}
							{Math.round((Number(entry.request?.bodySize) + Number.EPSILON) * 100) / 100}{/if}</td
					>
					<td>{Math.round((Number(entry.time) + Number.EPSILON) * 100) / 100}</td>
					<td>{entry.serverIPAddress}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot />
	</table>
</div> -->
