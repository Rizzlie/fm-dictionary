<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	let form: HTMLFormElement;

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		if (action.searchParams.get('theme')) {
			document.documentElement.setAttribute('data-theme', action.searchParams.get('theme'));
		}

		return async () => {
			await invalidateAll();
		};
	};
</script>

<form
	method="POST"
	bind:this={form}
	action="/?/setTheme&theme={`${$page.data.theme === 'dark' ? 'light' : 'dark'}&redirectTo=${
		$page.url.pathname
	}`}"
	use:enhance={submitUpdateTheme}
>
	<Toggle
		on:change={() => {
			form.requestSubmit();
		}}
		checked={$page.data.theme === 'dark'}
	/>
</form>

<style>
	form {
		display: flex;
	}
</style>
