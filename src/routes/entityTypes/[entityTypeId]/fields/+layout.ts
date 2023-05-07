import { PUBLIC_API_KEY, PUBLIC_API_URL } from '$env/static/public';

import type { FieldType } from '$lib/types/fieldType';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params, parent }) => {
	const parentData = await parent();
	const fieldTypes = parentData.fieldTypes;

	return {
		entityTypes: parentData.entityTypes,
		fieldTypeId: params.fieldTypeId,
		fieldTypes: fieldTypes
	};
};
