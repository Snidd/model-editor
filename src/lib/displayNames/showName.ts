import type { Language } from '$lib/stores/availableLanguages';
import type { EntityType } from '$lib/types/entityType';
import type { FieldType } from '$lib/types/fieldType';

export const showName = (
	input: EntityType | FieldType,
	displayType: 'identifiers' | 'names',
	currentLanguage: Language,
	fallback: string
): string => {
	const resulting_fallback = `[${fallback}]`;
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

	if (Object.hasOwn(input.name, currentLanguage.id)) {
		let val = input.name[currentLanguage.id];
		if (val !== null) {
			return val;
		}
	}

	return resulting_fallback;
};
