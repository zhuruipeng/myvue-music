// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import  'babel-polyfill'
// import fastclick from 'fastclick'
// fastclick.attach(document.body)
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
//引入播放组件
import APlayer from 'vue-aplayer';
// VueAPlayer.disableVersionBadge = true
//引入mint-ul组件
//懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  // preLoad: 1.3,
  // error: '@/assets/logo.png',
  loading: 'dist/logo.png',
  attempt: 1
})
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './icon/iconfont.css'
import './common/common.css'
import Back from './components/back/back'
Vue.use(MintUI)
import Axios from 'axios'
Axios.defaults.baseURL = 'http://www.findcf.com:3000/';
Vue.prototype.$axios = Axios;
//拦截器请求显示loading
// Axios.interceptors.request.use(function (config) {
//  MintUI.Indicator.open({
//     text: 'emem有点慢...',
//     spinnerType: 'snake'
//   });
//   return config;
// });
// //拦截器相应关闭loading  参考github axios
// Axios.interceptors.response.use(function (response) {
//   MintUI.Indicator.close();
//   return response;
// });
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{
    //音乐id 播放地址 名字
    musicList: []
    ,
    singer: {},
    playlist: [],
  },
  mutations :{
    addToSonglist(state,songlist){
        state.musicList.push(songlist)
    }
  },
  getters:{
    getId(state){
      var c =[]
      state.musicList.forEach(item=>{
        c.push(item.id)
      })
      return c
    }
  },
})



/* eslint-disable no-new */
Vue.component('aplayer', APlayer)
Vue.component('back',Back)
new Vue({

  router,
  store,
  components: { App  },
  template: '<App/>'
}).$mount('#app')

