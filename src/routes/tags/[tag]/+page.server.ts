import { getPosts } from '$lib/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const tag = params.tag;
	const allPosts = await getPosts();

	const posts = allPosts.filter((post) => post.tags.includes(tag));

	return {
		tag,
		posts
	};
};
