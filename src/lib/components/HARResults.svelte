<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import FourHundredCodeDetails from './FourHundredCodeDetails.svelte';
	import FiveHundredCodeDetails from './FiveHundredCodeDetails.svelte';
	import RequestedUrlTable from './RequestedURLTable.svelte';
	import ResponseCodes from './ResponseCodes.svelte';
	import ResponseCodesPieChart from './ResponseCodesPieChart.svelte';
	import TimingsGraph from './TimingsGraph.svelte';
	import TimingsTable from './TimingsTable.svelte';
	import PageLoadDetails from './PageLoadDetails.svelte';
	import ThreeHundredCodeDetails from './ThreeHundredCodeDetails.svelte';
	import ResourceTypeTable from './ResourceTypeTable.svelte';
	import ResourceTypeBarGraph from './ResourceTypeBarGraph.svelte';
	export let entries: HarEntry[] = [];
</script>

<div class="mx-6 mt-6 space-y-5">
	<PageLoadDetails {entries} />
	<ResponseCodes {entries} />
	<ResponseCodesPieChart {entries} />
	{#if entries.filter((code) => Number(code.response?.status) >= 300 && Number(code.response?.status) < 400).length > 0}
		<ThreeHundredCodeDetails {entries} />
	{/if}
	{#if entries.filter((code) => Number(code.response?.status) >= 400 && Number(code.response?.status) < 500).length > 0}
		<FourHundredCodeDetails {entries} />
	{/if}
	{#if entries.filter((code) => Number(code.response?.status) >= 500 && Number(code.response?.status) < 600).length > 0}
		<FiveHundredCodeDetails {entries} />
	{/if}
	<RequestedUrlTable {entries} />
	<div class="grid grid-cols-2 grid-rows-1">
		<ResourceTypeBarGraph {entries} />
		<ResourceTypeTable {entries} />
	</div>
	<div class="grid grid-cols-5 gap-x-10">
		<TimingsTable {entries} />
		<TimingsGraph {entries} />
	</div>
</div>
