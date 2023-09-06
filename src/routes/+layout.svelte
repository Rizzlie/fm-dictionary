<script lang="ts">
	import '../app.scss';
	import { onNavigate } from '$app/navigation';
	import Nav from '$lib/components/Nav.svelte';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Nav />

<main class="container">
	<slot />
</main>
