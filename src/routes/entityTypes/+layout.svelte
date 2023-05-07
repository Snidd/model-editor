<script lang="ts">
	import { page } from '$app/stores';
	import ShowName from '$lib/components/ShowName.svelte';

	import type { LayoutData } from './$types';
	export let data: LayoutData;

	function getActiveTab(pageId: string | null): 'entitytypes' | 'cvls' {
		if (pageId == null || pageId.indexOf('/entityTypes') > -1) return 'entitytypes';

		return 'cvls';
	}

	$: activeTab = getActiveTab($page.route.id);

	$: url = $page.url.toString();
</script>

<div class="flex p-8 gap-4">
	<div class="flex flex-col gap-0">
		<div class="tabs">
			<a
				class="tab tab-lifted -mb-px {activeTab === 'entitytypes' ? 'tab-active' : ''}"
				href="/entityTypes">Entity types</a
			>
			<a class="tab tab-lifted -mb-px {activeTab === 'cvls' ? 'tab-active' : ''}" href="/cvls"
				>CVLs</a
			>
			<a class="tab tab-lifted -mb-px" href="/test">none</a>
		</div>
		<div class="border border-gray-200 p-4 rounded-md">
			<div class="flex flex-col gap-3">
				{#each data.entityTypes as entityType}
					{@const isActive = data.activeEntityType == entityType.id}
					<a
						href="/entityTypes/{entityType.id}/fields"
						class="w-72 btn {isActive
							? 'bg-accent'
							: 'bg-base-300'} drop-shadow capitalize border-neutral text-xl"
					>
						<ShowName input={entityType} />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<slot />
</div>
