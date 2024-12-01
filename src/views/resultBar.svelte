<script lang="ts">
	import { POT_COVER } from "../data/potCover";
	import { CRATE_POT_Size_KEYS, TRAILER_POT_SIZE_KEYS,TROLLY_POT_SIZE_KEYS } from "../data/potSize";
	import { SHELVES } from "../data/shelves";
	import { getTransport } from "../stores/transport"
	import type { potCover } from "../types/potCover";
    import type {PotSizeTrailer, PotSize as PotSizeType} from '../types/potSize'
	import type { transportTypes } from "../types/transportType";
	import Button from "../lib/components/ui/button/button.svelte";
    import Input from "../lib/components/ui/input/input.svelte";
	import FormLabel from "../lib/components/custom/formLabel.svelte";
	import  Select from "../lib/components/custom/select.svelte";
    import ResetTransport from './resetTransport.svelte'
	import { browser } from "$app/environment";
	import { TRANSPORT_TYPES } from "../data/transportTypes";
    export let resetCall=false
    export  let menuToggle:boolean

    const transport=getTransport()
const {calculate,resetTransport}=transport
 let transportType:transportTypes=$transport.transportType||'trolly'
 let potSize:PotSizeType|PotSizeTrailer=$transport.potSize||transportType==='trolly'?'1ltr':'2ltr'
 let plantQuanity=$transport.plantQuanity||1
 let shelvesPerTrolly=$transport.shelvesPerTrolly||1

   let trollyPotSize=potSize
   let trailerPotSize=transportType!=='trailer'?'2ltr': potSize
   let cratePotSize=transportType!=='wooden create'?'2ltr D':potSize
   let potCover:potCover='barke'

    $: if(resetCall){
        reset()
        resetCall=false
    }
        
    function reset(){
        if(!browser) return
        resetTransport()
        transportType='trolly'
        potSize='1ltr'
        plantQuanity=1
        shelvesPerTrolly=1
        potCover='barke'
    }
    
    function handleSubmit() {
       calculate(plantQuanity,shelvesPerTrolly,transportType,potCover,potSize)
       menuToggle=false
    }

</script>

<form on:submit|preventDefault={handleSubmit} class=" {menuToggle?'flex flex-col':'hidden '} 3sm:flex 3sm:flex-row  space-y-5 space-x-5 w-full  items-end">
    <FormLabel label="plant quanity" let:id>
        <Input on:change={e=> plantQuanity= !e.currentTarget.value?1:plantQuanity} bind:value={plantQuanity} min={1} {id} type="number"/>
    </FormLabel>
    {#key transportType}
    <Select  label="transport type" selectLabel="type" options={TRANSPORT_TYPES} bind:value={transportType} selectedValue={transportType} />
    {/key}

    {#if transportType==='trolly' }
    {#key potSize}
    <Select label="pot size" selectLabel="type" on:change={e=> potSize=e.detail} options={TROLLY_POT_SIZE_KEYS} bind:value={trollyPotSize} selectedValue={trollyPotSize} />
     {/key}
        {:else if transportType=='trailer'}
        {#key potSize}
    <Select label="pot size" selectLabel="type" on:change={e=> potSize=e.detail} options={TRAILER_POT_SIZE_KEYS} bind:value={trailerPotSize} selectedValue={trailerPotSize} />
     {/key}
     {:else }
     {#key potSize}
 <Select label="pot size" selectLabel="type" on:change={e=> potSize=e.detail} options={CRATE_POT_Size_KEYS} bind:value={cratePotSize} selectedValue={cratePotSize} />
  {/key}
    {/if}


{#if transportType==='trolly'}
{#key shelvesPerTrolly}
<Select options={SHELVES} label={'shelves per trolly'} selectLabel="sheleves" selectedValue={shelvesPerTrolly.toString()} bind:value={shelvesPerTrolly}/>
{/key}
{:else if transportType==='trailer'}
{#key potCover}
<Select options={POT_COVER} label={'pot cover type'} selectLabel="type" selectedValue={potCover}  bind:value={potCover}/>
{/key}
{/if}
   
  
    <Button class="w-full 3sm:w-auto" type="submit">Calulate</Button>
    <ResetTransport transportName={$transport.name} actonOnclick={reset}/>
</form>
