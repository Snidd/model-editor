import type { EntityType } from '$lib/types/entityType';
import type { FieldType } from '$lib/types/fieldType';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, parent }) => {
	const parentData = await parent();

	return {
		entityTypes: parentData.entityTypes,
		fieldTypes: parentData.fieldTypes,
		fieldTypeId: params.fieldTypeId,
		entityTypeId: params.entityTypeId
	};
};
