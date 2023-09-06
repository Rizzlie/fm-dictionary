<script lang="ts">
	import { enhance } from '$app/forms';
	import WordsAutocomplete from '$lib/components/WordsAutocomplete.svelte';
	import type { Word } from '$lib/models/Word';
	import type { SubmitFunction } from '@sveltejs/kit';
	import SearchIcon from '$assets/icons/search.svg?component';
	import debounce from 'lodash/debounce';

	let words: Word[] = [];
	let form: HTMLFormElement;

	const submitSearch: SubmitFunction = async () => {
		return async ({ result }) => {
			words = result.data.result;
		};
	};

	const handleInput = debounce((form: HTMLFormElement) => {
		words = [];

		form.dispatchEvent(new Event('submit', { bubbles: true }));
	}, 300);
</script>

<div class="search-bar">
	<form method="POST" action="/search" use:enhance={submitSearch} bind:this={form}>
		<input
			name="word"
			type="text"
			placeholder="Type a word..."
			on:input={() => handleInput(form)}
		/>
		<button type="submit">
			<SearchIcon />
		</button>
	</form>

	<WordsAutocomplete {words} />
</div>

<style>
	.search-bar {
		view-transition-name: search-bar;
		width: 100%;
		position: relative;
	}

	form {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: stretch;
		background-color: var(--bgc-input);
		border-radius: var(--br-input);
		transition: 0.3s ease;
		z-index: 2;
		position: relative;
	}

	form input {
		width: 100%;
		border: none;
		background-color: transparent;
		font-weight: var(--fw-bold);
		font-size: 1.25rem;
		padding: 1rem;
		border-bottom-left-radius: var(--br-input);
		border-top-left-radius: var(--br-input);
		color: var(--ff-primary);
	}

	form button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		border-bottom-right-radius: var(--br-input);
		border-top-right-radius: var(--br-input);
		padding-inline: 1rem;
	}

	form button :global(svg) {
		height: 1rem;
		width: 1rem;
	}

	form button :global(svg path) {
		fill: var(--clr-secondary);
	}
</style>
