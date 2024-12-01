<script lang="ts">
     import Pencil from "svelte-radix/Pencil2.svelte";
     import Trash from "svelte-radix/Trash.svelte";
    import DropdownMenu from "$lib/components/custom/dropdownMenu.svelte";
    import ButtonDropDownMenuItem from "$lib/components/custom/buttonDropDownMenuItem.svelte";
	import { page } from "$app/stores";
	import InputDialog from "$lib/components/custom/inputDialog.svelte";
    import DeleteTransport from "./deleteTransport.svelte";
	import { getTransports } from "../stores/transports";
	import { closeElement } from "../utils/element";
    import { shortDate } from "../utils/date";
   
    const {editName,deleteTransport}=getTransports()
    const {id}=$page.params
    export let transportName:string
    export let createdDate:Date
    export let transportId:string
  
   function closeMenu(){
    setTimeout(()=>closeElement('toggle-menu'),100)
   }

    function handleEditName(){
      editName(transportName,transportId)
      closeMenu()
    }
    function handleDeleteTransport(){
        deleteTransport(transportId)
        closeMenu()
    }
$:isId=transportId===id
</script>
<div class="flex gap-5 items-center">
<a href={`/${transportId}`} on:click={()=>closeElement('close-draw')}  class="flex flex-col justify-between w-full p-3 hover:bg-black {isId?'bg-black text-white':''} rounded-xl hover:text-white my-3">
    <h3>name: { transportName }</h3>
    <div>Created: {shortDate(createdDate)}</div>
</a>
{#if !isId}
<DropdownMenu title="Action">
<InputDialog dialogDisabeld={false} actionDisabeld={true} title="Edit name" inputLabel="name" bind:inputValue={transportName} actionTitle="Edit name" actonOnclick={handleEditName} cancelOnclick={closeMenu} >
    <ButtonDropDownMenuItem id="menu-edit"  let:builder {builder} slot="button">
        <svelte:fragment slot="content">
            <Pencil/>
            Edit
        </svelte:fragment>
    </ButtonDropDownMenuItem>
</InputDialog>
<DeleteTransport  {transportName} actonOnclick={handleDeleteTransport} cancelOnclick={closeMenu}>
    <ButtonDropDownMenuItem id="menu-delete" let:builder {builder} slot="button">
        <svelte:fragment slot="content">
            <Trash/>
            Delete
        </svelte:fragment>
    </ButtonDropDownMenuItem>
</DeleteTransport>

</DropdownMenu>
  {/if}
</div>
<hr class="border-2"/>