<script lang="ts">
	import { page } from '$app/stores';
	import type { Tab } from '$lib/constants/tabs';

	export let tabs: Tab[];

	function getActiveTab(pageId: string | null): Tab {
		const activeTab = tabs.find((tab) => tab.id === pageId);
		if (activeTab === undefined) return tabs[0];

		return activeTab;
	}

	$: activeTab = getActiveTab($page.route.id);
</script>

<div class="flex flex-col gap-0">
	<div class="tabs">
		{#each tabs as tab}
			<a class="tab tab-lifted -mb-px {activeTab.id === tab.id ? 'tab-active' : ''}" href={tab.href}
				>{tab.name}</a
			>
		{/each}
	</div>
	<div class="border border-gray-200 p-4 rounded-md">
		<slot />
	</div>
</div>
