<script lang="ts">
	import type { Word } from '$lib/models/Word';

	export let words: Word[];
</script>

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

<style>
	ol {
		z-index: 1;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		background-color: var(--bgc-input);
		box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
		border-bottom-left-radius: var(--br-input);
		border-bottom-right-radius: var(--br-input);
		border-top: 1px solid var(--clr-secondary);
	}

	ol::before {
		content: '';
		position: absolute;
		width: 100%;
		height: var(--br-input);
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
