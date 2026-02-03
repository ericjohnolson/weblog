<script lang="ts">
	const navItems = [
		{ icon: '/icons/home.svg', label: 'Home', href: '/' },
		{ icon: '/icons/about.svg', label: 'About', href: '/about' },
		{ icon: '/icons/archive.svg', label: 'Archive', href: '/archive' },
		{ icon: '/icons/projects.svg', label: 'Projects', href: '/projects' },
		{ icon: '/icons/contact.svg', label: 'Contact', href: '/contact' }
	];
</script>

<header>
	<div class="header-inner">
		<nav class="icon-nav">
			{#each navItems as item}
				<a href={item.href} class="nav-item">
					<img src={item.icon} alt="" class="nav-icon" />
					<span class="nav-label">{item.label}</span>
				</a>
			{/each}
		</nav>
	</div>
	<div class="rainbow-bar"></div>
</header>

<style>
	header {
		background: linear-gradient(180deg, #c0c0c0 0%, #e0e0e0 50%, #c0c0c0 100%);
		border-bottom: 3px ridge #808080;
		margin-bottom: 1rem;
	}

	.header-inner {
		max-width: var(--container-max, 960px);
		margin: 0 auto;
		padding: 1rem;
	}

	.icon-nav {
		display: flex;
		justify-content: center;
		align-items: flex-end;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		padding: 0.5rem;
		border: 2px solid transparent;
		border-radius: 4px;
		transition: all 0.1s ease;
	}

	.nav-item:hover {
		background-color: rgba(255, 255, 255, 0.5);
		border: 2px solid;
		border-color: #ffffff #808080 #808080 #ffffff;
	}

	.nav-item:active {
		border-color: #808080 #ffffff #ffffff #808080;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.nav-icon {
		width: 48px;
		height: 48px;
		margin-bottom: 0.25rem;
	}

	.nav-label {
		font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif;
		font-size: 0.85rem;
		font-weight: bold;
		color: #000080;
		text-shadow: 1px 1px 0 #ffffff;
	}

	.nav-item:visited .nav-label {
		color: #000080;
	}

	/* Classic rainbow divider bar */
	.rainbow-bar {
		height: 6px;
		background: linear-gradient(
			90deg,
			#ff0000 0%,
			#ff8000 16.66%,
			#ffff00 33.33%,
			#00ff00 50%,
			#0080ff 66.66%,
			#8000ff 83.33%,
			#ff0080 100%
		);
	}

	/* Responsive adjustments */
	@media (max-width: 480px) {
		.icon-nav {
			gap: 0.75rem;
		}

		.nav-icon {
			width: 36px;
			height: 36px;
		}

		.nav-label {
			font-size: 0.75rem;
		}
	}
</style>
