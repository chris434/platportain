<script lang="ts">
	import { page } from "$app/stores";
	import { HamburgerMenu, Trash } from "svelte-radix";
	import { getTransport } from "../../../stores/transport"
	import Button from "../ui/button/button.svelte";
import Input from "../ui/input/input.svelte";
	import FormLabel from "./formLabel.svelte";
	import { goto } from "$app/navigation";
	import ResultBar from "../../../views/resultBar.svelte";
	import { getLocalTransports, setLocalTransports } from "../../../utils/localTransport";
	import DeleteTransport from "../../../views/deleteTransport.svelte";

    const transport=getTransport()
const {editName}=transport
    let menuToggle=true
    let resetCall=false
    let screenWidth=0
$:id =$page.params.id
$:id,menuToggle=true
    let name:string|null=$transport.name

    function handleDeleteTransport(){
 
     const transports=getLocalTransports()
    const newTransports= transports.filter(transport=>{
        if(transport.id!==id) return transport
    })
   setLocalTransports(newTransports)
    goto('/',{state:newTransports})
    resetCall=true
    }
</script>

<header class="p-5 sticky w-full backdrop-blur-md top-0 shadow-2xl ">
    <div class="flex space-x-7 items-center flex-col 3sm:flex-row">
        <h1 class="text-2xl ml-5">Plantportation</h1>
        <Button on:click={()=>menuToggle=!menuToggle} class="text-2xl absolute block 3sm:hidden top-4 bg-transparent right-2" size="icon" variant="ghost">
         <HamburgerMenu/>
        </Button>
    {#if id}
    <div class="flex flex-col 3sm:flex-row gap-3 w-full justify-between items-center">
        <FormLabel label="name" let:id>
            <Input on:change={e=>editName(e.currentTarget.value)} {id} value={$transport.name} class="w-full 3sm:w-6/12"/>
        </FormLabel>
        <DeleteTransport actonOnclick={handleDeleteTransport} transportName={name||''}>
            <Button let:builder builders={[builder]}  slot="button">
                <Trash/>
                <div class="ml-1">
                    Delete
                </div>
              
            </Button>
        </DeleteTransport>
          
       
    </div>
      
        {/if}
    </div>
{#if menuToggle|| screenWidth>510}
<ResultBar bind:menuToggle bind:resetCall/> 
{/if}
   
    
    </header>
    <svelte:window bind:outerWidth={screenWidth} />