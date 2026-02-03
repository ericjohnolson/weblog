<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.project.title} - Projects</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

<article class="project-detail">
	<header class="project-header">
		<nav class="breadcrumb">
			<a href="/projects">&larr; Back to Projects</a>
		</nav>
		<h1>{data.project.title}</h1>
		<p class="project-description text-muted">{data.project.description}</p>
		<nav class="project-links nav-bracketed">
			<a href={data.project.url} target="_blank" rel="noopener noreferrer">Source Code</a>
			{#if data.project.demo}
				<a href={data.project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
			{/if}
		</nav>
	</header>

	<hr class="retro" />

	<div class="project-content prose">
		<data.project.component />
	</div>
</article>

<style>
	.project-detail {
		max-width: 65ch;
		margin: 0 auto;
	}

	.project-header {
		margin-bottom: var(--spacing-lg);
	}

	.breadcrumb {
		margin-bottom: var(--spacing-md);
	}

	.breadcrumb a {
		text-decoration: none;
		color: var(--color-text-muted);
	}

	.breadcrumb a:hover {
		text-decoration: underline;
		color: var(--color-link);
	}

	.project-header h1 {
		margin-top: 0;
		margin-bottom: var(--spacing-sm);
	}

	.project-description {
		margin-bottom: var(--spacing-md);
		font-size: 1.125rem;
	}

	.project-links {
		margin: 0;
		padding: 0;
	}

	.project-content {
		margin-top: var(--spacing-lg);
	}
</style>
