<script lang="ts">
	import type { HarEntry, Timings } from '$lib/types/HarEntry';
	import { BarChart } from 'echarts/charts';
	import { GridComponent } from 'echarts/components';
	import * as echarts from 'echarts/core';
	import { CanvasRenderer } from 'echarts/renderers';
	import { onMount } from 'svelte';

	export let entries: HarEntry[] = [];

	echarts.use([GridComponent, BarChart, CanvasRenderer]);
	let chartContainer: HTMLDivElement;
	let height = '400px';

	const option = {
		xAxis: {
			type: 'category',
			data: ['Blocked', 'Connect', 'DNS', 'Receive', 'Send', 'SSL', 'Wait'],
			axisLabel: {
				color: '#ffffff'
			}
		},
		yAxis: {
			axisLabel: {
				formatter: '{value} ms',
				align: 'right',
				color: '#ffffff'
			},
			min: 0,
			scale: true,
			type: 'value',
			name: 'Response Time (in ms)'
		},
		label: {
			show: true,
			position: 'top',
			color: '#ffffff',
			// Negative values shouldn't be added together, they should just be 0
			formatter: function (params: any) {
				if (params.value < 0) {
					return 0;
				}
				return Math.round((Number(params.value) + Number.EPSILON) * 100) / 100 + ' ms';
			}
		},
		series: [
			{
				data: getTimings(),
				type: 'bar'
			}
		]
	};

	onMount(() => {
		const chart = echarts.init(chartContainer);
		chart.setOption(option);
	});

	function getTimings() {
		const timings = entries
			.flatMap((o) => o.timings!)
			.reduce(
				(acc, obj) => {
					return {
						blocked: acc.blocked! + (obj.blocked ?? 0),
						connect: acc.connect! + (obj.connect ?? 0),
						dns: acc.dns! + (obj.dns ?? 0),
						receive: acc.receive! + (obj.receive ?? 0),
						send: acc.send! + (obj.send ?? 0),
						ssl: acc.ssl! + (obj.ssl ?? 0),
						wait: acc.wait! + (obj.wait ?? 0)
					} as Timings;
				},
				{
					//needs to be in the same order from the xAxis
					blocked: 0,
					connect: 0,
					dns: 0,
					receive: 0,
					send: 0,
					ssl: 0,
					wait: 0
				}
			);
		return Object.values(timings);
	}
</script>

<div class="col-span-2">
	<h1 class="unstyled text-lg font-bold mb-1">Timing Totals by Type</h1>
	<div bind:this={chartContainer} style="width: 100%;" style:height />
</div>
