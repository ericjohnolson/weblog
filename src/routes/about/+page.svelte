<svelte:head>
	<title>About Me - My Personal Homepage</title>
</svelte:head>

<div class="about-page">
	<header class="page-header">
		<h1>About Me</h1>
		<p class="text-muted">Welcome to my corner of the web!</p>
	</header>

	<section class="bio-section retro-box border-groove">
		<h2>Who Am I?</h2>
		<p>
			Hello there, fellow netizen! Thanks for stopping by my humble homepage. I'm a [Your Name
			Here], and this is my little piece of internet real estate.
		</p>
		<p>
			I created this site to share my thoughts, projects, and interests with the world. It's a
			throwback to the days when personal websites were all about self-expression and having fun
			online.
		</p>
		<blockquote>
			"The internet used to be a place where you could be yourself. Let's bring that spirit back!"
		</blockquote>
	</section>

	<hr class="retro" />

	<section class="interests-section">
		<h2>My Interests</h2>
		<div class="interests-grid">
			<div class="interest-card retro-box border-raised">
				<h3>Coding</h3>
				<p>Building things for the web is my passion. I love learning new technologies.</p>
			</div>
			<div class="interest-card retro-box border-raised">
				<h3>Music</h3>
				<p>Always listening to something. Check out my favorite tunes!</p>
			</div>
			<div class="interest-card retro-box border-raised">
				<h3>Gaming</h3>
				<p>Retro games, modern games - I appreciate them all.</p>
			</div>
			<div class="interest-card retro-box border-raised">
				<h3>Reading</h3>
				<p>Books, articles, anything that expands the mind.</p>
			</div>
		</div>
	</section>

	<hr class="retro" />

	<section class="fun-facts-section retro-box border-sunken">
		<h2>Fun Facts</h2>
		<ul>
			<li>This site is best viewed with Netscape Navigator 4.0 or higher</li>
			<li>I've been surfing the web since [Year]</li>
			<li>My first email address was at hotmail.com</li>
			<li>I still remember my ICQ number</li>
			<li>You are visitor number <span class="visitor-counter">000042</span> to this page!</li>
		</ul>
	</section>

	<div class="under-construction">
		<span>More content coming soon!</span>
	</div>
</div>

<style>
	.about-page {
		padding: var(--spacing-lg) 0;
	}

	.page-header {
		text-align: center;
		margin-bottom: var(--spacing-xl);
	}

	.page-header h1 {
		margin-top: 0;
		color: #000080;
		text-shadow:
			2px 2px 0 #c0c0c0,
			3px 3px 0 #808080;
	}

	.bio-section {
		background-color: #ffffcc;
	}

	.bio-section h2 {
		margin-top: 0;
		color: #800000;
	}

	.interests-section h2 {
		text-align: center;
		color: #008000;
	}

	.interests-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--spacing-md);
		margin-top: var(--spacing-lg);
	}

	.interest-card {
		text-align: center;
	}

	.interest-card h3 {
		margin-top: 0;
		color: #000080;
		font-size: 1.1rem;
	}

	.interest-card p {
		margin-bottom: 0;
		font-size: 0.9rem;
	}

	.fun-facts-section {
		background-color: #e0e0ff;
	}

	.fun-facts-section h2 {
		margin-top: 0;
		color: #800080;
	}

	.fun-facts-section ul {
		list-style-type: disc;
	}

	.fun-facts-section li {
		margin-bottom: var(--spacing-sm);
	}

	.under-construction {
		margin-top: var(--spacing-xl);
	}
</style>
