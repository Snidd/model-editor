import type { EntityType } from '$lib/types/entityType';
import type { FieldType } from '$lib/types/fieldType';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params, parent }) => {
	const entityTypeFieldsResult = await fetch(`/api/fieldTypes/${params.entityTypeId}`);
	const fieldTypes = (await entityTypeFieldsResult.json()) as FieldType[];
	const parentData = await parent();

	return {
		entityTypes: parentData.entityTypes,
		fieldTypes: fieldTypes
	};
};
