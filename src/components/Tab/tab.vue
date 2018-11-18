<template>
  <div class="topheader">
    <div class="searchiconfont" >
      <input type="text"  @click="showsearch" >
    </div>
    <!--<i class="iconfont searchiconfont">&#xe60a;</i>-->
    <i class="iconfont microphone">&#xe642;</i>
    <div class="header">
      <router-link tag="div" class="headerchoice" to="/recommend">推荐</router-link>
      <router-link tag='div' class="headerchoice" to="/rank">排行</router-link>
      <router-link tag="div" class="headerchoice" to="/singer">歌手</router-link>
    </div>

  </div>

</template>
<script>
  export default {
    name: 'tab',
    methods:{
      showsearch(){
        this.$router.push({
          name:'Search'
        })
      }
    },
    components:{
    }
  }
</script>

<style scoped>
  .topheader {
    height: 60px;
    background-color: orangered;
  }

  .header {
    display: flex;
    background-color: orangered;
    width: 100%;
  }

  .headerchoice {
    width: 33.33%;
    padding-top: 35px;
    padding-left: 50px;
    text-decoration: none;
    font-size: 13px;
    color: #fff;
  }

  .router-link-active {
    color: #fff;
    font-weight: 700;
  }

  .retopbanner {
    /*width:25rem;*/
  }

  .mint-swipe {
    height: 150px;
  }

  .searchiconfont {
    position: absolute;
    top: 8px;
    left: 90px;
    overflow: hidden;
  }
  .searchiconfont input {
    outline: none;
    border-radius: 15px;
    opacity: .7;
    height: 100%;
    border: 1px solid #ffff;
  }
  input:focus{
    outline: none;
    border: 1px solid #ffff;
  }

  .microphone {
    z-index: 999;
    position: absolute;
    top: 7px;
    right: 8px;
    color: #fff;
    font-size: 20px;
  }
</style>
