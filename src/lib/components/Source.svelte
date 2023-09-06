<script lang="ts">
	export let source: string;
</script>

<div class="source">
	Source <a
		href={source}
		target="_blank"
		tabindex="0"
		title="Definition source of the word {source}"
	>
		{source}
	</a>
</div>

<style>
	.source {
		color: var(--clr-accent);
		font-size: 0.75rem;
		border-top: 1px solid var(--clr-border);
		padding-block: 1rem;
	}

	.source a {
		margin-left: 1rem;
	}
</style>
