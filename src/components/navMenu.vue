<template>  
  <div class="navMenu">  
  
    <label v-for="navMenu in navMenus">  
      <el-menu-item v-if="navMenu.childs==null&&navMenu.entity"  
                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" >  
        <i :class="navMenu.entity.icon"></i>  
        <span slot="title">{{navMenu.entity.alias}}</span>  
      </el-menu-item>  
  
      <el-submenu v-if="navMenu.childs&&navMenu.entity"  
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">  
        <template slot="title">  
          <i :class="navMenu.entity.icon"></i>  
          <span slot="title" :class="collapse?'hide':''"> {{navMenu.entity.alias}}</span>  
        </template>  
        <NavMenu :navMenus="navMenu.childs"></NavMenu>  
      </el-submenu>  
    </label>  
    








  </div>  
</template>  
  
<script>  
  export default {  
    name: 'NavMenu',  
    props: ['navMenus','collapse'],  
    data() {  
      return {}  
    },  
    methods: {}  
  }  
</script>  
  
<style scoped>  
/*elemet全局样式不生效,手动判断添加隐藏样式*/
  .hide {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
</style>