import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    // 设置属性
    addAccountChoice: [],
    isLogin:false
  },
  getters:{
    // 获取属性的状态
    getAddAccountChoice: state => state.addAccountChoice,
    isLogin:state => state.isLogin
  },
  mutations:{
    // 改变属性的状态
    setAddAccountChoice(state,data){
      state.addAccountChoice = data
    }
  }
})
