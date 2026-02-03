import { getProjects } from '$lib/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const projects = await getProjects();

	return {
		projects
	};
};
