import { writable } from 'svelte/store';
import type { Language } from './availableLanguages';

export const chosenLanguage = writable<Language>();
