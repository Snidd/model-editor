import { writable } from 'svelte/store';

export const displayType = writable<'identifiers' | 'names'>('identifiers');
