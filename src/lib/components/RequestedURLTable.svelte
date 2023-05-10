<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	export let entries: HarEntry[] = [];

	const source = entries;
	console.log(source);
	let page = {
		offset: 0,
		limit: 5,
		size: source.length,
		amounts: [5, 10, 25, 50, 100]
	};

	const requestedURLTable: TableSource = {
		head: ['URL', 'Method', 'Status', 'Size', 'Time', 'IP Address'],
		body: tableMapperValues(source, [
			'request.url',
			'request.method',
			'response.status',
			'response.bodySize',
			'time',
			'serverIPAddress'
		])
	};
</script>

<!-- <Table source={requestedURLTable} /> -->

<!-- Responsive Container (recommended) -->
<div class="table-container">
	<!-- Native Table Element -->
	<table class="table table-hover">
		<thead>
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
							{entry.response?.bodySize}
						{:else}
							{entry.request?.bodySize}{/if}</td
					>
					<td>{entry.time}</td>
					<td>{entry.serverIPAddress}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<!-- ? Add Pagination here? -->
		</tfoot>
	</table>
</div>
