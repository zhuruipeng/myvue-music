<template>
  <div class="topheader">
    <mt-header title="vuemusic"></mt-header>
    <div class="header">
      <router-link  tag="div" class="headerchoice" to="/recommend" >推荐</router-link>
      <router-link  tag= 'div' class="headerchoice" to="/rank">排行</router-link>
      <router-link tag="div" class="headerchoice" to="/singer">歌手</router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tab"
    }


</script>

<style scoped>
  .topheader{

  }
  .mint-header{
    background-color: orangered;
  }
  .header{
    display:flex;
    background-color: orangered;
    width:100%;
  }
  .headerchoice{
    width: 33.33%;
    padding-top :10px;
    padding-left: 50px;
    text-decoration: none;
    font-size: 13px;

    color: #fff;
  }
  .router-link-active{
    color: #fff;
    font-weight: 700;
  }
  .retopbanner {
    /*width:25rem;*/
  }

  .mint-swipe {
    height: 150px;
  }

</style>
