<template>
	<div id="add">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="add_wrap">
			<table class="add_table">
				<tbody>
					<tr>
						<td width="110"><span class="zl_required">*</span>交割库名称：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td>交割库所在港口：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>交割库所在区：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>交割库所在省市：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td>交割库详细地址：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>仓库类型：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td>货场：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td>堆位名称：</td>
						<td>{{viewData.name}}</td>
					</tr> 
					<tr>
						<td>港杂费汽运：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td>港杂费火运：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td><span class="zl_required">*</span>前台是否展示：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td class="td_text"><span class="zl_required">*</span>是否交付地：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td class="td_text"><span class="zl_required">*</span>是否电厂交付地：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td class="td_text"><span class="zl_required">*</span>交割库图片：</td>
						<td>
							<ul>
								<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
								<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
								<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
							</ul>
						</td>
					</tr>
					<tr>
						<td class="td_text">交割库简介：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td>停/启用状态：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td class="td_text">联系人：</td>
						<td>{{viewData.name}}</td>
					</tr>
					<tr>
						<td class="td_text">联系电话：</td>
						<td>{{viewData.name}}</td>
					</tr>
				
				</tbody>
			</table>
			<el-footer>
				<el-button @click="handleGoBack()">取消</el-button>
			</el-footer>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg: '交割库查看',
				id:this.$route.params.id,
				viewData: {
					name: '曹妃甸'
				}
			}
		},

		/*created(){
			//let  formDatas = this.$router.query.formData;
			//console.log(formDatas);
			// eventBus.$on('my-event', (data) => {
	  //           console.log('data:'+ data)
	  //       })
	  //       
		},
		*/
		created(){
			/*axios.get('https://wd4810782647owgprx.wilddogio.com/blogs/' + this.id + '.json')
				 .then( res => {
				 	console.log(res);
				 	this.blog = res.data
				 })*/
		},
		methods:{
			handleGoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang="scss">
	.zl_required{
		color: red;
	}
	.add_table{
		width: 90%;
		margin: 30px auto;
		font-size:12px;
	}
</style>