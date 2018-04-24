<template>
    <div class="roleAuthority">
        <el-tabs>
          <el-tab-pane>
                <span slot="label">
                    <el-button type="primary" plain autofocus>业务权限设置</el-button>
                </span>
                <el-col>
                  <el-tree
                    :default-expand-all="expand"
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
                  :props="props"
                  :data="treeData"
                  show-checkbox
                  node-key="id"
                  @check-change="handleCheckChange">
                </el-tree>
              </el-col>
          </el-tab-pane>
         </el-tabs>
         <el-col>
            <el-button type="primary" @click="saveSubmit">保存</el-button>
            <router-link :to="{path:'/backstage/role'}">
                <el-button>取消</el-button>
            </router-link>
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
              children: 'subMenu'
            },
            treeData:[],
            expand:true
          };
        },
        created(){
           roleTree({}, res => {
                this.treeData = res.data;
           })
            
        },
        methods: {
          handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
          },
          saveSubmit(){
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