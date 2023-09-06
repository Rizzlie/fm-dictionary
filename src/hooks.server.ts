import type { Font } from '$lib/models/Font';
import type { Handle } from '@sveltejs/kit';
import type { Theme } from '$lib/models/Theme';

export const handle: Handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('theme') as Theme;
	const font = event.cookies.get('font') as Font;

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html
				.replace('data-theme=""', `data-theme="${theme}"`)
				.replace('data-font=""', `data-font="${font}"`)
	});
};
