import { getPosts, getFeaturedPosts, getAllTags } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [posts, featuredPosts, tags] = await Promise.all([
		getPosts(),
		getFeaturedPosts(),
		getAllTags()
	]);

	// Get the 10 most recent posts for the homepage
	const recentPosts = posts.slice(0, 10);

	return {
		recentPosts,
		featuredPosts,
		tags
	};
};
