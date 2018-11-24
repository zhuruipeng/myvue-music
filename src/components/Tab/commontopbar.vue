<template>
  <!--这是一个公共组件每一个歌曲详情列表上边是图片，下边是歌曲  歌手-歌单 详情列表-->
  <div class="commonstyle" slot="commontopbar">  <h3> 歌单 </h3>
<!--<scroll :data='songslist'></scroll>-->
    <div class="topcover">
      <img class="authorimg" v-lazy="artisinfo.img1v1Url" alt="">
      <div class="topcovername">
        <h2>
         {{artisinfo.name}}
        </h2>
      </div>
      <div  class="bottomsonglsit">

        <ul>
          <h4>播放全部</h4>
          <li @click="songsdetail(item.id)" v-for="(item,index) in songslist" :key="item.id"><span class="numsort">{{index+1}}{{'  '}}</span>{{item.name}}
           <span class="autorname">{{item.ar[0].name}}</span>
          </li>
        </ul>
        </div>
    </div>
  </div>
</template>
<script>
  import SCroll from '../../components/Tab/scroll'
    export default {
      name: "commontopbar",
      components:{
        scroll:SCroll
      },
      data() {
        return {}
      },
      props: ['songslist', 'artisinfo'],
      methods: {
        songsdetail(id) {
          this.$router.push({
           path: `/singersongs/${id}`,
          })
          //尝试获取歌曲列表
          var  songlist = {id:this.$route.params.id};
          this.$store.commit('addToSonglist',songlist)
        }
      },

      //获取歌单id
      // created() {
      //   this.$axios.get('banner')
      //     .then(res => {
      //       this.imgs = res.data.banners
      //     })
      //     .catch(err => {
      //       console.log('err');
      //     });
      //   this.$axios.get('personalized')
      //     .then(res => {
      //       this.personlized = res.data.result;
      //       console.log(res);
      //     })
      //     .catch(err => {
      //       console.log('err');
      //     });
      // }
    }
</script>

<style scoped>
  h3 {
    position: relative;
    top: 5px;
    left: 47px;
    color: #fff;
    font-size: 18px;
    z-index: 999;
  }
  .commonstyle{

  }
.topcover{
  height: 260px;

}
  .topcovername{
    position: absolute;
    height: 40px;
    top: 180px;
    left: 15px;
    color: #fff;
  }
  .bottomsonglsit{
    margin-top: 210px;
    border-radius: 10px;
    position: relative;
    background: #f2f3f4;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;  }
  li{
    display: flex;
    flex-wrap: wrap;
   justify-content: space-between;
    padding: 20px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;
  }.numsort{
       position: relative;
       top: 10px;
       left:0px;
     }
  .autorname{
    font-size: 10px;
    color: #888;
  }
  .authorimg{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    max-width:500px ;
    max-height:320px;
  }
  h4{
   /*height: 10px;*/
    /*text-align: left;*/
  }

</style>
