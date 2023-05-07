<script lang="ts">
	import TabbedMenu from '$lib/components/TabbedMenu.svelte';
	import { root_tabs } from '$lib/constants/tabs';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<div class="flex p-8 gap-4">
	<TabbedMenu tabs={root_tabs}>CVLs be here!</TabbedMenu>
	<slot />
</div>
