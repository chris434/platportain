<script lang="ts">
	import { page } from "$app/stores";
	import Draw from "$lib/components/custom/draw.svelte";
	import type { Transport as TransportType } from "../types/transport"
	import Create from "./create.svelte";
	import Transport from "./transport.svelte";
	import { afterUpdate } from "svelte";
	import { getTransports } from "../stores/transports";
	import { closeElement } from "../utils/element";
    const transports=getTransports()
    const {refresh}=transports

   $:state=$page.state as TransportType[]|object
	afterUpdate(()=>{
      if(Array.isArray(state)){
            closeElement('open-transports')
            refresh(state as TransportType[])
            state={}
        }
	})
</script>

<Draw title="transports" openId="open-transports">
    <div class='h-full '>
        <div class="flex justify-end">
            <Create idPage isNew  />
        </div>
        <div class="overflow-scroll h-[90%]">
        {#each $transports  as {name,createdDate,id}}
<Transport transportName={name} {createdDate} transportId={id}/>
{/each}
</div>
    </div>
</Draw>
  
