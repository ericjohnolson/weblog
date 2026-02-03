<svelte:head>
	<title>Contact Me | Eric Olson</title>
	<meta name="description" content="Get in touch with Eric Olson - email, social links, and more" />
</svelte:head>

<div class="contact-page">
	<h1>Contact Me</h1>

	<div class="contact-intro border-groove retro-box">
		<p>
			<strong>Thanks for visiting!</strong> I'd love to hear from you. Whether you want to chat about
			technology, collaborate on a project, or just say hello, feel free to reach out through any of
			the channels below.
		</p>
	</div>

	<hr class="retro" />

	<section class="contact-section">
		<h2>Email</h2>
		<p class="email-block">
			<span class="email-icon">&#9993;</span>
			<a href="mailto:your@email.com" class="email-link-text">your@email.com</a>
		</p>
		<p class="text-muted text-small">
			* I try to respond within 24-48 hours. If you don't hear back, try again or reach out on social media!
		</p>
	</section>

	<hr class="retro" />

	<section class="contact-section">
		<h2>Find Me Online</h2>
		<div class="social-links">
			<div class="social-item border-raised">
				<span class="social-icon">&#128187;</span>
				<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
				<span class="text-muted text-small">- code & projects</span>
			</div>
			<div class="social-item border-raised">
				<span class="social-icon">&#128038;</span>
				<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
					Twitter/X
				</a>
				<span class="text-muted text-small">- thoughts & links</span>
			</div>
			<div class="social-item border-raised">
				<span class="social-icon">&#128100;</span>
				<a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
					LinkedIn
				</a>
				<span class="text-muted text-small">- professional stuff</span>
			</div>
			<div class="social-item border-raised">
				<span class="social-icon">&#128247;</span>
				<a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
					Instagram
				</a>
				<span class="text-muted text-small">- photos & life</span>
			</div>
		</div>
	</section>

	<hr class="retro" />

	<section class="guestbook-section border-double retro-box">
		<h2>Sign My Guestbook!</h2>
		<p>
			Remember guestbooks? Those glorious pages where visitors could leave their mark for all eternity
			(or until the Angelfire server went down)?
		</p>
		<p>
			While I don't have a functional guestbook <em>yet</em>, I'm keeping the dream alive.
			In the meantime, feel free to email me your thoughts - I promise to read every one!
		</p>
		<p class="text-center">
			<span class="badge-new">Coming Soon</span>
			<span class="text-muted">- Guestbook 2.0</span>
		</p>
	</section>

	<div class="visitor-note text-center mt-xl">
		<p class="text-mono text-small">
			You are visitor #<span class="visitor-counter">007</span> to this page!
		</p>
		<p class="text-muted text-small">
			(This counter is 100% authentic and definitely not hardcoded)
		</p>
	</div>
</div>

<style>
	.contact-page {
		padding: var(--spacing-lg) 0;
	}

	.contact-page h1 {
		text-align: center;
		font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif;
		color: #000080;
		text-shadow: 2px 2px 0 #c0c0c0;
	}

	.contact-intro {
		background-color: #ffffcc;
		text-align: center;
	}

	.contact-intro p {
		margin: 0;
	}

	.contact-section {
		margin: var(--spacing-xl) 0;
	}

	.contact-section h2 {
		color: #800000;
		border-bottom: 2px dotted #808080;
		padding-bottom: var(--spacing-sm);
	}

	/* Email styling */
	.email-block {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		font-size: 1.25rem;
		padding: var(--spacing-md);
		background: linear-gradient(90deg, #e0e0e0 0%, transparent 100%);
		border-left: 4px solid #000080;
	}

	.email-icon {
		font-size: 1.5rem;
	}

	.email-link-text {
		font-family: var(--font-mono);
		font-weight: bold;
	}

	/* Social links grid */
	.social-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: var(--spacing-md);
		margin-top: var(--spacing-md);
	}

	.social-item {
		padding: var(--spacing-md);
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		transition: transform 0.1s ease;
	}

	.social-item:hover {
		transform: translateY(-2px);
	}

	.social-icon {
		font-size: 1.5rem;
	}

	/* Guestbook section */
	.guestbook-section {
		background: linear-gradient(180deg, #e8e8ff 0%, #ffffff 100%);
		text-align: center;
	}

	.guestbook-section h2 {
		color: #800080;
		margin-top: 0;
		border-bottom: none;
	}

	/* Visitor counter styling */
	.visitor-note {
		padding: var(--spacing-lg);
	}

	/* Responsive */
	@media (max-width: 600px) {
		.social-links {
			grid-template-columns: 1fr;
		}

		.email-block {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
