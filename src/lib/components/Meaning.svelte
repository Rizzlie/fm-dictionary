<script lang="ts">
	import type { Meaning } from '$lib/models/Word';

	export let meaning: Meaning;
</script>

<div>
	<h4>{meaning.partOfSpeech}</h4>
	<p>Meaning</p>
	<ul>
		{#each meaning.definitions as definition}
			<li>{definition.definition}</li>
		{/each}
	</ul>

	{#if meaning.synonyms.length > 0}
		<p>
			Synonyms

			<span>
				{#each meaning.synonyms as synonym, index}
					{synonym + (index === meaning.synonyms.length - 1 ? '' : ', ')}
				{/each}
			</span>
		</p>
	{/if}
</div>

<style>
	h4 {
		font-family: var(--ff-accent);
		font-size: 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block: 1rem;
	}

	h4::after {
		content: '';
		opacity: 0.5;
		flex: 1;
		margin-left: 2rem;
		height: 1px;
		background-color: var(--clr-border);
	}

	ul {
		list-style-position: inside;
		margin-bottom: 3.5rem;
		padding-inline: 1rem;
	}

	ul li {
		margin-block: 0.25rem;
	}

	p {
		font-size: 1rem;
		font-weight: var(--fw-semi-bold);
		color: var(--clr-accent);
		margin-bottom: 1rem;
	}

	p span {
		color: var(--clr-secondary);
		font-weight: var(--fw-semi-bold);
		margin-left: 1rem;
	}
</style>
