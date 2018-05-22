import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    // 设置属性
    accessToken: '',    
    currentUser: null,
    addAccountChoice: [],
    isLogin:false,
    isPc:true,
  },
  getters:{
    // 获取属性的状态
    getAccessToken: state => state.accessToken,
    currentUser:state => state.currentUser,
    getAddAccountChoice: state => state.addAccountChoice,
    isLogin:state => state.isLogin,
    isPc:state => state.isPc
  },
  mutations:{
    // 改变属性的状态
    setAccessToken(state,data){
      state.accessToken = data;
    },
    // 更改用户的状态信息
    userStatus(state,user){
      if(user){
        state.currentUser = user
        state.isLogin = true
      }else{
        state.currentUser = null
        state.isLogin = false
      }
    },
    setAddAccountChoice(state,data){
      state.addAccountChoice = data
    },
    isPc(state){
      if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) { //移动端
          state.isPc = false;
          return;
      }
       state.isPc = true;
    }
  },
  actions:{
    // 应用mutations
    setUser({commit},user){
      commit("userStatus",user)
    },
    isPc(context){
        context.commit('isPc')
    }
  }
})

store.dispatch('isPc');