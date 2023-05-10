<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	export let entries: HarEntry[] = [];
</script>

<!-- Responsive Container (recommended) -->
<div class="table-container text-sm">
	<h1 class="unstyled text-xl font-bold ml-6">Request Timings</h1>

	<!-- Native Table Element -->
	<table class="table table-hover table-compact">
		<thead>
			<tr>
				<th>URL</th>
				<th>Blocked</th>
				<th>Connect</th>
				<th>DNS</th>
				<th>Receive</th>
				<th>Send</th>
				<th>SSL</th>
				<th>Wait</th>
			</tr>
		</thead>
		<tbody>
			{#each entries as entry}
				<tr>
					<td>{entry.request?.url}</td>
					<td>{Math.round((Number(entry.timings?.blocked) + Number.EPSILON) * 100) / 100}</td>
					<td>{Math.round((Number(entry.timings?.connect) + Number.EPSILON) * 100) / 100}</td>
					<td>{Math.round((Number(entry.timings?.dns) + Number.EPSILON) * 100) / 100}</td>
					<td>{Math.round((Number(entry.timings?.receive) + Number.EPSILON) * 100) / 100}</td>
					<td>{Math.round((Number(entry.timings?.send) + Number.EPSILON) * 100) / 100}</td>
					<td>{Math.round((Number(entry.timings?.ssl) + Number.EPSILON) * 100) / 100}</td>
					<td>{Math.round((Number(entry.timings?.wait) + Number.EPSILON) * 100) / 100}</td>
				</tr>
			{/each}
		</tbody>
		<tfoot>
			<tr>
				<th colspan="3" />
			</tr>
		</tfoot>
	</table>
</div>
