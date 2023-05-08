<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import 'iconify-icon';

	import { AppBar, AppRail, AppRailTile, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<number | null> = writable(null);
	export let loggedIn: boolean = true;
</script>

<svelte:head>
	<title>cHARted</title>
</svelte:head>

<AppShell>
	<svelte:fragment slot="header">
		<!-- AppBar with Light Switch-->
		<AppBar class="w-full">
			<svelte:fragment slot="lead">
				<!-- Logo -->
				<a href="/"><h1 class="unstyled text-xl font-bold">cHARted</h1></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="font-bold">
					<!-- ! Need to fix this later when we add the database and login functionality -->
					{#if loggedIn}
						<a
							href="#"
							class="mr-6"
							on:click={() => {
								loggedIn = false;
							}}>Logout</a
						>
					{:else}
						<a href="/signup" class="mx-6">Sign Up</a>
						<a href="/login" class="mr-6">Login</a>
					{/if}
				</div>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<!-- Left Sidebar Content -->
			<!-- * Upload * -->
			<AppRailTile label="Upload" value={0} tag="a" href="/upload">
				<iconify-icon icon="ic:outline-file-upload" width="32" height="32" />
			</AppRailTile>
			<!-- * Guide * -->
			<AppRailTile label="Guide" value={2} tag="a" href="/guide"
				><iconify-icon icon="solar:book-bookmark-linear" width="32" height="32" /></AppRailTile
			>
			<!-- * Dashboard * -->
			{#if loggedIn}
				<AppRailTile label="Dashboard" value={1} tag="a" href="/dashboard"
					><iconify-icon icon="ic:sharp-space-dashboard" width="32" height="32" /></AppRailTile
				>
			{/if}

			<!-- Profile icon -->
			<!-- ! Only show if logged in ! -->
			<svelte:fragment slot="trail">
				{#if loggedIn}
					<AppRailTile label="Profile" value={3} tag="a" href="/profile">
						<iconify-icon icon="mdi:user-circle" width="32" height="32" />
					</AppRailTile>
				{/if}
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<!-- A floating action button in the bottom right -->
	<!-- ? Might not need this ? -->
	<!-- <button type="button" class="btn-icon btn-icon-xl variant-filled absolute bottom-6 right-6"
		><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" /></svg
		></button
	> -->

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
