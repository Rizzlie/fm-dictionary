<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { SubmitFunction } from '@sveltejs/kit';

	let form: HTMLFormElement;

	const submitUpdateTheme: SubmitFunction = () => {
		return async ({ result }) => {
			document.documentElement.setAttribute('data-font', result.data.font);

			await invalidateAll();
		};
	};
</script>

<form method="POST" bind:this={form} action="/?/setFont" use:enhance={submitUpdateTheme}>
	<select
		name="font"
		on:change={() => {
			form.requestSubmit();
		}}
		bind:value={$page.data.font}
	>
		<option value="serif">Serif</option>
		<option value="system">System</option>
	</select>
</form>
