<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	export let entries: HarEntry[] = [];

	const source = entries;
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

<Table source={requestedURLTable} />
