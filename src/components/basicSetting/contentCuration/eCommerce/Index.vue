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
				msg: '电商资讯维护-button'
			}
		}
	}
</script>
<style>
	
</style>