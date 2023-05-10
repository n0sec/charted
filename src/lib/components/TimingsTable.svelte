<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	export let entries: HarEntry[] = [];
</script>

<!-- Responsive Container (recommended) -->
<div class="table-container rounded-none col-span-3">
	<h1 class="unstyled text-xl font-bold mb-1">Request Timings</h1>

	<!-- Native Table Element -->
	<table class="table table-hover table-compact rounded-none">
		<thead class="text-sm">
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
				<!-- ? May add this later-->
			</tr>
		</tfoot>
	</table>
</div>
