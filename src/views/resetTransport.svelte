<script lang="ts">
import Dialog from "$lib/components/custom/dialog.svelte";
import Button from "$lib/components/ui/button/button.svelte";
export let transportName: string 
export let actonOnclick:()=>void
</script>
<Dialog buttonTitle="Reset"  actionTitle="Reset" title="are you sure you want to reset {transportName}?" {actonOnclick}>
    <Button let:builder builders={[builder]} slot="button" class="w-full 3sm:w-auto">Reset</Button>
</Dialog>