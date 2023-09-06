import type { Font } from '$lib/models/Font';
import type { Theme } from '$lib/models/Theme';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const theme = (cookies.get('theme') || 'light') as Theme;
	const font = (cookies.get('font') || 'serif') as Font;

	return {
		theme,
		font
	};
};
