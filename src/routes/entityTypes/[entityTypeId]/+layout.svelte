<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: activeTab = getActiveTab($page.route.id);

	function getActiveTab(pageId: string | null): 'links' | 'fields' {
		if (pageId === '/entityTypes/[entityTypeId]/links') return 'links';

		return 'fields';
	}
</script>

<div class="flex flex-col gap-0">
	<div class="tabs">
		<a
			class="tab {activeTab === 'fields' ? 'tab-active' : ''}"
			href="/entityTypes/{data.activeEntityType}/fields">Fields</a
		>
		<a
			class="tab {activeTab === 'links' ? 'tab-active' : ''}"
			href="/entityTypes/{data.activeEntityType}/links">Links</a
		>
	</div>
	<div class="border border-gray-200 p-4 rounded-md">
		<slot />
	</div>
</div>
