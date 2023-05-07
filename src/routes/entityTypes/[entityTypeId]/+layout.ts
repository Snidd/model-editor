import { PUBLIC_API_KEY, PUBLIC_API_URL } from '$env/static/public';

import type { FieldType } from '$lib/types/fieldType';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params, parent }) => {
	const entityTypeFieldsResult = await fetch(
		`${PUBLIC_API_URL}/model/entityTypes/${params.entityTypeId}/fieldtypes`,
		{
			headers: {
				'X-inRiver-APIKey': PUBLIC_API_KEY
			}
		}
	);

	const fieldTypes = (await entityTypeFieldsResult.json()) as FieldType[];
	const parentData = await parent();

	return {
		entityTypes: parentData.entityTypes,
		fieldTypeId: params.fieldTypeId,
		fieldTypes: fieldTypes
	};
};
