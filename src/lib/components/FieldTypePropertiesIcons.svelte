<script lang="ts">
	import type { FieldType } from '$lib/types/fieldType';

	export let fieldType: FieldType;

	import { EyeOff } from 'lucide-svelte';
	import { Lock } from 'lucide-svelte';
	import { Asterisk } from 'lucide-svelte';

	const iconClasses = 'h-4';
</script>

{#if fieldType.isHidden}
	<EyeOff class={iconClasses} />
{:else}
	<EyeOff class="{iconClasses} invisible" />
{/if}
{#if fieldType.isReadOnly}
	<Lock class={iconClasses} />
{:else}
	<Lock class="{iconClasses} invisible" />
{/if}
{#if fieldType.isUnique}
	<Asterisk class={iconClasses} />
{:else}
	<Asterisk class="{iconClasses} invisible" />
{/if}
