<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import type { HarEntry } from '$lib/types/HarEntry';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// Function that reads the file from the file input and returns the contents
	function readFile(event: Event) {
		let file = (event.target as HTMLInputElement).files![0];
		if (file instanceof File) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const contents = e.target?.result as string;

				const harData = JSON.parse(contents as string);

				const harEntries = harData.log.entries;

				// If harEntries is > 10 entries, split into equal parts
				// and dispatch each part to the HarResults component
				// to be rendered
				// if (harEntries.length > 10) {
				// 	const harEntriesSplit = harEntries.reduce((resultArray: HarEntry[][], item, index) => {
				// 		const chunkIndex = Math.floor(index / 10);

				// 		if (!resultArray[chunkIndex]) {
				// 			resultArray[chunkIndex] = []; // start a new chunk
				// 		}

				// 		resultArray[chunkIndex].push(item);

				// 		return resultArray;
				// 	}, []);

				// 	harEntriesSplit.forEach((harEntries: HarEntry[]) => {
				// 		dispatch('change', { error: false, entries: harEntries });
				// 	});
				// } else {
				// 	dispatch('change', { error: false, entries: harEntries });
				// }
				dispatch('change', { error: false, entries: harEntries });
			};
			reader.readAsText(file);
		} else {
			dispatch('change', { error: true });
		}
	}
</script>

<form method="POST" enctype="multipart/form-data" use:enhance>
	<!-- ! FIXME: This causes a scrollbar -->
	<div class="container flex mx-auto justify-center items-center flex-col h-screen">
		<FileDropzone name="files" accept=".har" on:change={readFile}>
			<svelte:fragment slot="lead">
				<iconify-icon icon="ic:outline-file-upload" width="32" height="32" class="mb-0" />
			</svelte:fragment>
			<svelte:fragment slot="message"><b>Upload a file</b> or drag and drop</svelte:fragment>
			<svelte:fragment slot="meta">HAR files only - 10 MB size limit</svelte:fragment>
		</FileDropzone>
		{#if !browser}
			<button
				type="submit"
				class="mt-6 p-2 variant-filled-surface rounded-2xl w-24 hover:bg-surface-600 transition-colors"
				>Submit</button
			>
		{/if}
	</div>
</form>
