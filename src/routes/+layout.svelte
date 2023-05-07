<script>
	import { availableLanguages } from '$lib/stores/availableLanguages';
	import { chosenLanguage } from '$lib/stores/chosenLanguage';
	import { displayType } from '$lib/stores/displayType';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		if ($chosenLanguage == undefined && $availableLanguages && $availableLanguages.length > 0) {
			$chosenLanguage = $availableLanguages[0];
		}
	});
</script>

<div class="flex flex-col">
	<div class="w-full h-12 bg-base-200 border-b border-accent flex gap-2 px-4 items-center">
		<p>Display</p>
		<select
			name="displayNames"
			bind:value={$displayType}
			class="select select-bordered select-sm w-full max-w-[10rem]"
		>
			<option selected value="identifiers">with identifiers</option>
			<option value="names">with names</option>
		</select>

		<p>Current language:</p>
		<select
			name="languages"
			bind:value={$chosenLanguage}
			class="select select-bordered select-sm w-full max-w-[12rem]"
		>
			{#each $availableLanguages as language}
				<option value={language}>{language.name}</option>
			{/each}
		</select>
	</div>
	<slot />
</div>
