<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import Dialog from "$lib/components/custom/dialog.svelte";
	import FormLabel from "$lib/components/custom/formLabel.svelte";
	import Checkbox from "$lib/components/ui/checkbox/checkbox.svelte";
	import Input from "$lib/components/ui/input/input.svelte";
	import Label from "$lib/components/ui/label/label.svelte";
	import { getTransport } from "../stores/transport"
	import { getTransports } from "../stores/transports";
	import { createTransport } from "../utils/createTransport";
	import { closeElement } from "../utils/element";
    
    export let idPage=false
    export let isNew=false
    export let gotoPage=false
    let actionDisabeld= true
    let saveValue:string
  
    const transport=getTransport()
    const {createNewTransport}=getTransports()
    const {setTransport}=transport

     function disableActon(){
        actionDisabeld=true
        saveValue=''
    }

    function saveTransport(){
        if(!$transport) return
        const newId=crypto.randomUUID()
        const id =$page.params.id
         
         const newTransport=isNew||id? createTransport(saveValue):null
        const transport=newTransport?newTransport:{...$transport,id:newId,name:saveValue}
        disableActon()
        setTransport(newTransport?newTransport:transport)
        createNewTransport(newTransport?newTransport:transport)
        if(gotoPage||isNew||id) goto(`/${$transport.id}`)
        if(isNew) closeElement('close-draw')
    }

</script>

<Dialog dialogDisabeld={isNew?false:!$transport.result&&!$page.params.id?true:false} actionTitle={$page.params.id||!!idPage?'create':'save'}  cancelOnclick={disableActon} actonOnclick={saveTransport} {actionDisabeld} title="{$page.params.id?'Create new':'Save'} transport">
    <FormLabel slot="content" label="name" >
    <Input id="name" bind:value={saveValue} on:input={e=> {
        if(e.currentTarget.value) return actionDisabeld=false
        actionDisabeld=true
    }}/>
    </FormLabel>
    <div class="flex items-center gap-2" slot="footer">
        {#if !isNew&&!$page.params.id}
        <Checkbox bind:checked={gotoPage} />
        <Label>save and go to page</Label>
        {/if}
    </div>
    </Dialog>