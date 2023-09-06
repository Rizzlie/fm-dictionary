import type { Handle } from '@sveltejs/kit';
import type { Theme } from '$lib/models/Theme';

export const handle: Handle = async ({ event, resolve }) => {
	let theme: Theme;

	const newTheme = event.url.searchParams.get('theme') as Theme;
	const cookieTheme = event.cookies.get('theme') as Theme;

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	} else {
		theme = 'light';
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});
};
