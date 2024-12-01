<script lang="ts">
      import * as AlertDialog from "$lib/components/ui/alert-dialog";
	import Button from "../ui/button/button.svelte";
    export let title:string
    export let actionDisabeld=false
    export let dialogDisabeld=false
    export let actionTitle:String
    export let buttonTitle=title
    export let actonOnclick=()=>{}
    export let cancelOnclick=()=>{}

  </script>
   
   <AlertDialog.Root>
    <AlertDialog.Trigger asChild let:builder>
      {@const button=$$slots.button}

      {#if button}
      <slot {builder}  name="button"/>
      {:else}
      <Button  disabled={dialogDisabeld} builders={[builder]}>
        {buttonTitle}
      </Button>
      {/if}
    </AlertDialog.Trigger>
    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>{title}</AlertDialog.Title>
      </AlertDialog.Header>
      <slot name="content"/>
      <AlertDialog.Footer >
        <div class="flex space-x-5">
          <AlertDialog.Action on:click={actonOnclick} disabled={actionDisabeld}>{actionTitle}</AlertDialog.Action>
           <AlertDialog.Cancel asChild let:builder>
            <Button on:click={cancelOnclick}  builders={[builder]}>cancel</Button>
          </AlertDialog.Cancel>
        </div>
      </AlertDialog.Footer>
      <slot name="footer"/>
    </AlertDialog.Content>
  </AlertDialog.Root>