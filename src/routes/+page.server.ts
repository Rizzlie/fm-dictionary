import { error } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	setTheme: async ({ cookies, request }) => {
		const formData = await request.formData();

		const theme = formData.get('theme') as string;

		if (!theme) {
			throw error(400, 'theme is required');
		}

		const newTheme = theme === 'dark' ? 'light' : 'dark';

		cookies.set('theme', newTheme, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		});

		return { theme: newTheme };
	},
	setFont: async ({ cookies, request }) => {
		const formData = await request.formData();

		const font = formData.get('font') as string;

		if (!font) {
			throw error(400, 'font is required');
		}

		cookies.set('font', font, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365
		});

		return { font };
	}
};
