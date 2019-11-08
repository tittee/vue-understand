<template>
	<div class="status-server">
		<p>Server Status : {{status}}</p>
		<hr>
		<button @click="changeStatus">Change Status</button>
	</div>
</template>

<script>
	var myStatus = {
		name: 'StatusServer',
		data: function() {
			return {
				status : 'Critical',
			}
		},
		methods: {
			changeStatus(){
				this.status = "Normal"
			}
		}	
	}
export default myStatus;
</script>

<style>
	
</style>