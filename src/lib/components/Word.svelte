<script lang="ts">
	import type { Word } from '$lib/models/Word';

	export let word: Word;
</script>

<h2 class="word">
	{word.word}
</h2>
<p class="phonetic">
	{word.phonetic}
</p>

<style>
	.word {
		font-size: 3rem;
		font-weight: var(--fw-bold);
	}

	.phonetic {
		color: var(--clr-secondary);
		font-family: system-ui;
		font-size: 1.25rem;
	}
</style>
