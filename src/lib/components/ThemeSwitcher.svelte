<script lang="ts">
	import DarkModeSwitcher from '$lib/components/DarkModeSwitcher.svelte';
	import FontSwitcher from '$lib/components/FontSwitcher.svelte';
</script>

<div class="theme-switcher">
	<FontSwitcher />

	<div class="separator" />

	<DarkModeSwitcher />
</div>

<style>
	.theme-switcher {
		display: flex;
		align-items: center;
		justify-content: center;
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
