<script lang="ts">
	import DataTypeIcon from '$lib/components/DataTypeIcon.svelte';
	import FieldTypePropertiesIcons from '$lib/components/FieldTypePropertiesIcons.svelte';
	import { showName } from '$lib/displayNames/showName';
	import { chosenLanguage } from '$lib/stores/chosenLanguage';
	import { displayType } from '$lib/stores/displayType';
	import type { LayoutData } from './$types';
	import { Skull } from 'lucide-svelte';

	export let data: LayoutData;
</script>

<div class="">
	<div class="flex flex-col gap-2">
		{#each data.fieldTypes as fieldType, index}
			{@const isActive = data.fieldTypeId == fieldType.id}
			<a
				href="/entityTypes/Item/{fieldType.id}"
				class="btn btn-sm flex gap-2 {isActive
					? 'bg-accent'
					: 'bg-base-300'} drop-shadow capitalize border-neutral justify-start"
			>
				<p class="flex gap-1">
					<FieldTypePropertiesIcons {fieldType} />{showName(
						fieldType,
						$displayType,
						$chosenLanguage,
						fieldType.id
					)}
				</p>
				<p class="grow text-right"><DataTypeIcon dataType={fieldType.dataType} /></p>
			</a>
		{/each}
	</div>
</div>

<slot />
