<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { Font } from '$lib/models/Font';
	import type { SubmitFunction } from '@sveltejs/kit';

	let form: HTMLFormElement;

	const submitUpdateTheme: SubmitFunction = ({ formData }) => {
		const font = formData.get('font') as Font;

		if (font) {
			document.documentElement.setAttribute('data-font', font);
		}

		return async () => {
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
	>
		<option value="serif" selected={$page.data.font === 'serif'}>Serif</option>
		<option value="system" selected={$page.data.font === 'system'}>System</option>
	</select>
</form>
