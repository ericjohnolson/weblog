<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Archive</title>
</svelte:head>

<h1>Archive</h1>

<ul class="archive-list">
	{#each data.posts as post}
		<li class="archive-item">
			<span class="archive-date text-muted text-mono">{post.date.toISOString().split('T')[0]}</span>
			<a href="/posts/{post.slug}">{post.title}</a>
			{#if post.tags.length > 0}
				<span class="archive-tags">
					{#each post.tags as tag, i}
						<a href="/tags/{tag}" class="tag">{tag}</a>{#if i < post.tags.length - 1},{/if}
					{/each}
				</span>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.archive-list {
		list-style: none;
		padding: 0;
		margin: var(--spacing-lg) 0;
	}

	.archive-item {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		align-items: baseline;
		padding: var(--spacing-sm) 0;
		border-bottom: 1px solid var(--color-border-dark);
	}

	.archive-date {
		min-width: 10ch;
	}

	.archive-tags {
		font-size: 0.875rem;
	}

	.archive-tags .tag {
		color: var(--color-text-muted);
	}
</style>
