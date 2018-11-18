<template>
  <div id="app">
    <router-view></router-view>
<foot></foot>
  </div>
</template>
<script>
  import Recommend from '@/components/recommend/recommend'
  import Footer from '@/components/Tab/footer'
  export default {
  name: 'App',
    data(){
    return{
      active:'tab-container1'
    }
    },
  components: {
    recommend:Recommend,
    foot:Footer
  },
    methods: {
      back() {
        if (window.history.length <= 1) {
          this.$router.push({path: '/'})
          return false
        } else {
          this.$router.go(-1)
        }
        //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
        //如果上面都执行了 页面都跳走了，这个也就不用管了
        setTimeout(() => {
          this.$router.push({path: '/'})
        }, 500)
      }
    }
}
</script>

<style>
body{
  margin: 0;
  padding:0;
}
.homeiconfont{
  position: absolute;
  font-size: 25px;
  /*padding-left: 15px;*/
  top: 8px;
  left: 15px;
  z-index: 999;
  color: #fff;
}
</style>
