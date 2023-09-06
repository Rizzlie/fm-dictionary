<script lang="ts">
	import { enhance } from '$app/forms';
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

	{#if words.length > 0}
		<ol role="list">
			{#each words as word}
				<li>
					<a href={`/k/${word.word}`} tabindex="0">
						{word.word}
					</a>
				</li>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.search-bar {
		--_border-radius: 1rem;
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
		border-radius: var(--_border-radius);
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
		border-bottom-left-radius: var(--_border-radius);
		border-top-left-radius: var(--_border-radius);
		color: var(--ff-primary);
	}

	form button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		border-bottom-right-radius: var(--_border-radius);
		border-top-right-radius: var(--_border-radius);
		padding-inline: 1rem;
	}

	form button :global(svg) {
		height: 1rem;
		width: 1rem;
	}

	form button :global(svg path) {
		fill: var(--clr-secondary);
	}

	ol {
		z-index: 1;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: var(--bgc-input);
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
		border-bottom-left-radius: var(--_border-radius);
		border-bottom-right-radius: var(--_border-radius);
		border-top: 1px solid var(--clr-secondary);
	}

	ol::before {
		content: '';
		position: absolute;
		width: 100%;
		height: var(--_border-radius);
		transform: translateY(calc(-100% - 1px));
		background-color: var(--bgc-input);
	}

	ol a {
		padding: 1rem;
		display: block;
		text-decoration: none;
	}

	ol a:hover {
		text-decoration: underline;
	}
</style>
