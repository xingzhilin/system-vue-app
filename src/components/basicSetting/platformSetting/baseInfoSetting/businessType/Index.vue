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
				msg: '业务类型设置333'
			}
		}
	}
</script>
<style>
	
</style>