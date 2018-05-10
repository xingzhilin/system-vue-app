<template>
	<div class="backstage">
		<el-breadcrumb separator-class="el-icon-arrow-right">
		  <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
		  <el-breadcrumb-item>后台账户管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-container>
		<router-link :to="{path:'/business/others/bank/Add',query:{enName}}">
	      <el-button type="danger" size="small">新增</el-button>
		</router-link> 	        
	    </el-container>

		<el-table :data="tableData" border size="small">
		    <el-table-column prop="" label="操作" width="180" align="center">		    	
		    	<template slot-scope="scope">
					<router-link :to="{path:'/business/others/bank/Bianji2',query:{enName}}">
		    		<el-button type="primary" size="mini">编辑</el-button>
					</router-link>	
			      </template>
		    </el-table-column>
		    <el-table-column align="center" prop="bankName" label="开户行"></el-table-column>
		    <el-table-column align="center" prop="bankCardNo" label="银行账号"></el-table-column>
		    <el-table-column align="center" prop="telephone" label="联系电话"></el-table-column>
		    <el-table-column align="center" prop="createTime" label="添加时间"></el-table-column>
		    <el-table-column align="center" prop="status" label="账号状态">
				<template slot-scope="scope">
					{{scope.row.status =='1'?'启用':'停用'}} 
				</template>
            </el-table-column>
            <el-table-column align="center" prop="isDefault" label="是否为默认项">
                 <template slot-scope="scope">
                    {{scope.row.status =='1'?'是':'否'}} 
                 </template>
             </el-table-column>
		   
		</el-table>
		
	</div>  
</template>
<script>
export default {
  name: "Index",
  data() {
    return {
      enName: "",
      tableData: []
    };
  },
  created() {
	  let enName = this.$route.query.enName;
	  this.enName = enName;
    this.dataSubmit();
  },
  methods: {
    dataSubmit() {
      // this.$http.post('api/basics/bank/updateBanksList/{enId}).then(res => {
      // });

      var data = {
        status: 200,
        message: "操作成功",
        list: [
          {
            bankName: "中国工商银行",
            bankId: "1011",
            bankCardNo: "121545451562215",
            telephone: "1351234678",
            createTime: "2018-5-1 12:00:00",
            status: "1",
            isDefault: "0"
          }
        ]
      };
      this.tableData = data.list;
    }
  }
};
</script>
<style scoped lang="scss">
.f-zj {
  font-size: 14px;
  padding: 5px 15px;
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
.el-form {
  padding: 15px 0 0 20px;
  color: #606266;
}
.el-table {
  width: 97%;
  margin: 0 auto;
}
.el-form-item {
  margin-bottom: 15px;
}
.el-container {
  padding: 15px;
  .total {
    display: inline-block;
    line-height: 30px;
    padding-left: 20px;
    font-size: 14px;
  }
}
.el-line {
  height: 2px;
  margin: 10px 15px 0;
  background-color: #f5f5f5;
}
.el-table .cell {
  text-align: center;
}
.el-footer {
  padding: 0;
  .el-pagination {
    padding: 0;
    margin: 10px 15px;
    white-space: initial;
    text-align: right;
  }
}
</style>