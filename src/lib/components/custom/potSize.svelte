<script lang="ts">
	import FormLabel from "./formLabel.svelte";
    import * as Select  from "../ui/select";
    import {POT_Size_KEYS} from "../../../data/potSize";
     import type {PotSize} from '../../../types/potSize'
    const fistPotSize=POT_Size_KEYS[0]
    let selected={value:fistPotSize,label:fistPotSize}
    export let potSize:PotSize
</script>
<FormLabel label="pot size" let:id>
    <Select.Root  {selected} onSelectedChange={selectedValue=> potSize=selectedValue?.value||'1ltr' }  >
<Select.Trigger {id}>
    <Select.Value />
</Select.Trigger>
<Select.Content>
    <Select.Group>
      <Select.Label>sizes</Select.Label>
      {#each POT_Size_KEYS as size}
        <Select.Item value={size} label={size}
          >{size}</Select.Item
        >
      {/each}
    </Select.Group>
  </Select.Content>
  <Select.Input name="favoriteFruit" />
    </Select.Root>
</FormLabel>