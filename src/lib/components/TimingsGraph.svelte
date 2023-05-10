<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';

	export let entries: HarEntry[] = [];

	import * as echarts from 'echarts/core';
	import { GridComponent } from 'echarts/components';
	import { BarChart } from 'echarts/charts';
	import { CanvasRenderer } from 'echarts/renderers';
	import { onMount } from 'svelte';

	echarts.use([GridComponent, BarChart, CanvasRenderer]);
	let chartContainer: HTMLDivElement;
	let height = '600px';

	const option = {
		xAxis: {
			type: 'category',
			data: ['Blocked', 'Connect', 'DNS', 'Receive', 'Send', 'SSL', 'Wait']
		},
		yAxis: {
			type: 'value'
		},
		series: [
			{
				data: entries.timings,
				type: 'bar'
			}
		]
	};

	onMount(() => {
		const chart = echarts.init(chartContainer);
		chart.setOption(option);
	});
</script>

<div bind:this={chartContainer} style="width: 100%;" style:height />
