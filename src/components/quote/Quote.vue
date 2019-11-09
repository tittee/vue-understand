<template>
	<div class="quote">
		<div class="title">
			<slot name="title"></slot>
			<b><slot name="subtitle">The Subtitle.</slot></b>
		</div>
		<hr>
		<div class="">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		// props: ['quoute']
	}
</script>

<style scoped>
	.quote{
		border: 1px dotted #000;
	}
	h2{
		color:  red;
	}
	.title{
		font-style: italic;
	}
</style>