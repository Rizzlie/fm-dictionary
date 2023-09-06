import { parseWords } from '$lib/utils/parse-words';
import { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		const searchWord = data.get('word');

		if (!searchWord) {
			return {
				result: []
			};
		}

		const words = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + searchWord);

		const result = await parseWords(words);

		return {
			result
		};
	}
};
