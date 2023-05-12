<script lang="ts">
	import 'iconify-icon';
	import Upload from '$lib/components/Upload.svelte';
	import HarResults from '$lib/components/HARResults.svelte';
	import type { HarEntry } from '$lib/types/HarEntry';

	let uploadError: boolean;
	let entries: HarEntry[] | undefined;

	function onUpload(event: CustomEvent) {
		uploadError = event.detail.error;
		entries = event.detail.entries;

		console.log(entries);
	}
</script>

{#if !entries}
	<Upload on:change={onUpload} />
{:else if uploadError}
	<div class="container mx-auto flex flex-col justify-center items-center">
		<aside class="alert variant-filled-error">
			<div class="alert-message">
				<h6 class="font-bold">Error!</h6>
				<p>Something went wrong, please try again.</p>
			</div>
		</aside>
	</div>
{:else}
	<div class="mb-3">
		<HarResults {entries} />
	</div>
{/if}
