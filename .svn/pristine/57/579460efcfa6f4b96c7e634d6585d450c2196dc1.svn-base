<template>
	<div class="edit">
		<el-form :model="formData" ref="ruleForm" label-width="140px" class="demo-ruleForm">
            <el-form-item label="用户名：">
                {{formData.userName}}
            </el-form-item>
            <el-form-item label="手机号码：">
                {{formData.cellPhone}}
            </el-form-item>
			<el-form-item label="用户状态：">
		    <el-radio-group v-model="formData.status">
		      <el-radio disabled v-model="formData.status" label="1">启用</el-radio>
		      <el-radio disabled v-model="formData.status" label="0">停用</el-radio>
		    </el-radio-group>
		  </el-form-item>  
            <el-form-item label="注册时间：">
                {{formData.createTime}}
            </el-form-item>
            <el-form-item label="注册来源：">
                {{formData.source}}
            </el-form-item>
        
		<el-form-item>
		    <el-button @click="handleGoBack()" size="small">返回</el-button>
		</el-form-item>
		</el-form>
	</div>
</template>
<script>
	export default{
		data(){
			 return {
                formData: {
                    userName: "",
                    cellPhone: "",
                    status: "1",
                    whCode: "",
                    createTime: "",
                    source: ""
                    
                },
                provinceIdOptions: [],
            };
		},
		created(){
			this.initList()
		},
		methods:{
			handleGoBack(){
				this.$router.push({name:'usersLinkList'});
			},
			initList(){
				let tempCode = this.$route.query.tempCode;
				this.$axios.get('/api/v1/admin/basics/register/user/000008' + tempCode,{
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
						if(res.status == 200){
							this.formData = res.data.result;
						}
					})
					.catch(function (error) {
						console.log(error);
					})
		    }
		}
	}
</script>
<style scoped lang="scss">	
	//@import './../../../../../assets/css/table_view.css';
	.edit{
		table{width:100%;text-align:center;border-collapse:collapse;border-spacing:1;border-spacing:0; }
	    table td{word-break: break-all; word-wrap:break-word;border-right:1px solid #939598; border-bottom:1px solid #939598;font:500 14px Arial}
		.zl_required{
			color: gray;
		}
		.add_table{
			width: 80%;
			margin: 30px auto;
			font-size:12px;
			td{
				border: 1px solid #ebeef5;
				padding: 10px;
				text-align: left;
			}
			.td_label{
				width: 160px;
				text-align:right;
				vertical-align: top;
   				line-height: 40px;
			}
			.el-input{
				width: 260px;
			}
			.td_button{
				text-align: center;
			}
		}
		.el-footer{
			text-align: center;
		}		
		.el-transfer{
			width: 600px;
			margin: 15px auto;
			.el-transfer-panel{
				width:245px;
			}
		}
	}
</style>