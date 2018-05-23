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
    getCurrentUser: state => state.currentUser,
    getAddAccountChoice: state => state.addAccountChoice,
    isLogin:state => state.isLogin,
    isPc:state => state.isPc
  },
  mutations:{
    // 改变属性的状态
    accessTokenStatus(state,token){
      if(token){
        state.accessToken = token;
        state.isLogin = true;
      }else{
        state.accessToken = '';
        state.isLogin = false;
      }
     
    },
    // 更改用户的状态信息
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
    setAccessToken({ commit },token){
      commit("accessTokenStatus",token)
    },
    isPc(context){
        context.commit('isPc')
    }
  }
})

store.dispatch('isPc');