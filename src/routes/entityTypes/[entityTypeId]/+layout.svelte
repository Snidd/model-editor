<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<div class="">
	<table class="table table-compact w-full">
		<thead>
			<tr>
				<th>ID</th>
				<th>Category</th>
				<th>DataType</th>
				<th>CVL Id?</th>
			</tr>
		</thead>
		<tbody>
			{#each data.fieldTypes as fieldType}
				<tr>
					<td>{fieldType.id}</td>
					<td>{fieldType.categoryId}</td>
					<td>{fieldType.dataType}</td>
					<td>{fieldType.cvlId}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
<slot />
