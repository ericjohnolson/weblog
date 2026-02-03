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
	<title>Posts tagged: {data.tag} | ericolson.dev</title>
	<meta name="description" content="Posts tagged with {data.tag}" />
</svelte:head>

<div class="tag-page">
	<header class="tag-header">
		<h1>Posts tagged: {data.tag}</h1>
		<p class="text-muted">{data.posts.length} post{data.posts.length === 1 ? '' : 's'}</p>
	</header>

	{#if data.posts.length === 0}
		<p class="text-muted">No posts found with this tag.</p>
	{:else}
		<div class="posts-list">
			{#each data.posts as post}
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
								<a href="/tags/{tag}" class="tag-link" class:active={tag === data.tag}>{tag}</a>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{/if}

	<nav class="back-link">
		<a href="/">&larr; Back to home</a>
	</nav>
</div>

<style>
	.tag-page {
		max-width: 48rem;
	}

	.tag-header {
		margin-bottom: var(--spacing-xl);
	}

	.tag-header h1 {
		margin-top: 0;
		margin-bottom: var(--spacing-xs);
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

	.tag-link.active {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
	}

	.back-link {
		margin-top: var(--spacing-xl);
		padding-top: var(--spacing-lg);
		border-top: 1px solid var(--color-border-dark);
	}
</style>
