<template>
    <div>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
       <el-menu  
         mode="vertical"
         default-active="0"  
         class="el-menu-vertical-demo"  
         text-color="#3C3F41"  
         active-text-color="black" 
         router
         :collapse="isCollapse"
         >  
         <NavMenu :navMenus="leftMenus.childs" :collapse="isCollapse"></NavMenu>  
       </el-menu>





          
    </div>
</template>

<script>
  import NavMenu from './navMenu.vue'
  export default {
    data() {
      return {
        isCollapse:false,
        

      }
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    },
    components:{NavMenu}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
