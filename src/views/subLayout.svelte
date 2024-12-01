<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
    import Header from '$lib/components/custom/header.svelte';
	import { getTransport } from '../stores/transport';
	import { getLocalTransports } from '../utils/localTransport';

const transport=getTransport()
const {setTransport}=transport

    page.subscribe(({params})=>{
        const { id } = params;
		if($transport.id===id) return
        if(browser) {
		 const selectedTransport=getLocalTransports().find((trolly)=>trolly.id===id)
		if(id&&!selectedTransport) return goto('/')
		if(selectedTransport)setTransport(selectedTransport)
	}
    })

</script>
<div class="h-screen relative">
	<Header/>
	<slot/>
</div>