import type { EntityType } from '$lib/types/entityType';
import type { LayoutLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import { PUBLIC_API_KEY } from '$env/static/public';

export const load: LayoutLoad = async ({ fetch, params }) => {
	const result = await fetch(`${PUBLIC_API_URL}/model/entityTypes`, {
		headers: {
			'X-inRiver-APIKey': PUBLIC_API_KEY
		}
	});
	const entityTypes = (await result.json()) as EntityType[];

	return {
		entityTypes: entityTypes,
		activeEntityType: params.entityTypeId
	};
};
