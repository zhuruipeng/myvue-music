<template>
  <div class="retopbanner">
    <!--scroll 轮播图初始化数据的时候不滚动还得继续研究-->
    <!--<scroll :data="personlized" ref="scroll">-->
    <tab></tab>

    <!--min-ui轮播图 keepalive dom 缓存到内存中-->
    <keep-alive>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.imageUrl" alt="" >
      </mt-swipe-item>
    </mt-swipe>
    </keep-alive>
    <div>
        <router-link to="/recommendlist" tag="div" class="recommendlist">
          推荐歌单
        </router-link>
    </div>
    <!--主页推荐歌单下边内容每行显示3个-->
    <div>
      <!--mint-ui下拉发送请求没有使用-->
      <!--<mt-loadmore :auto-fill='false' :bottom-method="loadBottom" ref="loadmore">-->
      <!--</mt-loadmore>-->
      <ul>
        <li tag="div" v-for="item in personlized" :key="item.id">
          <img v-lazy="item.picUrl" alt="" @click="songsdetail(item.id)">
          <p> {{item.name}}</p>
        </li>
      </ul>
    </div>
    <!--</scroll>-->
  </div>
</template>
<script>
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'
  // import Scroll from '../../base/scoll'
  export default {
    name: 'recommend',
    data() {
      return {
        imgs: [],
        personlized: []
      }
    },
    components: {
      Back,
      Tab,
      // scroll:Scroll
    },
    methods: {
      songsdetail(id) {
        this.$router.push({
          name: 'songsdetail',
          params: {
            id: id
          }
        })
      },
      _getLunBotu() {
        this.$axios.get('banner')
          .then(res => {
            this.imgs = res.data.banners
          })
          .catch(err => {
            console.log('err');
          });
      },
      _getRecommendlist () {
        //获取推荐页面内容歌曲
        this.$axios.get('personalized')
          .then(res => {
            this.personlized = res.data.result;
          })
          .catch(err => {
            console.log(err);
          })
       },
      // loadImage(){
      //   if(!this.checkloaded){
      //     this.$refs.scroll.refresh()
      //     this.checkloaded=true
      //   }
      //
      // }
    },
    //获取轮播图  主页
    created() {
      this._getLunBotu()
     this._getRecommendlist ()
    }
  }
</script>

<style scoped>
  .header {
    display: flex;
    background-color: orangered;
    width: 100%;
  }
  .headerchoice {
    width: 33.33%;
    padding-top: 10px;
    padding-left: 50px;
    text-decoration: none;
    font-size: 13px;
    color: #fff;
  }
  .router-link-active {
    color: #fff;
    font-weight: 700;
  }
  .mint-swipe {
    width: 100%;
    height: 150px;
  }
  .mint-swipe img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  ul {
    padding: 0;
    margin-top: 1px;
    display: flex;
    flex-wrap: wrap;
  }
  ul li {
    margin: 5px;
    width: 30%;
  }
  li img {
    width: auto;
    height: auto;
    padding: 5px;
    max-height: 120px;
    max-width: 120px;
  }
  ul p {
    margin: 0;
    padding: 0px;
    font-size: 12px;
  }
  .recommendlist{
    font-size: 14px;
    font-weight: 700;
    background-color: #fff;
    color:#000000;
  }
</style>
