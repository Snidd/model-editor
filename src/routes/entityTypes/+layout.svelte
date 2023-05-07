<script lang="ts">
	import ShowName from '$lib/components/ShowName.svelte';
	import TabbedMenu from '$lib/components/TabbedMenu.svelte';
	import { root_tabs } from '$lib/constants/tabs';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<div class="flex p-8 gap-4">
	<TabbedMenu tabs={root_tabs}>
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
	</TabbedMenu>
	<slot />
</div>
