import type { Word } from '$lib/models/Word';

export const parseWords = async (response: Response) => {
	try {
		if (!response.ok) {
			return [];
		}

		const res = await response.json();

		return res as Word[];
	} catch (e) {
		return [];
	}
};
