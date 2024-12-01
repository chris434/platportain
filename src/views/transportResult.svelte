<script lang="ts">
    import { getTransport } from "../stores/transport";

    const TransportResult=getTransport()
</script>
{#if $TransportResult.result}
<div class="w-full flex justify-center">
<div class="border-black border-2 mb-[95px]  flex justify-center w-8/12 mt-10 flex-col">
{#each Object.entries($TransportResult.result) as [key, value],i}
    <div class="{i%2==1?'':''} flex p-5  items-center text-xl w-full {i%2==0?'bg-gray-100':''} ">
        <div class="w-6/12 text-start">
            {key.split(/(?=[A-Z])/).map(char=> char= `${char.charAt(0).toLowerCase()}${char.slice(1)}`).join(' ')}
        </div>
        <div class="w-6/12 text-center">
           {value}
        </div>
    </div>
{/each}
</div>
</div>
{/if}

