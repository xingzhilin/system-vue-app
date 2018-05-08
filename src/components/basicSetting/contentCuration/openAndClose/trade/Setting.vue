<template>
	<div class="account">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="date_wrap">
			<el-date-picker 
				type="dates" 
				v-model="dateValue"
				@focus="handleFoucs" 
				@blur="handleBlur"
				@change="handleChange"
				value-format="yyyy/MM/dd"
				placeholder="请选择选择日期">
			</el-date-picker>
		</div>
		<dl class="time_wrap">
			<dt>开市时间：</dt>
			<dd class="time_box">
				<!-- <el-input v-model="formInline.userName" placeholder="开始时间" size="small" class="time_input"></el-input> -->
				<div class="time_item" v-for="item in timeList">
					<el-time-select
					    placeholder="起始时间"
					    v-model="item.startTime"
					    :picker-options="{
					      start: '00:00',
					      step: '00:15',
					      end: '24:00'
					    }"
					    size="small">
					</el-time-select>  

					<span>至</span>
					<!-- <el-input v-model="formInline.userName" placeholder="开始时间" size="small" class="time_input"></el-input> -->
					<el-time-select
					    placeholder="结束时间"
					    v-model="item.endTime" 
					    :picker-options="{
					      start: '00:00',
					      step: '00:15',
					      end: '24:00'
					    }"
					    size="small">
					</el-time-select>
				</div>

			</dd>
			<dd class="time_add" v-bind:style="{ paddingTop: timeBtnTop + 'px'}">
				<el-button type="primary" @click="handleAddTime" size="small">+添加</el-button>
	    		<el-button @click="handleDeleteTime" size="small">删除最后一行</el-button>
			</dd>
		</dl>
		<div @click="handleDialogTime">双击日历弹窗</div>
	    <el-footer>
	    	<el-button type="primary" @click="handleSubmit" size="small">保存</el-button>
		    <el-button @click="handleReset" size="small">取消</el-button>
	    </el-footer>
	    <el-dialog title="设置开市时间" :visible.sync="dialogFormVisible">
			<dl class="time_wrap">
				<dt>开市时间：</dt>
				<dd class="time_box">
					<!-- <el-input v-model="formInline.userName" placeholder="开始时间" size="small" class="time_input"></el-input> -->
					<div class="time_item" v-for="item in timeList">
						<el-time-select
						    placeholder="起始时间"
						    v-model="item.startTime"
						    :picker-options="{
						      start: '00:00',
						      step: '00:15',
						      end: '24:00'
						    }"
						    size="small">
						</el-time-select>  

						<span>至</span>
						<!-- <el-input v-model="formInline.userName" placeholder="开始时间" size="small" class="time_input"></el-input> -->
						<el-time-select
						    placeholder="结束时间"
						    v-model="item.endTime" 
						    :picker-options="{
						      start: '00:00',
						      step: '00:15',
						      end: '24:00'
						    }"
						    size="small">
						</el-time-select>
					</div>

				</dd>
				<dd class="time_add" v-bind:style="{ paddingTop: timeBtnTop + 'px'}">
					<el-button type="primary" @click="handleAddTime" size="small">+添加</el-button>
		    		<el-button @click="handleDeleteTime" size="small">删除最后一行</el-button>
				</dd>
			</dl>


		    <div slot="footer" class="dialog-footer">
		    	<el-button type="primary" @click="handleSubmit;dialogFormVisible = false" size="small">保存</el-button>
			    <el-button @click="dialogFormVisible = false" size="small">取消</el-button>
		    </div>
		</el-dialog>
	</div> 
</template>
<script>
	export default {
		name: 'Index',
		data(){
			return {
				msg: '交易开闭市维护',
				formInline: {
					userName: '',
					trueUserName: '',
					departName: '',
					roleName: '',
					userStatus: ''
				},
				timeList: [{startTime:'', endTime: ''}],
				dateValue: [],
				timeBtnTop: 0,
				dialogFormVisible: false

			}
		},
		created(){
			//this.init();
		},
		methods: {
			handleSubmit(){
				let isSubmit = this.timeList.every((item) => {
				    return item.startTime =='' && item.endTime =='';
				});
				console.log(isSubmit)
				if(!isSubmit){
					console.log(this.timeList);
					this.timeList = [{startTime:'', endTime: ''}];	
				}else{						
					this.$message({
			          message: '您输入的时间不能为空！！',
			          type: 'warning'
			        });
			        return false;
				}
			},
			handleReset(formName){
				console.log('reset');
			},
		    handleAddTime(index){
				console.log('date');
				console.log('index: ' , index);
				this.timeList.push({startTime:'', endTime: ''});
				this.timeBtnTop += 42;
				/*document.querySelector('.account').addEventListener('click', () => {
					console.log('ce');
					console.log('index: ' , index);
					this.timeList.push(1);
					$('.el-picker-panel').show();
				})*/
				/*this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', sParams , {
						headers:{ "Content-Type": "application/json"}
					})
					.then(res =>  {
							if(res.status == 200){
								console.log(res);
							}
					})
					.catch(function (error) {
						console.log(error);
					})*/
		    },
		    handleDeleteTime(){
		    	if(this.timeList.length>1){
			    	this.timeList.pop();
			    	this.timeBtnTop -= 42;
		    	}else{
		    		this.$message({
			          message: '已经是最后一组时间，您不能删除！',
			          type: 'warning'
			        });
		    	}
		    },
		    handleFoucs(){
		    	console.log('focus');
		    },
		    handleBlur(){
		    	return false;
		    },
		    handleChange(){
		    	console.log(this.dateValue);
		    	console.log(this.first);
				console.log($('.el-range-input').val());
		    },
		    handleDialogTime(){
		    	this.dialogFormVisible = true;
		    }
		}
	}
</script>
<style scoped lang="scss">
	.date_wrap{
	}
	.time_wrap{
		height: auto;
		overflow:hidden;
		dt{
			width: 90px;
			line-height:32px;
			float:left;
		}
		.el-input{
			float:left;
			width: 180px;
		}
		dd.time_box{
			width:450px;
			float:left;
			margin: 0;
			.time_item{
				overflow:hidden;
				margin-bottom: 10px;
			}
			span{
				height:32px;
				line-height:32px;
				float: left;
				display:block;
				padding: 0 10px;
			}
		}
		dd.add{
			overflow:hidden;
			span{
				height:32px;
				line-height:32px;
				float: left;
				display:block;
				padding: 0 10px;
			}
		}
	}

	.time_input{
		width: 200px;
		float: left;
	}
	.el-footer{
		padding: 0;
		.el-pagination{
			padding:0;
			margin: 10px 15px;
			white-space: initial;
			text-align: right;
		}
	}
</style>