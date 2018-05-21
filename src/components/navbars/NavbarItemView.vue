<template>
	<div class="navbarItem">
		<el-menu default-active="" v-for="item in navMenusList" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse" :key="item.id">
			<el-menu-item index="item.id" v-if="item.type === 'link'" :key="item.id">		    
			    	<i class="el-icon-document"></i>
			    	<span><router-link class="link" :to="item.path">{{item.name}}</router-link></span>			    
			</el-menu-item>
			<el-submenu index="item.id" v-if="item.type === 'button'" :key="item.id">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">{{item.name}}</span>
				</template>
				<NavbarItemView :navMenusList="item.subMenu"></NavbarItemView>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
	
	export default {
		name: 'NavbarItemView', 
  		props: ['navMenusList','collapse'], 
		data(){
			return {
				msg: 'NavbarItemView'
			}
		},
	    methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
	    }
	}
</script>
<style scoped lang="scss">
	.el-menu {
		width: 240px;
	}
	.el-menu.el-menu--collapse {
		width: 64px;
	}
	.el-menu-item a{
		text-decoration: none;
		color: #303133;
	}
</style>