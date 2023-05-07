<script lang="ts">
	import { page } from '$app/stores';
	import type { EntityType } from '$lib/types/entityType';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: activeTab = getActiveTab($page.route.id);

	function getActiveTab(pageId: string | null): 'links' | 'fields' {
		if (pageId === '/entityTypes/[entityTypeId]/links') return 'links';

		return 'fields';
	}

	function getLinkCount(entityType: EntityType | undefined): number {
		if (entityType === undefined) {
			return 0;
		}

		let inboundCount = entityType.inboundLinkTypes ? entityType.inboundLinkTypes.length : 0;
		let outbountCount = entityType.outboundLinkTypes ? entityType.outboundLinkTypes.length : 0;

		return inboundCount + outbountCount;
	}

	$: linkCount = getLinkCount(data.entityType);
</script>

<div class="flex flex-col gap-0">
	<div class="tabs">
		<a
			class="tab tab-lifted -mb-px {activeTab === 'fields' ? 'tab-active' : ''}"
			href="/entityTypes/{data.activeEntityType}/fields">{data.fieldTypes.length} Fields</a
		>
		<a
			class="tab tab-lifted -mb-px {activeTab === 'links' ? 'tab-active' : ''}"
			href="/entityTypes/{data.activeEntityType}/links">{linkCount} Links</a
		>
	</div>
	<div class="border border-gray-200 p-4 rounded-md">
		<slot />
	</div>
</div>
