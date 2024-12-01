<script lang="ts">
	import Label from "../ui/label/label.svelte";
export let label:string
</script>
<div class="w-full">
    <Label class="mb-2" for={label}>{label}</Label>
    <slot id={label}/>
</div>