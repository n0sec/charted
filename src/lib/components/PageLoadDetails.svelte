<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';
	export let entries: HarEntry[] = [];

	// Function to calculate the page load time by subtracting the first request's start time from the last request's end time
	// Use the ISO 8601 format for dates and times
	// Convert to seconds by dividing by 1000
	// https://en.wikipedia.org/wiki/ISO_8601
	let pageLoadTime =
		(new Date(entries[entries.length - 1].startedDateTime).getTime() -
			new Date(entries[0].startedDateTime).getTime()) /
		1000;

	// Get the number of requests that were from cache that are not undefined
	// Round to 2 decimal places
	let numRequestsFromCache: number | string =
		Math.round(entries.filter((entry) => entry._fromCache !== undefined).length * 100) / 100;

	let percentRequestsFromCache: number = (numRequestsFromCache / entries.length) * 100;
	percentRequestsFromCache = Number(percentRequestsFromCache.toFixed(2));
</script>

<div class="ml-3 font-bold flex flex-col">
	<h1 class="unstyled font-bold text-lg text-white mb-1">Summary</h1>
	<p>
		All requests completed in <span class="dark:text-primary-500">{pageLoadTime}</span> seconds
	</p>
	<p>
		There were a total of <span class="dark:text-primary-500">{entries.length}</span> requests captured
	</p>
	<p>
		<span class="dark:text-primary-500">{percentRequestsFromCache}%</span> of the requests were from
		cache
	</p>
</div>
