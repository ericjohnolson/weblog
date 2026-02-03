<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function formatDate(date: Date): string {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>ericolson.dev</title>
	<meta name="description" content="Eric Olson's personal website - articles, projects, and more" />
</svelte:head>

<div class="two-column">
	<div class="two-column-main">
		<h1>Recent Posts</h1>

		{#if data.recentPosts.length === 0}
			<p class="text-muted">No posts yet. Check back soon!</p>
		{:else}
			<div class="posts-list">
				{#each data.recentPosts as post}
					<article class="post-preview">
						<header>
							<time class="post-date text-muted text-small" datetime={post.date.toISOString()}>
								{formatDate(post.date)}
							</time>
							<h2 class="post-title">
								<a href="/posts/{post.slug}">{post.title}</a>
							</h2>
						</header>

						{#if post.description}
							<p class="post-description">{post.description}</p>
						{/if}

						{#if post.tags.length > 0}
							<div class="post-tags">
								{#each post.tags as tag}
									<a href="/tags/{tag}" class="tag-link">{tag}</a>
								{/each}
							</div>
						{/if}
					</article>
				{/each}
			</div>
		{/if}
	</div>

	<aside class="two-column-sidebar">
		<section class="sidebar-section">
			<h3>Featured Articles</h3>
			{#if data.featuredPosts.length === 0}
				<p class="text-muted text-small">No featured articles yet.</p>
			{:else}
				<ul class="sidebar-nav">
					{#each data.featuredPosts as post}
						<li>
							<a href="/posts/{post.slug}">{post.title}</a>
						</li>
					{/each}
				</ul>
			{/if}
		</section>

		<section class="sidebar-section">
			<h3>Tags</h3>
			{#if data.tags.length === 0}
				<p class="text-muted text-small">No tags yet.</p>
			{:else}
				<div class="tags-cloud">
					{#each data.tags as tag}
						<a href="/tags/{tag}" class="tag-link">{tag}</a>
					{/each}
				</div>
			{/if}
		</section>
	</aside>
</div>

<style>
	h1 {
		margin-top: 0;
	}

	.posts-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xl);
	}

	.post-preview {
		padding-bottom: var(--spacing-lg);
		border-bottom: 1px solid var(--color-border-dark);
	}

	.post-preview:last-child {
		border-bottom: none;
	}

	.post-date {
		display: block;
		margin-bottom: var(--spacing-xs);
	}

	.post-title {
		font-size: 1.25rem;
		margin-top: 0;
		margin-bottom: var(--spacing-sm);
	}

	.post-title a {
		text-decoration: none;
	}

	.post-title a:hover {
		text-decoration: underline;
	}

	.post-description {
		margin-bottom: var(--spacing-sm);
		color: var(--color-text-muted);
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
	}

	.tag-link {
		font-size: 0.8rem;
		padding: 0.1em 0.5em;
		background-color: var(--color-code-bg);
		border: 1px solid var(--color-code-border);
		text-decoration: none;
	}

	.tag-link:hover {
		background-color: var(--color-border-dark);
		color: white;
	}

	.tags-cloud {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
	}
</style>
