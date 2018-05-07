<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
        <el-form-item label="企业名称：" prop="name1">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="企业编码：" prop="name2">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="省份：" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="交割库：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="统一社会信用代码：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="企业法人：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="企业邮箱：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="办公地址：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系人：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="企业简介">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="是否启用：">
            <el-radio-group v-model="ruleForm.resource">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
            </el-radio-group>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
            <el-button @click="resetForm('ruleForm')">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
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
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
