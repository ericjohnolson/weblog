<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects</title>
	<meta name="description" content="A collection of my projects and work" />
</svelte:head>

<div class="page-header">
	<h1>Projects</h1>
	<p class="text-muted">A collection of my work and side projects</p>
</div>

<div class="projects-list">
	{#each data.projects as project}
		<article class="project-card border-ridge retro-box">
			<h2 class="project-title">
				<a href="/projects/{project.slug}">{project.title}</a>
			</h2>
			<p class="project-description">{project.description}</p>
			<nav class="project-links nav-bracketed">
				<a href={project.url} target="_blank" rel="noopener noreferrer">Source Code</a>
				{#if project.demo}
					<a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
				{/if}
			</nav>
		</article>
	{:else}
		<p class="text-muted text-center">No projects found.</p>
	{/each}
</div>

<style>
	.projects-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.project-card {
		background-color: rgba(0, 0, 0, 0.02);
	}

	.project-title {
		margin-top: 0;
		margin-bottom: var(--spacing-sm);
		font-size: 1.375rem;
	}

	.project-title a {
		text-decoration: none;
	}

	.project-title a:hover {
		text-decoration: underline;
	}

	.project-description {
		margin-bottom: var(--spacing-md);
		color: var(--color-text-muted);
	}

	.project-links {
		margin: 0;
		padding: 0;
	}
</style>
