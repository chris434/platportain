<script lang="ts">
     import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import { createEventDispatcher } from 'svelte';
     const dispatch = createEventDispatcher();
</script>


<DropdownMenu.Item on:click={()=> dispatch('click')} role="button"  class="flex gap-5">
 <slot/>
</DropdownMenu.Item>