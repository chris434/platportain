<script lang="ts">
	import '../app.css';
	import { setTransport } from '../stores/transport';
	import SubLayout from '../views/subLayout.svelte';

	import TransportsLayout from '../views/transportsLayout.svelte';
	
	setTransport()
	

</script>

	<SubLayout>
		<slot/>
		<TransportsLayout/>
	</SubLayout>