<template>
  <div>
      <ul>
        <li>
          <i  class="iconfont footericonfont">&#xe669;</i>
          <span>发现</span>
        </li>
        <li>
          <i  class="iconfont footericonfont"> &#xe64a;</i>
          <span>视频</span>
        </li>
        <li>
          <i  class="iconfont footericonfont">&#xe680;</i>
          <span>我的</span>
        </li>
        <li>
          <i  class="iconfont footericonfont">&#xe609;</i>
          <span>朋友</span>
        </li>
        <li>
          <i class="iconfont footericonfont">&#xe66c;</i>
          <span>账号</span>
        </li>
      </ul>
    </div>

</template>
<script>
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'
  export default {
    data(){
      return{
      }
    },
    name: "rank",
    components:{
      back:Back,
      Tab,
    },
    watch:{
      selected: function (newv,oldv) {
        console.log(newv,oldv)
      }
    }
  }
</script>

<style scoped>
  ul{
    position: fixed;
    bottom: -16px;
    width: 100%;
    background: #fff;
    padding: 0px;
    display: flex;
    flex-wrap: wrap;
    height: 40px;
    list-style: none;
  }
  li{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content:space-between;
    text-align: center;

    width: 20%;
  }
  .footericonfont{
    font-size: 18px;
    color: #666;
  }
  li>span{
    font-size: 10px;
    color:#666666;
  }

</style>
