<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import 'iconify-icon';

	import {
		AppBar,
		AppRail,
		AppRailTile,
		AppShell,
		LightSwitch,
		Toast
	} from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<number | null> = writable(null);
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
				<h1 class="unstyled text-xl font-bold">cHARted</h1>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={storeValue}>
			<!-- Left Sidebar Content -->
			<!-- * Home * -->
			<AppRailTile label="Home" value={0} tag="a" href="/">
				<iconify-icon icon="ic:outline-home" width="32" height="32" />
			</AppRailTile>
			<!-- * Guide * -->
			<AppRailTile label="Guide" value={2} tag="a" href="/guide"
				><iconify-icon icon="solar:book-bookmark-linear" width="32" height="32" /></AppRailTile
			>
		</AppRail>
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
</AppShell>
