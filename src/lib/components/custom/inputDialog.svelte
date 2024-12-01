<script lang="ts">
	import Dialog from "$lib/components/custom/dialog.svelte";
	import FormLabel from "$lib/components/custom/formLabel.svelte";
	import Input from "$lib/components/ui/input/input.svelte";

   export let dialogDisabeld:boolean
   export let actionTitle:string
   export let actonOnclick=()=>{}
   export let cancelOnclick=()=>{}
   export let actionDisabeld:boolean
   export let title:string
   export let inputValue:string
   export let inputLabel:string

</script>

<Dialog {dialogDisabeld} {actionTitle} {cancelOnclick} {actonOnclick}{actionDisabeld} {title}>
    <FormLabel slot="content" label={inputLabel} >
    <Input id={inputLabel} bind:value={inputValue} on:input={e=> {
        if(e.currentTarget.value) return actionDisabeld=false
        actionDisabeld=true
    }}/>
    </FormLabel>
   <slot name="footer"/>
   <slot let:builder {builder} slot="button"  name="button"/>
    </Dialog>