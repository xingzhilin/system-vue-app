<template>
	<el-footer style="height:auto">
	    <el-pagination
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      @prev-click="handlePrevChange"  
	      @next-click="handleNextChange"
	      :current-page="currentPage"
	      :page-sizes="pageSizes"
	      :page-size="pageSize"
	      layout="total, sizes, prev, pager, next, jumper"
	      :total="totalPage">
	    </el-pagination>
	</el-footer>
</template>
<script>
	export default {
		name: 'Index',
		props: [], 
		data(){
			return {
				msg: '分页组件',
				pageSize: 10,
				pageSizes: [2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
		        _tableData: []
			}
		},
		created(){
			var sParams = { toPage: 1, pageSize: this.pageSize};
			console.log(sParams);
			this.$axios.post('http://192.168.11.31:9001/v1/basics/access/listAccess', sParams , {
					headers:{ "Content-Type": "application/json"}
				})
				.then(res =>  {
						if(res.status == 200){
							this.totalPage = res.data.total;
							this.currentPage =res.data.pageNum;
							this.pageSize = res.data.pageSize;
							console.log('***********************************');
							console.log(res);
							this._tableData = res.data.list;
							eventBus.$emit('tableData', this._tableData);
						}
				})
				.catch(function (error) {
					console.log(error);
				})
		},
		methods: {			
		    handlePrevChange(val){
		    	console.log(`上一页 ${val} 条`)
		    },
		    handleNextChange(val){
		    	console.log(`下一页 ${val} 条`)
		    },
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		        this.pageSize = val;
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		    }
		}
	}
</script>
<style>
	
</style>