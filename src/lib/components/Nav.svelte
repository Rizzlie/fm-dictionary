<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import Logo from '$assets/icons/dictionary.svg?component';
</script>

<nav class="container">
	<a href="/">
		<Logo />
	</a>

	<div>
		<select>
			<option>Serif</option>
			<option>System</option>
		</select>

		<div class="separator" />

		<ThemeSwitcher />
	</div>
</nav>

<style>
	nav {
		padding-block: 3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav > div {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	nav a :global(svg) {
		width: 34px;
		height: auto;
	}

	nav a :global(svg path) {
		fill: var(--clr-primary);
	}

	.separator {
		width: 1px;
		background-color: var(--clr-primary);
		margin-inline: 2rem;
		align-self: stretch;
		opacity: 0.6;
		transition: 0.3s ease;
	}
</style>
