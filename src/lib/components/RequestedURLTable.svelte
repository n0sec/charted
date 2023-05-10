<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	export let entries: HarEntry[] = [];
</script>

<!-- Responsive Container (recommended) -->
<div class="table-container rounded-none">
	<h1 class="unstyled text-xl font-bold mb-1">Request Data with Response Times</h1>
	<!-- Native Table Element -->
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
		<tfoot>
			<!-- ? Add Pagination here? -->
		</tfoot>
	</table>
</div>
