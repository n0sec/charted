<script lang="ts">
	import * as echarts from 'echarts/core';
	import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
	import type {
		TitleComponentOption,
		TooltipComponentOption,
		LegendComponentOption
	} from 'echarts/components';
	import { PieChart, type PieSeriesOption } from 'echarts/charts';
	import { LabelLayout } from 'echarts/features';
	import { CanvasRenderer } from 'echarts/renderers';
	import { onMount } from 'svelte';
	import type { HarEntry } from '$lib/types/HarEntry';

	echarts.use([
		TitleComponent,
		TooltipComponent,
		LegendComponent,
		PieChart,
		CanvasRenderer,
		LabelLayout
	]);

	type EChartsOption = echarts.ComposeOption<
		TitleComponentOption | TooltipComponentOption | LegendComponentOption | PieSeriesOption
	>;

	export let entries: HarEntry[] = [];

	let chartContainer: HTMLDivElement;
	let height = '400px';

	const option: EChartsOption = {
		title: {
			text: 'Response Codes',
			textStyle: {
				color: '#ffffff'
			},
			subtext: 'Total number of response codes',
			subtextStyle: {
				color: '#ffffff'
			},
			left: 'center'
		},
		tooltip: {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			padding: 1,
			textStyle: {
				color: '#ffffff'
			}
		},
		series: [
			{
				name: 'Response Codes',
				type: 'pie',
				radius: '55%',
				center: ['50%', '60%'],
				data: [
					{
						value: entries
							.map((entry) => entry.response?.status)
							.filter((code) => Number(code!) >= 200 && Number(code!) < 300).length,
						name: '200'
					},
					{
						value: entries
							.map((entry) => entry.response?.status)
							.filter((code) => Number(code!) >= 300 && Number(code!) < 400).length,
						name: '300'
					},
					{
						value: entries
							.map((entry) => entry.response?.status)
							.filter((code) => Number(code!) >= 400 && Number(code!) < 500).length,
						name: '400'
					},
					{
						value: entries
							.map((entry) => entry.response?.status)
							.filter((code) => Number(code!) >= 500 && Number(code!) < 600).length,
						name: '500'
					}
				],
				label: {
					show: true,
					color: '#ffffff'
				}
			}
		]
	};

	onMount(() => {
		const chart = echarts.init(chartContainer);
		chart.setOption(option);
	});
</script>

<h1 class="unstyled text-lg font-bold mb-1 ml-3">Response Codes Pie Chart</h1>
<div class="flex justify-center">
	<div bind:this={chartContainer} style="width: 25%;" style:height />
</div>
