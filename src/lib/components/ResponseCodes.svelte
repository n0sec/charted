<script lang="ts">
	import type { HarEntry } from '$lib/types/HarEntry';

	export let entries: HarEntry[] = [];

	let responseCodes = entries.map((entry) => {
		return entry.response?.status;
	});

	let twoHundredResponseCodes = responseCodes.filter((code) => code! >= 200 && code! < 300);
	let threeHundredResponseCodes = responseCodes.filter((code) => code! >= 300 && code! < 400);
	let fourHundredResponseCodes = responseCodes.filter((code) => code! >= 400 && code! < 500);
	let fiveHundredResponseCodes = responseCodes.filter((code) => code! >= 500 && code! < 600);
</script>

<h1 class="unstyled text-lg font-bold mb-1 ml-3">Response Codes</h1>
<div class="grid grid-cols-3 justify-center items-center grid-rows-2 mx-3">
	<h1 class="unstyled text-xl font-bold">200</h1>
	<h1 class="row-start-2 font-bold text-xl">
		{twoHundredResponseCodes.length}
	</h1>

	<h1 class="unstyled text-xl font-bold">300</h1>
	<h1 class="row-start-2 font-bold">{threeHundredResponseCodes.length}</h1>

	<h1 class="unstyled text-xl font-bold">400</h1>
	<h1 class="row-start-2 font-bold">{fourHundredResponseCodes.length}</h1>

	<h1 class="unstyled text-xl font-bold">500</h1>
	<h1 class="row-start-2 font-bold">{fiveHundredResponseCodes.length}</h1>
</div>
