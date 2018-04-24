<template>
	<div id="add">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="form" :model="form" label-width="80px">
			<div class="add_wrap" v-show="isStep1">
				<table class="add_table">
					<tbody>
						<tr>
							<td width="110"><span class="zl_required">*</span>交割库名称：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td><span class="zl_required">*</span>交割库编码：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td>交割库所在港口：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td><span class="zl_required">*</span>交割库所在区：</td>
							<td>
								<el-select v-model="form.region" placeholder="请选择">
							      <el-option label="北方港" value="shanghai"></el-option>
							      <el-option label="南方港" value="beijing"></el-option>
							    </el-select>
							</td>
						</tr>
						<tr>
							<td><span class="zl_required">*</span>交割库所在省市：</td>
							<td>
								<el-select v-model="form.region" placeholder="省">
							      <el-option label="北方港" value="shanghai"></el-option>
							      <el-option label="南方港" value="beijing"></el-option>
							    </el-select>
								<el-select v-model="form.region" placeholder="市">
							      <el-option label="北方港" value="shanghai"></el-option>
							      <el-option label="南方港" value="beijing"></el-option>
							    </el-select>
							</td>
						</tr>
						<tr>
							<td>交割库详细地址：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td><span class="zl_required">*</span>仓库类型：</td>
							<td>
								<el-select v-model="form.region" placeholder="请选择">
							      <el-option label="111" value="shanghai"></el-option>
							      <el-option label="2222" value="beijing"></el-option>
							    </el-select>
							</td>
						</tr>
						<tr>
							<td>货场：</td>
							<td><span>天津1号</span><span>录入堆位</span></td>
						</tr> 
						<tr>
							<td colspan="2"><span>添加</span></td>
						</tr>
						<tr>
							<td>堆位名称：</td>
							<td>
								<p>天津2号 -》天津2号1堆；天津2号2堆；天津3号3堆</p>
							</td>
						</tr> 
						<tr>
							<td>港杂费汽运：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td>港杂费火运：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td><span class="zl_required">*</span>前台是否展示：</td>
							<td>
								<el-radio-group v-model="form.resource">
							      <el-radio label="是"></el-radio>
							      <el-radio label="否"></el-radio>
							    </el-radio-group>
							</td>
						</tr>
						<tr>
							<td class="td_text"><span class="zl_required">*</span>是否交付地：</td>
							<td>
								<el-radio-group v-model="form.resource">
							      <el-radio label="是"></el-radio>
							      <el-radio label="否"></el-radio>
							    </el-radio-group>
							</td>
						</tr>
						<tr>
							<td class="td_text"><span class="zl_required">*</span>是否电厂交付地：</td>
							<td>
								<el-radio-group v-model="form.resource">
							      <el-radio label="是"></el-radio>
							      <el-radio label="否"></el-radio>
							    </el-radio-group>
							</td>
						</tr>
						<tr>
							<td class="td_text"><span class="zl_required">*</span>交割库图片：</td>
							<td>
								<ul>
									<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
									<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
									<li><img src="./../../../../../assets/img/nb-login-bj.png" height="100" width="100" alt=""></li>
								</ul>
								<div class="btn">
									<span>+添加</span>
								</div>
							</td>
						</tr>
						<tr>
							<td class="td_text">交割库简介：</td>
							<td>							
								<el-input type="textarea" v-model="form.desc"></el-input>
							</td>
						</tr>
						<tr>
							<td>停/启用状态：</td>
							<td class="td_text">
								<el-radio-group v-model="form.resource">
							      <el-radio label="启用"></el-radio>
							      <el-radio label="停用"></el-radio>
							    </el-radio-group>
							</td>
						</tr>
						<tr>
							<td class="td_text">联系人：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td class="td_text">联系电话：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
					
					</tbody>
				</table>
				<el-form-item>
				    <el-button type="primary" @click="handleGotoStep2('form')">下一步</el-button>
				    <el-button @click="handleGoBack('form')">取消</el-button>
				</el-form-item>

			</div>
			<div class="add_wrap" v-show="isStep2">
				<table class="add_table">
					<tbody>
						<tr>
							<td width="110"><span class="zl_required">*</span>交割库名称：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td width="110"><span class="zl_required">*</span>交割库名称：</td>
							<td><el-input v-model="form.name"></el-input></td>
						</tr>
						<tr>
							<td colspan="2"><span>+添加收费</span></td>
						</tr>
					</tbody>
				</table>
				<el-form-item>
				    <el-button type="primary" @click="handleGotoStep1('form')">上一步</el-button>
				    <el-button @click="handleGotoStep3('form')">下一步</el-button>
				</el-form-item>
			</div>
			<div class="add_wrap" v-show="isStep3">
				<el-transfer 
				   v-model="users"
				   :titles="['未设置人员', '已设置人员']"
				   :data="data"></el-transfer>

				<el-form-item>
				    <el-button type="primary" @click="handleSubmitForm('users')" size="small">保存</el-button>
				    <el-button @click="handleGoBack('users')" size="small">取消</el-button>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>
<script>
	//import eventBus from './../../../../../api/eventBus.js';
	export default{
		data(){
			const generateData = _ => {
				const data = [];
				for (let i = 1; i <= 15; i++) {
					data.push({
						key: i,
						label: `备选项 ${ i }`,
						disabled: false
					});
				}
				return data;
			};
			return {
				msg: '新增交割库',
				isStep1: true,
				isStep2: false,
				isStep3: false,
				form: {},
				data: generateData(),
        		users: [],
				props: {}
			}
		},

		created(){
			//let  formDatas = this.$router.query.formData;
			//console.log(formDatas);
			// eventBus.$on('my-event', (data) => {
	  //           console.log('data:'+ data)
	  //       })
		},
		methods:{
			submitForm(){
				//eventBus.$emit('my-event', this.form); 
				//this.$router.push({name: 'warehouseManageAddNextLink'}) ;
				
			},
			handleGotoStep2(){
				this.isStep1 = false;
				this.isStep2 = true;
			},
			handleGotoStep3(){
				this.isStep2 = false;
				this.isStep3 = true;
			},
			handleGotoStep1(){
				this.isStep1 = true;
				this.isStep2 = false;
			},
			handleSubmitForm(){
				console.log('submit')
			},
			handleGoBack(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang="scss">
	@import './../../../../../assets/css/common_view.css';
	.zl_required{
		color: red;
	}
	.add_table{
		width: 90%;
		margin: 30px auto;
		font-size:12px;
	}
</style>