<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet";
    import { Button } from "$lib/components/ui/button";

    export let title:string
    export let openId=''
   </script>
    
    <Sheet.Root>
        <Sheet.Trigger asChild let:builder>
          <Button id={openId}  builders={[builder]}>{title}</Button>
        </Sheet.Trigger>
        <Sheet.Content class="w-[20rem]" side="left">
          <Sheet.Header>
            <Sheet.Title class="mb-3">{title}</Sheet.Title>
          </Sheet.Header>
          <slot class="h-full"/>
            <Sheet.Close id="close-draw"/>
        </Sheet.Content>
      </Sheet.Root>