import type { EntityType } from '$lib/types/entityType';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, params }) => {
	const result = await fetch('/api/entityTypes');
	const entityTypes = (await result.json()) as EntityType[];

	return {
		entityTypes: entityTypes,
		activeEntityType: params.entityTypeId
	};
};
