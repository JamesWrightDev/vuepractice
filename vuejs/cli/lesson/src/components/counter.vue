<template>
	<div>
		<h2>The count {{count}} </h2>
		<p>
			<button @click=" count += 200">Click Me to Add 1</button>
		</p>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				count:0
			}
		}
	};
	
</script>
<style>
	
</style>