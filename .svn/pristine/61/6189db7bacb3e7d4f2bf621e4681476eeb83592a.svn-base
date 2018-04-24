<template>
    <div class="roleAuthoritySee">
        <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="角色名称：">
            123
          </el-form-item>
           <el-form-item label="添加时间：">
            2018
          </el-form-item>
          <el-form-item label="备注：">
            我的徐别哭主题一不意识到客服哈萨克东方红阿斯蒂芬卡卡是东方红 卡士大夫很快就阿斯蒂芬阿斯蒂芬卡闪电发货 
          </el-form-item>
        </el-form>
        <el-tabs>
          <el-tab-pane>
                <span slot="label">
                    <el-button type="primary" plain autofocus>业务权限设置</el-button>
                </span>
                <el-col>
                  <el-tree
                    :default-expand-all="expand"
                    :default-checked-keys="[1,2,3,5]"
                    :props="props"
                    :data="treeData"
                    show-checkbox
                    node-key="id"
                    @check-change="handleCheckChange">
                  </el-tree>
                </el-col>
          </el-tab-pane>
          <el-tab-pane label="消息中心">
              <span slot="label">
                <el-button type="primary" plain>消息推送设置</el-button>
              </span>
              <el-col>
                <el-tree
                  :default-expand-all="expand"
                  :default-checked-keys="[5]"
                  :props="props"
                  :data="treeData"
                  show-checkbox
                  node-key="id"
                  @check-change="handleCheckChange">
                </el-tree>
              </el-col>
          </el-tab-pane>
         </el-tabs>
         <el-col :span="12" :offset="6">
            <el-button type="primary" @click="$router.go(-1);">返回</el-button>
         </el-col>
    </div>
</template>
<script>
    import {roleTree} from '../../../api/api.js'
    export default {
        data() {
          return {
            props: {
              label: 'name',
              children: 'subMenu',
              disabled: 'disabled'
            },
            treeData:[],
            expand:true,
          };
        },
        created(){
           roleTree({}, res => {
                this.setDisabled(res.data);
                this.treeData = res.data;
           });
           console.log(this.$route.query)
            
        },
        methods: {
          handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
          },
          saveSubmit(){
            console.log('提交')
          },
          setDisabled(data){
            data.forEach((v,i)=>{
              v.disabled = true;
              if(v.subMenu){
                this.setDisabled(v.subMenu);
              }
            })
          }
        }
      };
</script>
<style scoped>
    .roleAuthoritySee {
        padding: 30px;
    }
    .el-tree {
        margin: 20px 0 50px 0;
    }
    .el-tabs .el-tabs__nav-wrap::after {
        display: none;
    }
</style>