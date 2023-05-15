<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	import { BarChart } from 'echarts/charts';
	import * as echarts from 'echarts/core';

	import { GridComponent } from 'echarts/components';
	import { CanvasRenderer } from 'echarts/renderers';
	import { onMount } from 'svelte';

	export let entries: HarEntry[] = [];

	const responseSizeAccumulation: { [resourceType: string]: number } = {};

	// Cumulative size of all resources loaded by resource type
	for (const entry of entries) {
		const { _resourceType, response } = entry;
		// If the resource type is specified (e.g. image, font, etc.) and
		// the response is not empty (e.g. it contains the response body)
		// and the response has a `size` (e.g. it includes the size of the
		// response body in bytes), then:
		if (_resourceType && response && response.content && response.content?.size) {
			// Set the size of this response to a variable
			const size = response.content.size;
			// Add the size of this response to the accumulated size of this resource type
			responseSizeAccumulation[_resourceType] =
				(Number(responseSizeAccumulation[_resourceType]) || 0) + Number(size);
		}
	}

	// console.log(responseSizeAccumulation['document']);

	echarts.use([GridComponent, BarChart, CanvasRenderer]);
	let chartContainer: HTMLDivElement;
	let height = '400px';

	const option = {
		xAxis: {
			type: 'category',
			data: [
				'Document',
				'Stylesheet',
				'Image',
				'Media',
				'Text Track',
				'Event Source',
				'Web Socket',
				'Manifest',
				'Script',
				'Font',
				'Fetch',
				'XHR',
				'Other'
			],
			axisLabel: {
				color: '#ffffff',
				rotate: 45
			}
		},
		yAxis: {
			axisLabel: {
				formatter: '{value} bytes',
				align: 'right',
				color: '#ffffff'
			},
			min: 0,
			scale: true,
			type: 'value',
			name: 'Size (in bytes)'
		},
		label: {
			show: true,
			position: 'top',
			color: '#ffffff'
		},
		series: [
			{
				data: [
					responseSizeAccumulation['document'],
					responseSizeAccumulation['stylesheet'],
					responseSizeAccumulation['image'],
					responseSizeAccumulation['media'],
					responseSizeAccumulation['texttrack'],
					responseSizeAccumulation['eventsource'],
					responseSizeAccumulation['websocket'],
					responseSizeAccumulation['manifest'],
					responseSizeAccumulation['script'],
					responseSizeAccumulation['font'],
					responseSizeAccumulation['fetch'],
					responseSizeAccumulation['xhr'],
					responseSizeAccumulation['other']
				],
				type: 'bar'
			}
		]
	};

	onMount(() => {
		const chart = echarts.init(chartContainer);
		chart.setOption(option);
	});
</script>

<div class="">
	<h1 class="unstyled text-lg font-bold mb-1">Total Sizes of Resource Types</h1>
	<div bind:this={chartContainer} style="width: 100%;" style:height />
</div>
