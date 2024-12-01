<script lang="ts">
import Dialog from "$lib/components/custom/dialog.svelte";
export let transportName: string 
export let actonOnclick:()=>void
export let cancelOnclick=()=>{}

</script>
<Dialog {cancelOnclick} actionTitle="Delete" title="are you sure you want to delete {transportName}?" {actonOnclick}>
         <svelte:fragment slot="button" let:builder>
          <slot {builder} name="button"/>
         </svelte:fragment>
        <slot slot="footer" name="footer"/>
</Dialog>