import { writable } from 'svelte/store';

export type Language = {
	id: string;
	name: string;
};

export const availableLanguages = writable<Language[]>([
	{
		id: 'en',
		name: 'English'
	},
	{
		id: 'sv',
		name: 'Swedish'
	}
]);
