<template>
    <div class="update">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
          <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-form :model="form" :rules="form" ref="form" label-width="100px" class="demo-ruleForm" >
            <table>
                <thead>
                    <tr>
                        <th colspan="2">用户信息</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="td_label">用户名称：</td>
                        <td>{{userInfo.userName}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">手机号码：</td>
                        <td>{{userInfo.mobileTel}}</td>
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
                        <td>{{secondParty.enName}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">公司地址：</td>
                        <td>{{secondParty.enAddress}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">邮政编码：</td>
                        <td>{{secondParty.enPostCode}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">法定代表人：</td>
                        <td>{{secondParty.legalPerson}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>{{secondParty.linkMan}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系电话：</td>
                        <td>{{secondParty.telephone}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">传真：</td>
                        <td>{{secondParty.enFax}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">电子邮箱：</td>
                        <td>{{secondParty.enMail}}</td>
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
                        <td>{{firstParty.accessNo}}</td>
                    </tr>
                    <tr>
                        <td class="td_label"><span class="zl_required">*</span>公司名称：</td>
                        <td>{{firstParty.enName}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">通讯地址：</td>
                        <td>{{firstParty.address}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">邮政编码：</td>
                        <td>{{firstParty.zipCode}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">法定代表人：</td>
                        <td>{{firstParty.legalPerson}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>{{firstParty.linkMan}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系电话：</td>
                        <td>{{firstParty.telephone}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">传真：</td>
                        <td>{{firstParty.fax}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">电子邮箱：</td>
                        <td>{{firstParty.eMail}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">合同有效期：</td>
                        <td>
                            自
                             <el-date-picker type="datetime" v-model="form.startTime" placeholder="选择日期" style="width: 100%;" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
                            至
                              <el-date-picker type="datetime" v-model="form.endTime" placeholder="选择日期" style="width: 100%;" value-format="yyyy-MM-dd HH:mm"></el-date-picker>
                            止
                        </td>
                    </tr>
                    <tr>
                        <td class="td_label">是否启用：</td>
                        <td>
                            <el-radio-group v-model="form.isUsed">
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
                        <td>{{incorruptAgreement.incorruptLinkMan}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">联系人：</td>
                        <td>{{incorruptAgreement.incorruptTelephone}}</td>
                    </tr>
                    <tr>
                        <td class="td_label">备注：</td>
                        <td>{{incorruptAgreement.remark}}</td>
                    </tr>
                </tbody>
            </table>
            <el-form-item>
                <el-button type="primary" @click="handleSubmitForm('form')" size="small">保存</el-button>
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
                form: {
                    startTime:'',
                    endTime:'',
                    isUsed: 1
                },
                userInfo: {},
                secondParty: {},
                firstParty: {},
                incorruptAgreement: {},
                result: {
                    "accessId": null,
                    "userInfo":{
                        "userName":"小太阳呀",
                        "mobileTel":"13146066605"
                    },
                    "secondParty":{
                        "enName":"小太阳的公司",
                        "enAddress":"xxxx",
                        "enPostCode":"xxxxx",
                        "legalPerson":"xxx",
                        "linkMan":"xxx",
                        "telephone":"xx",
                        "enFax":"xx",
                        "enMail":"xx",
                        "incorruptAgreementFileUrl":"http://xxxx",
                        "accessAgreementFileUrl":"http://xxxx"
                    },
                    "firstParty":{
                        "accessNo":"xxxx",
                        "enName":"xxxx",
                        "address":"xxxx",
                        "zipCode":"xxxx",
                        "legalPerson":"xxxx",
                        "linkMan":"xxxx",
                        "telephone":"xxxx",
                        "fax":"xxxx",
                        "eMail":"xxxx",
                        "startTime":"xxxx",
                        "endTime":"xxxx",
                        "isUsed":"0"
                    },
                    "incorruptAgreement":{
                        "incorruptLinkMan":"xxxxx",
                        "incorruptTelephone":"xxxxx",
                        "remark":"xxxxx"
                    }
                  }
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            handleSubmitForm(formName) {
                this.$refs[formName].validate((valid) => {
                  if (valid) {
                    this.form.enId = this.$route.query.enId;
                    let sParams = JSON.stringify(this.form);
                    console.log(sParams)
                    this.$axios.post('http://192.168.11.31:9001/api/v1/basics/admin/access', sParams , {
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
                                        this.$router.push({name:'BusinessManageUsersAdmittanceUpdateList'});
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
            handleGoBack(fromName){
                //this.$router.go(-1);
                this.$router.push({name: 'usersadmittanceUpdateListLink', query: {enId: this.$route.query.enId}})
            },
            init(){
                // this.$axios.get('http://192.168.11.31:9001/api/v1/basics/admin/access/' + this.$route.query.accessId + '/' + this.$route.query.accessType, {
                //     headers: { "Content-Type": "application/json"}
                // })
                // .then( res => {
                //     console.log('***************res');
                //     console.log(res);
                //     if(res.data.status == 200){
                //         this.form = res.data.result;
                //     }
                // });
                this.userInfo = this.result.userInfo;
                this.secondParty = this.result.secondParty;
                this.firstParty = this.result.firstParty;
                this.incorruptAgreement = this.result.incorruptAgreement;
            }
            
        }
    }
</script>
<style scoped lang="scss">    
    table{width:100%;text-align:left;border-collapse:collapse;border-spacing:1;border-spacing:0; }
    table td{word-break: break-all; word-wrap:break-word;font:500 14px Arial;border: 1px solid #ebeef5;}
    .update{
        .zl_required{
            color: red;
        }
        table{
            width: 96%;
            margin: 30px auto;
            font-size:12px;
            th{
                background: #f2f2f2;
             }
            td, th{
                height: 30px;
                border: 1px solid #e8e8e8;
                text-align: left;
                -padding-left: 10px;
                padding: 0;
                .el-input{
                  width: 96%;
                }
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