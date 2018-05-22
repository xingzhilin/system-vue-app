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
				tableData: [],
				pageSize: 10,
				pageSizes:[2, 3, 5, 10],
		        currentPage: 1,
		        totalPage: null,
				sParams: {},
		        _tableData: []
			}
		},
		mounted(){},
		methods: {	
		    handlePrevChange(val){
		    	console.log(`上一页 ${val} 条`)
		        this.pageSize = val;
		    },
		    handleNextChange(val){
		    	console.log(`下一页 ${val} 条`)
		        this.pageSize = val;
		    },
			handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		        this.pageSize = val;
		        console.log(this.pageSize);
				this.initList(this.currentPage, this.pageSize);
		    },
		    handleCurrentChange(val) {
		        console.log(`当前页: ${val}`);
		        this.currentPage = val;
				this.initList(this.currentPage, this.pageSize);
		    },
		    initList(){
		    	 this.$emit('childInitList', this.sParams); 
	                //第一个参数名为调用的方法名，第二个参数为需要传递的参数
		    }
		}
	}
</script>
<style>
	
</style>