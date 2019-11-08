<template>
	<div class="home">
		<h1>HI Everyone...</h1>
		<app-server-status v-for="server in 5" v-bind:key="server">{{server}}</app-server-status>
	</div>
</template>

<script>
	import StatusServer from './StatusServer.vue'
	var myHome = {
		name: 'Home',
		components: {
			'app-server-status': StatusServer
		}
	}
export default myHome;
</script>

<style>
	
</style>