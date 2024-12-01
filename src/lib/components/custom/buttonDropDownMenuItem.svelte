<script lang="ts">
	import { closeElement } from "../../../utils/element";
import Button from "../ui/button/button.svelte";
import DropdownMenuItem from "./dropdownMenuItem.svelte";
export let builder:any
export let id:string
</script>
<DropdownMenuItem on:click={()=> closeElement(id)}>
    <Button {id} variant="ghost" builders={[builder]}>
        <slot name="content"/>
    </Button>
</DropdownMenuItem>
