<script>
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import Logo from '$assets/icons/dictionary.svg?component';
</script>

<nav class="container">
	<a href="/">
		<Logo />
	</a>

	<ThemeSwitcher />
</nav>

<style>
	nav {
		padding-block: 3rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav a :global(svg) {
		width: 34px;
		height: auto;
	}

	nav a :global(svg path) {
		fill: var(--clr-primary);
	}
</style>
