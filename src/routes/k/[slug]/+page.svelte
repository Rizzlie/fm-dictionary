<script lang="ts">
	import { page } from '$app/stores';
	import Meaning from '$lib/components/Meaning.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import Source from '$lib/components/Source.svelte';
	import Word from '$lib/components/Word.svelte';
</script>

<div class="bar">
	<SearchBar />
</div>

<Word word={$page.data.word} />

{#each $page.data.word.meanings as meaning}
	<Meaning {meaning} />
{/each}

<Source source={$page.data.word.sourceUrls[0]} />

<style>
	.bar {
		margin-bottom: 2rem;
	}
</style>
