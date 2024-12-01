<script lang="ts">
	import { setTransports } from "../stores/transports";
	import Create from "./create.svelte";
	import Transports from "./transports.svelte";
setTransports()
</script>
<div class="fixed bottom-0 right-0 backdrop-blur-md flex space-x-5  p-3 pt-10  w-full">
    <Transports/>
	<Create />

</div>
