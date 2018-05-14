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
				msg: '系统开闭市维护-button'
			}
		}
	}
</script>
<style>
	
</style>