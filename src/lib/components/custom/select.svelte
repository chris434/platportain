<script lang="ts">
	import FormLabel from "./formLabel.svelte";
    import * as Select  from "../ui/select";
	import { createEventDispatcher } from "svelte";
	import type { Selected } from "bits-ui";
    
    export let selectedValue:string
    export let options: readonly unknown[]
    export let value:string|number
    export let label:string
    export let selectLabel:string
    let selected={value:selectedValue,label:selectedValue}
    const dispatch= createEventDispatcher()
    function changeHandler(selectedValue:Selected<string>|undefined){
      value=selectedValue?.value||'1ltr' 
      console.log(value)
      dispatch('change',selectedValue?.value||'1ltr' )}
</script>
<FormLabel {label} let:id>

    <Select.Root  {selected} onSelectedChange={changeHandler }  >
<Select.Trigger {id}>
    <Select.Value />
</Select.Trigger>
<Select.Content>
    <Select.Group>
      <Select.Label>{selectLabel}</Select.Label>
      {#each options as option}
        <Select.Item value={option} label={selectLabel}
          >{option}</Select.Item
        >
      {/each}
    </Select.Group>
  </Select.Content>
  <Select.Input name="favoriteFruit" />
    </Select.Root>
</FormLabel>