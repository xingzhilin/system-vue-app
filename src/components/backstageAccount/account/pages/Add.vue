<template>
	<div class="addAccount">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :model="form" :rules="rules" ref="form":label-position="isPc==true?'right':'top'" :inline-message="true"  label-width="100px" class="demo-ruleForm" >		  
		  <el-form-item label="用户头像：" prop="headPicUrl">
			<el-upload
			  class="avatar-uploader"
			  action="http://219.149.226.180:7884/landflow/common/uploadFile.do"
			  :show-file-list="false" 
			  :on-success="handleAvatarSuccess" 
			  :on-preview="handleAvatarPreview" 
			  :on-remove="handleRemove"  
			  :on-change="handleChange"  
			  :before-upload="beforeAvatarUpload">
			  <img v-if="form.headPicUrl" height="140" width="120" :src="form.headPicUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>

			<el-dialog :visible.sync="dialogVisible">
			  <img width="100%" height="140" :src="form.headPicUrl" alt="">
			</el-dialog>
			<input type="hidden" v-model="form.headPicUrl">
		  </el-form-item>
		  <el-form-item label="真实姓名：" prop="realName">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="form.realName" size="small"></el-input>
			</el-col>
		  </el-form-item>
		  <el-form-item label="手机号码：" prop="cellPhone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="form.cellPhone" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="固定电话：" prop="telephone">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="form.telephone" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="传真：" prop="fax">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="form.fax" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="电子邮箱：" prop="email">
		  	<el-col :xs="24" :sm="24" :md="18" :lg="10" :xl="8">
		    	<el-input v-model="form.email" size="small"></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item label="账号状态：">
		    <el-radio-group v-model="form.status">
		      <el-radio :label="1">启用</el-radio>
		      <el-radio :label="0">禁用</el-radio>
		    </el-radio-group>
		  </el-form-item>  
		  <el-form-item label="负责交割库：" prop="whCode" v-model="form.whCode">
		  	<span v-for="item in getAddAccountChoice">{{item}}</span>
		  	<el-checkbox v-model="form.isAll">全选</el-checkbox>
		    <el-button @click="handleAddChoice" :model="form.depart">去配置</el-button>
		    <div>
		    	<span v-for="name in whData">{{name}}</span>
		    </div>
		  </el-form-item>
		  <el-form-item label="所属角色：" prop="userRoles">
		    <el-checkbox-group v-model="form.userRoles">
		      <el-checkbox v-for="item in userRolesData" :key="item.roleId" :label="item.roleId" name="roles">{{item.roleName}}</el-checkbox>
		    </el-checkbox-group>
		  </el-form-item>		  
		  <el-form-item>
		    <el-button type="primary" @click="handleSubmitForm('form')" size="small" :disabled="isDisabled">保存</el-button>
		    <el-button @click="handleGoBack()" size="small">取消</el-button>
		  </el-form-item>
		</el-form>

	</div>
</template>
<script>
	function isvalidPhone(str) {
	  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
	  return reg.test(str)
	}
	var validPhone = (rule, value,callback)=>{
		if (!value){
			callback(new Error('请输入电话号码'))
		}else  if (!isvalidPhone(value)){
			callback(new Error('请输入正确的11位手机号码'))
		}else {
			callback()
		}
	}
	export default{
		name: 'AddAccount',
		data(){
			return {
				msg: 'AddAccount',
				isIndeterminate: true,
				form: {					
			        status: 1,
			        userRoles: [],
			        headPicUrl:''
				},
				dialogImageUrl:'',
				dialogVisible: false,
				props: {
					label: 'name',
					children: 'zones'
		        },
		        userRolesData: [],
		        whData:[],
		        count: 1,
		        dialogFormVisible:false,
		        isDisabled: false,
		        rules: {
		          realName: [
		            { required: true, message: '请输入真实姓名', trigger: 'blur' }
		          ],
		          cellPhone: [
		             { required: true, message: '请输入手机号码', trigger: 'blur' },
      				 { required: true, trigger: 'blur', validator: validPhone }
		          ],
		          userRoles: [
		            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
		          ]
		        }
			}
		},		
		computed:{
			isLogin(){
				return this.$store.getters.isLogin
			},
			getAddAccountChoice(){
				return this.$store.getters.getAddAccountChoice
			},
			isPc(){
				return this.$store.getters.isPc
			}
		},
		created(){
			eventBus.$on('delieveryData',(data)=>{
				let newWhCode = data.map((item,key,ary) => {
				     return item.whCode;
				});
				let newWhData = data.map((item,key,ary) => {
				     return item.whName;
				});
				this.form.whIds = newWhCode
				this.whData = newWhData
			})
		},
		mounted(){
			this.init();
		},
		methods:{
			handleRemove(file, fileList) {
				console.log('handleRemove');
				console.log(file, fileList);
			},
			handlePreview(file) {
				console.log('handlePreview');
				console.log(file);
			},
			handleAvatarSuccess(res, file) {
				console.log('handleAvatarSuccess');
				console.log(res, file);
				this.form.headPicUrl = URL.createObjectURL(file.raw);				
    			//this.dialogVisible = true;
				console.log(this.form.headPicUrl);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			handleChange(file, fileList) {
				console.log('handleChange');
				console.log(file, fileList);
				file.imageUrl = 'imageUrl';
				file.img = 'img';
				// this.ruleForm.img = file.name;
				this.form.headPicUrl = file.url;
			},
			handleAvatarPreview(file) {
				console.log('handleAvatarPreview');
				this.dialogImageUrl = file.url;
    			this.form.headPicUrl = file.url;
			},
			handleAvatarSuccess2(res, file) {
				console.log('handleAvatarSuccess');
				this.form[file.headPicUrl] = URL.createObjectURL(file.raw);  
				this.form[file.img] = true;  //改放change显示图片
				//this.$refs.ruleForm.validateField(file.img); // 上传成功后单独校验，以取消之前的必填项提示
			},
			handleCheckAll(){
				console.log('checkALl');
			},
			handleCheckChange(data, checked, indeterminate) {
				console.log(data, checked, indeterminate);
			},
			handleNodeClick(data) {
				console.log(data);
			},
			handleSubmitForm(form) {
		        this.$refs[form].validate((valid) => {
					if (valid) {
		            this.isDisabled = true;
		            if(this.form.isAll){
		            	this.form.isAll = 1
		            }else{
		            	this.form.isAll = 0
		            }
					let sParams = JSON.stringify(this.form);
					console.log(sParams)
					this.$axios.post('http://192.168.11.98:9001/admin/basics/user', sParams , {
							headers:{ "Content-Type": "application/json"}
						})
						.then(res =>  {
								console.log(res);
								if(res.data.status == 200){
									this.$message({
							          showClose: true,
							          message: '恭喜您已经成功提交！',
							          type: 'success',
							          duration: 2000,
							          onClose: () => {
							        	this.$router.push({name:'addAccountListLink'});
							          }
							        });
								}
						})
						.catch(function (error) {
							console.log(error);
						})
		          } else {
		            console.log('error submit!!');
		            return false;
		          }
		        })
		    },
		    init(){
		    	this.$axios.post('http://192.168.11.98:9001/admin/basics/roles',{
		    		headers: { "Content-Type": "application/json"}
		    	})
		    	.then( res => {
		    		console.log('**********************');
		    		console.log(res);
		    		if(res.data.status  == 200){
		    			this.userRolesData = res.data.result
		    		}
		    	})
		    },
		    handleGoBack(fromName){
		    	//this.$router.go(-1);
		    	this.$router.push({name: 'addAccountListLink'})
		    },
		    handleAddChoice(){
                 //记录索引
                 //this.listIndex=_index;
                 //记录数据
                 //this.editObj=row;
                 //显示弹窗
                //this.dialogFormVisible = true;
                
                this.$router.push({name: 'DeliveryChoiceLink'})
             },
			loadNode(node, resolve) {
				if (node.level === 0) {
					return resolve([{ name: 'region1' }, { name: 'region2' }]);
				}
				if (node.level > 4) return resolve([]);

				var hasChild;
				if (node.data.name === 'region1') {
					hasChild = true;
				} else if (node.data.name === 'region2') {
					hasChild = false;
				} else {
					hasChild = Math.random() > 0.5;
				}

				setTimeout(() => {
					var data;
					if (hasChild) {
						data = [
							{
								name: 'zone' + this.count++
							}, {
								name: 'zone' + this.count++
							}
						];
					} else {
						data = [];
					}

					resolve(data);
				}, 500);
			}
		}
	}
</script>
<style lang="scss" scoped>
	.el-breadcrumb{
		position: relative;
	    border-bottom: 1px solid #e5e5e5;
	    background-color: #f5f5f5;
	    min-height: 41px;
	    line-height: 40px;
	    padding-left: 20px;
	    display: block;
	}
	.el-form{
		padding: 15px 20px 0 15px;
		color:#606266;
	}	
	.el-form-item{
		margin-bottom:10px;
	}
	.el-upload {
	    border: 1px solid #e2e2e2;
	    border-radius: 50%;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 78px;
	    height: 78px;
	    line-height: 78px;
	    text-align: center;
	}
	.avatar {
	    width: 78px;
	    height: 78px;
	    display: block;
	}
</style>