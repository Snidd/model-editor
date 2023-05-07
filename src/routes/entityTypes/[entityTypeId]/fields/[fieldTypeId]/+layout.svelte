<script lang="ts">
	import type { LayoutData } from './$types';
	import { displayType } from '$lib/stores/displayType';
	import ShowName from '$lib/components/ShowName.svelte';
	import DataTypeIcon from '$lib/components/DataTypeIcon.svelte';
	import { chosenLanguage } from '$lib/stores/chosenLanguage';
	import { displayLocale } from '$lib/displayNames/displayLocale';
	export let data: LayoutData;

	$: fieldType = data.fieldTypes.find((ft) => ft.id == data.fieldTypeId);
</script>

<div>
	{#if fieldType}
		<div class="w-full p-4 flex gap-4 border-accent border rounded-lg drop-shadow">
			<div class="flex flex-col outline-green-500 gap-2">
				<div class="form-control w-full max-w-xs">
					<label class="label" for="fieldTypeId">
						<span class="label-text font-bold">Identifier</span>
					</label>
					<input
						type="text"
						value={fieldType.id}
						disabled
						name="fieldTypeId"
						placeholder="test"
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="dataType">
						<span class="label-text font-bold">DataType</span>
					</label>
					<label class="input-group">
						<input
							type="text"
							value={fieldType.dataType}
							disabled
							name="dataType"
							placeholder="test"
							class="input input-bordered w-full max-w-xs"
						/>
						<span><DataTypeIcon dataType={fieldType.dataType} /></span>
					</label>
					{#if fieldType.dataType == 'CVL'}
						<label class="label" for="dataType">
							<span class="label-text-alt"
								>CVL: <a
									class="text-blue-800 underline hover:text-blue-400"
									href="/CVL/{fieldType.cvlId}">{fieldType.cvlId}</a
								></span
							>
						</label>
					{/if}
				</div>
			</div>
			<div class="flex flex-col outline-blue-500 gap-2">
				<div class="form-control w-full max-w-xs">
					<label class="label" for="name">
						<span class="label-text font-bold">Name ({$chosenLanguage?.name})</span>
					</label>
					<input
						type="text"
						value={displayLocale(fieldType.name)}
						name="name"
						placeholder=""
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
				<div class="form-control w-full max-w-xs">
					<label class="label" for="description">
						<span class="label-text font-bold">Description ({$chosenLanguage?.name})</span>
					</label>
					<input
						type="text"
						value={displayLocale(fieldType.description)}
						name="description"
						placeholder=""
						class="input input-bordered w-full max-w-xs"
					/>
				</div>
			</div>
		</div>
	{/if}
	<slot />
</div>
