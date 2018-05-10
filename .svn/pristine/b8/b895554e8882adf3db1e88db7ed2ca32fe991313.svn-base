<template>
    <div class="update">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :model="addForm" :rules="addForm" ref="addForm" label-width="100px" class="demo-ruleForm" >
            <table>
                <thead>
                    <tr>
                        <th colspan="2">用户信息</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_label">用户名称：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">手机号码：</td>
                        <td>1213</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="2">准入企业（乙方）信息</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_label">企业名称：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">公司地址：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">邮政编码：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">法定代表人：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系电话：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">传真：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">电子邮箱：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">查看准入协议：</td>
                        <td>
                           <el-button size="small">查看准入协议</el-button> 
                           <el-button size="small">查看廉政协议</el-button> 
                           <el-button size="small">下载准入协议</el-button> 
                           <el-button size="small">下载廉政协议</el-button> 
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="2">甲方企业信息</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_label"><span class="zl_required">*</span>合同编号：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label"><span class="zl_required">*</span>公司名称：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">通讯地址：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">邮政编码：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">法定代表人：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系电话：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">传真：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">电子邮箱：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">合同有效期：</td>
                        <td>
                            自
                            <el-date-picker
                              v-model="addForm.realName"
                              type="date"
                              placeholder="选择日期">
                            </el-date-picker>
                            至
                            <el-date-picker
                              v-model="addForm.realName"
                              type="date"
                              placeholder="选择日期">
                            </el-date-picker>
                            止
                        </td>
                    </tr>
                    <tr>
                        <td class="td_label">查看准入协议：</td>
                        <td>
                            <el-radio-group v-model="addForm.status">
                                <el-radio label="启用"></el-radio>
                                <el-radio label="禁用"></el-radio>
                            </el-radio-group>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colspan="2">廉政协议信息</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>而威尔</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>1213</td>
                    </tr>
                    <tr>
                        <td class="td_label">备注：</td>
                        <td>1213</td>
                    </tr>
                </tbody>
            </table>
            <el-form-item>
                <el-button type="primary" @click="handleSubmitForm('addForm')" size="small">保存</el-button>
                <el-button @click="handleGoBack()" size="small">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default{
        name: 'Update',
        data(){
            return {
                msg: 'Update',
                addForm: {
                    headPicUrl: '',
                    realName: ''
                }
            }
        },
        methods:{
            handleSubmitForm(formName) {
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    alert('submit!');
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                })
            },
            handleGoBack(fromName){
                //this.$router.go(-1);
                this.$router.push({name: 'usersadmittanceUpdateListLink'})
            }
            
        }
    }
</script>
<style scoped lang="scss">
    @import './../../../../../../assets/css/table_view.css';
    .update{
        .zl_required{
            color: red;
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