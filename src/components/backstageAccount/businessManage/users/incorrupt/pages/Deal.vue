<template>
   <div class="goods_wrap">
        <table>
          <col width="20%" />
          <col width="30%" />
          <col width="20%" />
          <col width="30%" />
          <thead>
            <tr>
              <th width="260" colspan="4" class="goods_wrap-l">煤炭购销准入框架合同反写信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">企业名称</td>
              <td>{{formInline.enName}}</td>
              <td class="td_label">通讯地址</td>
              <td><el-input v-model="formInline.address" placeholder="北京市朝阳区霞光里15号霄云中心A座19层" size="small"></el-input></td>
            </tr>
             <tr>
              <td class="td_label">邮政编码</td>
              <td><el-input v-model="formInline.zipCode" placeholder="100021" size="small"></el-input></td>
              <td class="td_label">法定代表人</td>
              <td>{{formInline.legalPerson}}</td>
            </tr>
             <tr>
              <td class="td_label">联系人</td>
              <td><el-input v-model="formInline.linkMan" placeholder="郭森" size="small"></el-input></td>
              <td class="td_label">联系电话</td>
              <td><el-input v-model="formInline.telephone" placeholder="010-84588393" size="small"></el-input></td>
            </tr>
             <tr>
              <td class="td_label">传真</td>
              <td><el-input v-model="formInline.fax" placeholder="010-84588685" size="small"></el-input></td>
              <td class="td_label">电子邮箱</td>
              <td><el-input v-model="formInline.email" placeholder="yyzx3@315.com.cn" size="small"></el-input></td>
            </tr>
             <tr>
              <td class="td_label">签约地</td>
              <td><el-input v-model="formInline.signedAdress" placeholder="宁夏回族自治区中卫市海原县" size="small"></el-input></td>
              <td class="td_label"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table>
          <col width="20%" />
          <col width="30%" />
          <col width="20%" />
          <col width="30%" />
          <thead>
             <tr>
              <th width="260" colspan="4" class="goods_wrap-l">廉政协议书反写信息</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="td_label">联系人</td>
              <td><el-input v-model="formInline.linkMan" placeholder="赵飙" size="small"></el-input></td>
              <td class="td_label">联系电话</td>
              <td>{{formInline.incorruptTelephone}}</td>
            </tr>
            
            <tr>
              <td class="td_label">备注</td>
              <td colspan="2">
                  <textarea></textarea>
              </td>
              <td></td>
            </tr>
            
          </tbody>
        </table>
        
        <el-footer>
          <el-button type="primary" @click="handleSubmit('formInline')" size="small">保存</el-button>
          <el-button size="small" @click="$router.go(-1);">取消</el-button>
       </el-footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        incorruptId: "16",
        enName: "xxxxxx",
        address: "xxxxxx",
        zipCode: "xxxxxx",
        legalPerson: "xxxxxx",
        linkMan: "xxxxxx",
        telephone: "xxxxxx",
        fax: "xxxxxx",
        email: "xxxxxx",
        signedAdress: "xxxxxx",
        incorruptLinkman: "xxxxxx",
        incorruptTelephone: "xxxxxx",
        remark: "xxxxxx"
      },
      tableData: []
    };
  },
  created() {
    this.getProvinceIdOptions();
    this.dataSubmit();
  },
  methods: {
    handleSubmit() {
      console.log(this.formInline);
      this.dataSubmit();
    },

    dataSubmit() {
      console.log(this.formInline);
      //this.$axios.post('http://192.168.15.172:9001/api/v1/admin/basics/register/users',this.formInline).then(res=>{
      //		console.log(res)

      //	let data = res.data;
      //   this.total = data.result.total;
      //this.tableData = data.result.list;
      //this.currentPage = data.result.pageNum;
      // });
    },
    dataSubmit() {
      var data = {
        status: 200,
        message: "操作成功",
        resultData: {
          incorruptId: "16",
          enName: "xxxxxx",
          address: "xxxxxx",
          zipCode: "xxxxxx",
          legalPerson: "xxxxxx",
          linkMan: "xxxxxx",
          telephone: "xxxxxx",
          fax: "xxxxxx",
          email: "xxxxxx",
          signedAdress: "xxxxxx",
          incorruptLinkman: "xxxxxx",
          incorruptTelephone: "xxxxxx",
          remark: "xxxxxx"
        }
      };
      this.tableData = data.resultData;
    },
    getProvinceIdOptions() {
      //this.$axios.post('http://192.168.15.172:9001/api/v1/admin/basics/register/users',{isProvince:1}).then(res=>{
      // 			console.log(res)
      //})
    }
  }
};
</script>
};
</script>
<style scoped lang="scss">
@import "../../../../../../assets/css/table_view.css";
.el-form {
  padding: 15px 0 0 20px;
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.el-breadcrumb {
  position: relative;
  border-bottom: 1px solid #e5e5e5;
  background-color: #f5f5f5;
  min-height: 41px;
  line-height: 40px;
  padding-left: 20px;
  display: block;
}
.line {
  text-align: center;
}
.goods_wrap {
  -padding: 15px 0 0 20px;
}
.sync_wrap {
  width: 100%;
}
table {
  -margin-top: 20px;
  th {
    background: #f2f2f2;
  }
  td,
  th {
    height: 46px;
    border: 1px solid #e8e8e8;
    text-align: center;
    -padding-left: 10px;
    padding: 0;
    .el-input {
      width: 96%;
    }
    textarea {
      width: 96%;
      border: 1px solid #e8e8e8;
      height: 80px;
    }
  }
  th.goods_wrap-l {
    text-align: left;
  }
  .th_time {
    text-align: center;
    font-size: 14px;
    font-weight: normal;
  }
  .td_label {
    width: 260px;
    text-align: center;
  }
  .el-tabs__item {
    height: 50px;
    line-height: 50px;
  }
}

.el-pagination {
  padding: 15px;
  text-align: center;
}
.el-footer {
  text-align: center;
  padding-top: 40px;
  margin-bottom: 40px;
}
</style>
