<template>
	<el-row class="container" style="padding:0;">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo">
				金银岛煤炭网业务管理系统
			</el-col>
			<el-col :span="14" class="userinfo">
				退出登录
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<el-aside width="100">
				<NavbarItemView :navMenus="navMenus" :collapse="collapse"></NavbarItemView>
				<el-radio-group style="margin-bottom: 20px; position:absolute; bottom:0;left:0;" @change="handleChange">
			        <el-radio-button :label="false">展开</el-radio-button>
			    </el-radio-group>
			</el-aside>
			<el-main class="content-container">
				<div class="grid-content bg-purple-light">
					<router-view></router-view>	
				</div>
			</el-main>
		</el-col>
	</el-row>
</template>

<script>
	import {state} from './../api/menusModule'
	import NavbarItemView from './../components/navbars/NavbarItemView'
	export default {
		name: 'Home',
		data() {
			return {
				msg: 'home',		
				navMenus: state.menus,
				collapse: false
			}
		},
		components: {
			NavbarItemView
		},
		created(){
			console.log(this.navMenus);
		},
		methods: {
			handleChange(){
				this.collapse = !this.collapse;
			}
		}
	}

</script>

<style scoped lang="scss">
	$color-primary: #20a0ff;
	.container {
		position: absolute;
		left:0;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				cursor: pointer;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
			}
		}
		.navbarItem {
		  // width: 240px;
		  height: 90%;
		  overflow-y: auto;
		  overflow-x: hidden;
		}
		.navbarItem::-webkit-scrollbar {
		  height: 6px;
		  width: 6px;
		}
		.navbarItem::-webkit-scrollbar-trac {
		  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}
		.navbarItem::-webkit-scrollbar-thumb {
		  background-color: #6e6e6e;
		  outline: 1px solid #333;
		}
		.navbarItem::-webkit-scrollbar {
		  height: 4px;
		  width: 4px;
		}
		.navbarItem::-webkit-scrollbar-track {
		  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		}
		.navbarItem::-webkit-scrollbar-thumb {
		  background-color: #6e6e6e;
		  outline: 1px solid #708090;
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				// flex:0 0 240px;
				// width: 240px;
				background: #f2f2f2;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
			}
			.el-main{
				padding:0;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				background: #FFF;
				.grid-content{
					-height:3000px;
				}
				.content-wrapper {
					background-color: #FFF;
					box-sizing: border-box;
				}
			}
		}
	}
	@media screen and (max-width: 750px){
		.header {
			display: none;
		}
		.el-aside {
			display: none;
		}
	}
</style>