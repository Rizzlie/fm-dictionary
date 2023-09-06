import { parseWords } from '$lib/utils/parse-words';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
	const words = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + params.slug);

	const result = await parseWords(words);

	if (result.length === 0) {
		throw error(404, 'Word not found');
	}

	return {
		word: result[0]
	};
};
