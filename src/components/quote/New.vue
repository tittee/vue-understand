<template>
	<div class="new">
		<h2>New Quote</h2>
		<button @click="counter++">Increase!</button>
		<p><u>{{ counter }}</u></p>
	</div>
</template>

<script>		
	export default {
		data: function(){
			return {
				counter: 0
			};
		},
		destroyed() {
			console.log('Destroyed!!');
		},
		deactivated() {
			console.log('Deactivaed');
		},
		activated() {
			console.log('Actived');
		}
	}
</script>

<style scoped>
	
	h2{
		color: purple;
	}
	.title{
		font-style: italic;
	}
</style>