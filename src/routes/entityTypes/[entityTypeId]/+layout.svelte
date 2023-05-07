<script lang="ts">
	import DataTypeIcon from '$lib/components/DataTypeIcon.svelte';
	import FieldTypePropertiesIcons from '$lib/components/FieldTypePropertiesIcons.svelte';
	import ShowName from '$lib/components/ShowName.svelte';
	import { displayLocale } from '$lib/displayNames/displayLocale';
	import { chosenLanguage } from '$lib/stores/chosenLanguage';
	import { displayType } from '$lib/stores/displayType';
	import type { FieldType } from '$lib/types/fieldType';
	import type { LayoutData } from './$types';
	import { Skull } from 'lucide-svelte';

	export let data: LayoutData;

	function getAvailableProperties(fieldTypes: FieldType[]): [boolean, boolean, boolean] {
		let hasUnique = false;
		let hasReadonly = false;
		let hasHidden = false;

		fieldTypes.forEach((fieldType) => {
			if (fieldType.isUnique) {
				hasUnique = true;
			}
			if (fieldType.isReadOnly) {
				hasReadonly = true;
			}
			if (fieldType.isHidden) {
				hasHidden = true;
			}
		});

		return [hasHidden, hasReadonly, hasUnique];
	}

	$: [hasHidden, hasReadonly, hasUnique] = getAvailableProperties(data.fieldTypes);
</script>

<div class="">
	<div class="flex flex-col gap-2">
		{#each data.fieldTypes as fieldType, index}
			{@const isActive = data.fieldTypeId == fieldType.id}
			<a
				href="/entityTypes/{data.activeEntityType}/{fieldType.id}"
				class="btn btn-sm flex gap-2 {isActive
					? 'bg-accent'
					: 'bg-base-300'} min-w-[20rem] drop-shadow capitalize border-neutral justify-start"
			>
				<p class="flex gap-1">
					<FieldTypePropertiesIcons {hasHidden} {hasReadonly} {hasUnique} {fieldType} /><ShowName
						input={fieldType}
					/>
				</p>
				<p class="grow text-right"><DataTypeIcon dataType={fieldType.dataType} /></p>
			</a>
		{/each}
	</div>
</div>

<slot />
