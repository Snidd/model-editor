<script lang="ts">
	import type { Language } from '$lib/stores/availableLanguages';
	import { chosenLanguage } from '$lib/stores/chosenLanguage';
	import { displayType } from '$lib/stores/displayType';
	import type { EntityType } from '$lib/types/entityType';
	import type { FieldType } from '$lib/types/fieldType';

	export let input: FieldType | EntityType | undefined;

	const showName = (
		input: EntityType | FieldType | undefined,
		displayType: 'identifiers' | 'names',
		currentLanguage: Language
	): string => {
		if (input == undefined) return `[undefined]`;

		const resulting_fallback = `[${input.id}]`;
		if (displayType == 'identifiers') {
			return input.id;
		}

		if (input.name === undefined) {
			return resulting_fallback;
		}

		if (input.name === null) {
			return resulting_fallback;
		}

		if (typeof input.name === 'string') {
			return input.name;
		}

		if (Object.hasOwn(input.name, currentLanguage?.id)) {
			let val = input.name[currentLanguage.id];
			if (val !== null) {
				return val;
			}
		}

		return resulting_fallback;
	};

	$: name = showName(input, $displayType, $chosenLanguage);
</script>

<span>{name}</span>
