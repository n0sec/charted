<script lang="ts">
	import 'iconify-icon';
	import Upload from '$lib/components/Upload.svelte';
	import HarResults from '$lib/components/HARResults.svelte';
	import type { HarEntry } from '$lib/types/HarEntry';

	let uploadError: boolean;
	let errorMessage: string;
	let entries: HarEntry[] | undefined;

	function onUpload(event: CustomEvent) {
		uploadError = event.detail.error;
		entries = event.detail.entries;
		errorMessage = event.detail.message;

		console.log(entries);
	}
</script>

{#if !entries && !uploadError}
	<Upload on:change={onUpload} />
{:else if uploadError}
	<div class="container mx-auto h-screen flex flex-col justify-center items-center">
		<aside class="alert variant-filled-error">
			<div class="alert-message">
				<h6 class="font-bold">Error!</h6>
				<p>{errorMessage}</p>
			</div>
			<div class="alert-actions">
				<button class="btn variant-filled" on:click={() => (uploadError = false)}
					><iconify-icon icon="material-symbols:close" width="24" height="24" /></button
				>
			</div>
		</aside>
	</div>
{:else}
	<div class="mb-3">
		<HarResults {entries} />
	</div>
{/if}
