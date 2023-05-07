import type { Language } from '$lib/stores/availableLanguages';
import { chosenLanguage } from '$lib/stores/chosenLanguage';
import type { EntityType } from '$lib/types/entityType';
import type { FieldType } from '$lib/types/fieldType';
import { get } from 'svelte/store';

export const displayLocale = (
	input: string | Record<string, string | null> | null | undefined
): string => {
	const currentLanguage = get(chosenLanguage);

	if (input === undefined) {
		return '';
	}

	if (input === null) {
		return '';
	}

	if (typeof input === 'string') {
		return input;
	}

	if (Object.hasOwn(input, currentLanguage?.id)) {
		let val = input[currentLanguage.id];
		if (val !== null) {
			return val;
		}
	}

	return '';
};
