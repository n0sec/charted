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
		AppRailAnchor,
		AppRailTile,
		AppShell,
		LightSwitch
	} from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { page } from '$app/stores';

	const storeValue: Writable<number | null> = writable(0);
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
		<AppRail
			selected={storeValue}
			class="border-r dark:border-surface-500/50"
			background="bg-surface-900-token"
		>
			<!-- Left Sidebar Content -->
			<!-- * Home * -->
			<AppRailAnchor title="Home" href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">
					<iconify-icon icon="ic:outline-home" width="32" height="32" />
				</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
			<!-- * Guide * -->
			<AppRailAnchor title="Guide" href="/guide" selected={$page.url.pathname === '/guide'}>
				<svelte:fragment slot="lead"
					><iconify-icon icon="solar:book-bookmark-linear" width="32" height="32" />
				</svelte:fragment>
				<span>Guide</span>
			</AppRailAnchor>
		</AppRail>
	</svelte:fragment>

	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><PageFooter /></svelte:fragment>
</AppShell>
