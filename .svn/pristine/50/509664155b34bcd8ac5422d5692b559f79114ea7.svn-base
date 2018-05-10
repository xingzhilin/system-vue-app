<template>
    <div class="views_wrap">
        
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="企业基本信息" name="list">
                <el-form :model="ruleForm" label-width="140px" class="demo-ruleForm">
                    <el-form-item label="企业名称：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="企业编码：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="合同使用类型：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="省份：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="统一社会信用代码：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="企业法人：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="企业邮箱：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="办公地址：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="联系人：">
                        ceshi数据
                    </el-form-item> 
                    <el-form-item label="联系电话：">
                        ceshi数据
                    </el-form-item> 
                    <el-form-item label="企业简介：">
                        ceshi数据
                    </el-form-item> 
                    <el-form-item label="是否启用：">
                        ceshi数据
                    </el-form-item> 
                    <el-form-item label="企业证件属性：">
                        ceshi数据
                        <ul class="imgs_wrap">
                            <li><img src="./../../../../../../assets/images/no-message.png" height="147" width="142"></li>
                            <li><img src="./../../../../../../assets/images/no-message.png" height="147" width="142"></li>
                            <li><img src="./../../../../../../assets/images/no-message.png" height="147" width="142"></li>
                        </ul>
                    </el-form-item>              
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="企业属性" name="attri">
                <el-form :model="ruleForm" label-width="140px" class="demo-ruleForm">
                    <el-form-item label="是否是供应链公司：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="是否交货地交货：">
                        ceshi数据
                    </el-form-item>
                    <el-form-item label="客户类别：">
                        ceshi数据
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="签章" name="sign">签章
                <el-form :model="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="企业名称：">
                      测试
                    </el-form-item>
                    <el-form-item label="签章名称：">
                      测试
                    </el-form-item>
                    <el-form-item label="签章编号：" prop="signCode">
                     测试
                    </el-form-item>
                    <el-form-item label="签章状态：">
                      测试
                    </el-form-item>
                     <el-form-item label="签章有效期：">
                      测试
                   </el-form-item>
                   <el-form-item label="上传签章照片：">
                      测试
                   </el-form-item>
                    <el-form-item label="备注：">
                      测试
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="银行账号" name="bank">
                <el-form :model="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="企业名称：">
                     测试
                    </el-form-item>
                    <el-form-item label="开户行：" prop="bankName">
                      测试
                    </el-form-item>
                    <el-form-item label="银行账号：" prop="bankCardNo">
                     测试
                    </el-form-item>
                    <el-form-item label="联系电话：">
                      测试
                    </el-form-item>
                    <el-form-item label="是否设为默认项：">
                      测试
                    </el-form-item>
                    <el-form-item label="是否启用：">
                      测试
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="发票信息" name="invoices">
                <el-form :model="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="企业名称：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="纳税人识别号：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="发票地址：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="联系电话：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="开户行：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="银行账号：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="是否启用：">
                      测试
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="准入协议" name="admittance">
                <el-table :data="tableData" border size="small">
                    <el-table-column align="center" prop="enName" label="准入协议号"></el-table-column>
                    <el-table-column align="center" prop="enCode" label="准入时间"></el-table-column>
                    <el-table-column align="center" prop="registerDate" label="准入失效时间"></el-table-column>
                    <el-table-column align="center" prop="accessNo" label="廉政协议"></el-table-column>
                    <el-table-column align="center" prop="startTime" label="准入协议"></el-table-column>
                    <el-table-column align="center" prop="endTime" label="准入标记"></el-table-column>
                    <el-table-column align="center" prop="endTime" label="准入状态"></el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="点价保证金及销售期" name="inviteBids">
                <el-form :model="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="点价货款比例：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="销售期：" prop="region">
                      测试
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="廉政协议签署维护" name="incorrupt">
                <el-form :model="ruleForm" label-width="150px" class="demo-ruleForm" :inline-message="true">
                    <el-form-item label="点价货款比例：" prop="region">
                      测试
                    </el-form-item>
                    <el-form-item label="销售期：" prop="region">
                      测试
                    </el-form-item>
                </el-form>
            </el-tab-pane>
        </el-tabs>
        <el-footer>
            <el-button @click="handleGoBack()" size="small">返回</el-button>
        </el-footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                activeName: 'list',
                ruleForm: {},
                tableData: []
            };
        },
        mounted(){
           this.init(); 
        },
        methods: {
            init(){
                let _name = this.$route.query.name;
                this.activeName = _name;
            },
            handleGoBack(){
                this.$router.push({name:'BusinessManageUsersListIndex'});
            },
            handleClick(tab, event) {
                console.log(tab, event);
                switch (tab.name) {
                    case 'list':
                        console.log(111);
                        /*this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', sParams , {
                            headers:{ "Content-Type": "application/json"}
                        })
                        .then(res =>  {
                                if(res.status == 200){
                                    console.log(res);
                                    this.totalPage = res.data.total;
                                    this.currentPage = res.data.pageNum;
                                    this.pageSize = res.data.pageSize;
                                    this.tableData = res.data.list;
                                }
                        })
                        .catch(function (error) {
                            console.log(error);
                        })*/
                        break;
                    case 'attri':
                        
                        console.log(222);
                        break;
                    case 'sign':
                        console.log(333);
                        break;
                    case 'bank':
                        console.log(444);
                        break;
                    case 'invoices':
                        console.log(555);
                        break;
                    case 'admittance':
                        console.log(666);

                        break;
                    case 'inviteBids':
                        console.log(777);
                        break;
                    case 'incorrupt':
                        console.log(888);
                        break;
                }
            }

        }
    };
</script>

<style scoped lang="scss">
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
    .el-form-item{
        ul li{
            display: inline-block;
            float: left;
        }
    }
    .el-tabs .el-tabs__nav-wrap::after {
        display: none;
    }
</style>