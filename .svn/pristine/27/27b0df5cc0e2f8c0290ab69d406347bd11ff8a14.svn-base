<template>
	<div class="navbarItem">		
		<el-menu default-active="" v-for="menu in navMenus" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse" :key="menu.id">
			<el-menu-item index="menu.id" v-if="menu.type === 'link'" :key="menu.id">		    
			    	<i class="el-icon-document"></i>
			    	<span><router-link class="link" :to="menu.url">{{menu.name}}</router-link></span>			    
			</el-menu-item>
			<el-submenu index="menu.id" v-if="menu.type === 'button'" :key="menu.id">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span slot="title">{{menu.name}}</span>
				</template>
				<NavbarItemView :navMenus="menu.subMenu"></NavbarItemView>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
	
	export default {
		name: 'NavbarItemView', 
  		props: ['navMenus','collapse'], 
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