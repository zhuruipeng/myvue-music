// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入播放组件
import APlayer from 'vue-aplayer';
//引入mint-ul组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './icon/iconfont.css'
import './common/common.css'
Vue.use(MintUI)
import Axios from 'axios'
Axios.defaults.baseURL = 'http://www.findcf.com:3000/';
Vue.prototype.$axios = Axios;
/* eslint-disable no-new */
Vue.component('aplayer', APlayer)
new Vue({
  el:"#app",
  router,
  components: { App  },
  template: '<App/>'
})
