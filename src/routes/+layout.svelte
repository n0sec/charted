<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppBar, AppRail, AppRailTile, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<number | null> = writable(null);
	export let loggedIn: boolean = false;
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
			<!-- * Dashboard * -->
			{#if loggedIn}
				<AppRailTile label="Dashboard" value={0} tag="a" href="/dashboard"
					><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
						/></svg
					></AppRailTile
				>
			{/if}
			<!-- * Guide * -->
			<AppRailTile label="Guide" value={1} tag="a" href="/guide"
				><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><g fill="none" stroke="currentColor" stroke-width="1.5"
						><path
							d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8Z"
						/><path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" /><path
							stroke-linecap="round"
							d="M8 7h8m-8 3.5h5m6.5 8.5H8"
						/></g
					></svg
				></AppRailTile
			>
			<!-- Profile icon -->
			<!-- ! Only show if logged in ! -->
			<svelte:fragment slot="trail">
				{#if loggedIn}
					<AppRailTile label="Profile" value={2} tag="a" href="/profile">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"
							/></svg
						>
					</AppRailTile>
				{/if}
			</svelte:fragment>
		</AppRail>
	</svelte:fragment>

	<!-- A floating action button in the bottom right -->
	<!-- ? Might not need this ? -->
	<button type="button" class="btn-icon btn-icon-xl variant-filled absolute bottom-6 right-6"
		><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
			><path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z" /></svg
		></button
	>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
