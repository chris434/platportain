<script lang="ts">
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu'
	import Dots from 'svelte-radix/DotsVertical.svelte';
	import Button from '../ui/button/button.svelte';

    export let title:string
</script>

<DropdownMenu.Root closeOnItemClick={false}>
    <DropdownMenu.Trigger asChild let:builder>
      <Button id="toggle-menu"  builders={[builder]} variant="ghost" size="icon"><Dots/></Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-[15%]">
      <DropdownMenu.Label class="text-center">{title}</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group>
       <slot/>
    </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>