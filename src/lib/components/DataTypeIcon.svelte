<script lang="ts">
	export let dataType: string | null | undefined;

	import { List } from 'lucide-svelte';
	import { CaseSensitive } from 'lucide-svelte';
	import { Hash } from 'lucide-svelte';
	import { Binary } from 'lucide-svelte';
	import { Globe2 } from 'lucide-svelte';
	import { CalendarClock } from 'lucide-svelte';

	const iconClasses = 'h-6';
</script>

<div class="flex justify-end">
	{#if dataType}
		{#if dataType == 'CVL'}
			<List class={iconClasses} />
		{:else if dataType == 'String'}
			<CaseSensitive class={iconClasses} />
		{:else if dataType == 'Integer'}
			<Hash class={iconClasses} />
		{:else if dataType == 'Double'}
			<Binary class={iconClasses} />
		{:else if dataType == 'LocaleString'}
			<Globe2 class={iconClasses} />
		{:else if dataType == 'DateTime'}
			<CalendarClock class={iconClasses} />
		{:else}
			<p>{dataType}</p>
		{/if}
	{/if}
</div>
