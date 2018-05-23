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
                  :props="msgPushesProps"
                  :data="msgPushesTree"
                  :default-checked-keys="checkedArr"
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
            checkedArr:[],
            props: {
              label: 'name',
              children: 'subMenu'
            },
            msgPushesProps: {
              label: 'eventName',
              children: 'subBtns'
            },
            msgPushesTree:[],
            ruleForm:{
              roleName: '',
              delFlag: '',
              remark: '',
              msgPushes:[],
            },
            treeData:[],
            expand:true
          };
        },
        created(){
          let data = JSON.parse(this.$route.query.data);
          console.log(data)
          $.extend(this.ruleForm,data);
          console.log(this.ruleForm)
           roleTree({}, res => {
                this.treeData = res.data;
           });
           this.$http.get('http://192.168.11.98:9001/admin/basics/userRoles/'+this.ruleForm.roleId).then(res => {
              console.log(res.data)
              let data = res.data.result;
              this.msgPushesTree = [{
                "eventName": "全选",
                "subBtns":data.roleMsgConfigs
              }];
              data.roleMsgConfigs.forEach(v=>{ 
                  var obj = {
                    eventName:v.eventName
                  };
                  v.subBtns.forEach(v1=>{
                    if(v1.isChecked == "1"){
                      obj[v1.eventCode] = 1;
                      this.checkedArr.push(v1.id);
                    }else{
                      obj[v1.eventCode] = 0;
                    }
                  });
                  this.ruleForm.msgPushes.push(obj);

              });
           });
          
            
        },
        methods: {
          handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
            if(data.parentName){
              this.ruleForm.msgPushes.forEach(v=>{
                  if(v.eventName == data.parentName){
                    let isChecked = checked == true ? 1 : 0;
                    v[data.eventCode] = isChecked;
                  }
              });
            }
          },
          saveSubmit(){
            console.log(this.ruleForm)
            this.$http.post('http://192.168.11.98:9001/admin/basics/userRole',this.ruleForm).then(res=>{
              let data = res.data;
              if(data.status == 200){
                this.$router.push('/backstage/role');
              }
            });
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