<template>
	<div class="backstage">
		<h5>{{msg}}</h5>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'Index',
		data(){
			return {
				msg: '订单管理-button'
			}
		}
	}
</script>
<style>
	
</style>