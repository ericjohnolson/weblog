<script lang="ts">
	import { onMount } from 'svelte';
	import type { Component } from 'svelte';

	let { data } = $props();

	let PostContent: Component | null = $state(null);

	onMount(async () => {
		const module = await import(`../../../content/posts/${data.slug}.md`);
		PostContent = module.default;
	});

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>{data.post.title}</title>
	{#if data.post.description}
		<meta name="description" content={data.post.description} />
	{/if}
</svelte:head>

<article class="post">
	<header class="post-header">
		<p class="post-date text-muted text-mono">{formatDate(data.post.date)}</p>
		<h1 class="post-title">{data.post.title}</h1>
		{#if data.post.tags.length > 0}
			<div class="post-tags">
				{#each data.post.tags as tag}
					<a href="/tags/{tag}" class="tag">{tag}</a>
				{/each}
			</div>
		{/if}
	</header>

	<div class="post-content">
		{#if PostContent}
			<PostContent />
		{:else}
			<p class="text-muted">Loading content...</p>
		{/if}
	</div>

	<footer class="post-footer">
		<a href="/archive" class="back-link">&larr; Back to Archive</a>
	</footer>
</article>

<style>
	.post {
		max-width: 100%;
	}

	.post-header {
		margin-bottom: var(--spacing-xl);
		padding-bottom: var(--spacing-lg);
		border-bottom: 2px solid var(--color-border-dark);
	}

	.post-date {
		margin-bottom: var(--spacing-sm);
	}

	.post-title {
		margin-top: 0;
		margin-bottom: var(--spacing-md);
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
	}

	.post-tags .tag {
		display: inline-block;
		padding: var(--spacing-xs) var(--spacing-sm);
		background-color: var(--color-code-bg);
		border: 1px solid var(--color-border-dark);
		font-size: 0.875rem;
		text-decoration: none;
	}

	.post-tags .tag:hover {
		background-color: var(--color-border-dark);
		color: white;
	}

	.post-content {
		margin-bottom: var(--spacing-xl);
	}

	.post-footer {
		padding-top: var(--spacing-lg);
		border-top: 2px solid var(--color-border-dark);
	}

	.back-link {
		display: inline-block;
	}
</style>
