import { error } from '@sveltejs/kit';
import { getProjectWithComponent } from '$lib/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const project = await getProjectWithComponent(params.slug);

	if (!project) {
		throw error(404, {
			message: 'Project not found'
		});
	}

	return {
		project
	};
};
