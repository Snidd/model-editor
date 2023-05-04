import { writable } from 'svelte/store';

export type Language = {
	id: string;
	name: string;
};

export const availableLanguages = writable<Language[]>([
	{
		id: 'sv',
		name: 'Swedish'
	},
	{
		id: 'en',
		name: 'English'
	}
]);
