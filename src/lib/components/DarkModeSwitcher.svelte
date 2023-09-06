<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	let form: HTMLFormElement;

	const submitUpdateTheme: SubmitFunction = () => {
		return async ({ result }) => {
			document.documentElement.setAttribute('data-theme', result.data.theme);

			await invalidateAll();
		};
	};
</script>

<form method="POST" bind:this={form} action="/?/setTheme" use:enhance={submitUpdateTheme}>
	<Toggle
		on:change={() => {
			form.requestSubmit();
		}}
		checked={$page.data.theme === 'dark'}
	/>

	<input type="hidden" name="theme" value={$page.data.theme} />
</form>

<style>
	form {
		display: flex;
	}
</style>
