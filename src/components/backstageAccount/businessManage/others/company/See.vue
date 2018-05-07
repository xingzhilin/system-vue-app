<template>
    <div class="roleAuthority">
        <el-tabs>
            <el-tab-pane>
                <span slot="label">
                        <el-button type="primary" plain autofocus>基本信息</el-button>
                    </span>
                <el-col>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                        <el-form-item label="企业名称：">
                            北京XXX公司
                        </el-form-item>
                        <el-form-item label="企业编码：">
                            1000002
                        </el-form-item>
                        <el-form-item label="省份：" >
                            天津市
                        </el-form-item>
                        <el-form-item label="交割库：">
                            曹妃甸
                        </el-form-item>
                        <el-form-item label="统一社会信用代码：">
                            10000222
                        </el-form-item>
                        <el-form-item label="企业法人：">
                            刘
                        </el-form-item>
                        <el-form-item label="企业邮箱：">
                            11@qq.com
                        </el-form-item>
                        <el-form-item label="办公地址：">
                            北京三元桥
                        </el-form-item>
                        <el-form-item label="联系人：">
                            黎明
                        </el-form-item>
                        <el-form-item label="联系电话：">
                            19812009877
                        </el-form-item>
                        <el-form-item label="企业简介：">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.
                        </el-form-item>
                        <el-form-item label="是否启用：">
                            <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
    
    
                    </el-form>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="消息中心">
                <span slot="label">
                    <el-button type="primary" plain>银行信息</el-button>
                  </span>
                <el-col>
                    <el-table :data="tableData" border size="small">
    
                        <el-table-column align="center" prop="userName" label="开户行"></el-table-column>
                        <el-table-column align="center" prop="trueUserName" label="银行账号"></el-table-column>
                        <el-table-column align="center" prop="phoneNum" label="联系电话"></el-table-column>
                        <el-table-column align="center" prop="departName" label="添加时间"></el-table-column>
                        <el-table-column align="center" prop="roleName" label="账号状态"></el-table-column>
                        <el-table-column align="center" prop="roleTime" label="是否为默认项"></el-table-column>
    
                    </el-table>
                </el-col>
            </el-tab-pane>
        </el-tabs>
        <el-col>
            <el-button @click="resetForm('ruleForm')">返回</el-button>
        </el-col>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                props: {
                    label: 'name',
                    children: 'subMenu'
                },
                treeData: [],
                expand: true
            };
        },
    
        data() {
            return {
                ruleForm: {
                    name1: '',
                    name2: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name1: [{
                            required: true,
                            message: '请输入企业名称',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 5,
                            message: '长度在 3 到 5 个字符',
                            trigger: 'blur'
                        }
                    ],
                    name2: [{
                            required: true,
                            message: '请输入企业编码',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            max: 5,
                            message: '长度在 3 到 5 个字符',
                            trigger: 'blur'
                        }
                    ],
                    region: [{
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }],
                    date1: [{
                        type: 'date',
                        required: true,
                        message: '请选择日期',
                        trigger: 'change'
                    }],
                    date2: [{
                        type: 'date',
                        required: true,
                        message: '请选择时间',
                        trigger: 'change'
                    }],
                    type: [{
                        type: 'array',
                        required: true,
                        message: '请至少选择一个活动性质',
                        trigger: 'change'
                    }],
                    resource: [{
                        required: true,
                        message: '请选择活动资源',
                        trigger: 'change'
                    }],
                    desc: [{
                        required: true,
                        message: '请填写活动形式',
                        trigger: 'blur'
                    }]
                }
            };
        },
        tableData: [{
                userName: '宇宙',
                trueUserName: '8748599900',
                phoneNum: '010-1222332',
                departName: '2017-12-12 12：00',
                roleName: '启用',
                roleTime: '是'
    
            },
            {
                userName: '',
                trueUserName: '',
                phoneNum: '',
                departName: '',
                roleName: '',
                roleTime: ''
    
            },
            {
                userName: '',
                trueUserName: '',
                phoneNum: '',
                departName: '',
                roleName: '',
                roleTime: ''
    
            },
            {
                userName: '',
                trueUserName: '',
                phoneNum: '',
                departName: '',
                roleName: '',
                roleTime: ''
    
            }
    
        ],
    
        methods: {
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
            saveSubmit() {
                console.log('提交')
            }
        }
    };
</script>

<style scoped>
    .roleAuthority {
        padding: 30px;
    }
    
    .el-tree {
        margin: 20px 0 50px 0;
    }
    
    .el-tabs .el-tabs__nav-wrap::after {
        display: none;
    }
</style>