<template>
  <div class="retopbanner">
    <tab></tab>
    <!--min-ui轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(img,index) in imgs" :key="index"><img :src="img.imageUrl" alt=""></mt-swipe-item>
    </mt-swipe>

    <div>
      <mt-badge size="small" color="#ccc">
        <router-link to="/recommendlist" tag="div">
          推荐歌单>
        </router-link>
      </mt-badge>
    </div>
    <!--主页推荐歌单下边内容每行显示3个-->
    <div>
      <!--mint-ui下拉发送请求没有使用-->
      <!--<mt-loadmore :auto-fill='false' :bottom-method="loadBottom" ref="loadmore">-->
      <!--</mt-loadmore>-->
          <ul>
          <li tag="li" v-for="item in personlized" :key="item.id">
            <img :src="item.picUrl" alt="" @click="songsdetail(item.id)">
            <p> {{item.name}}</p>
          </li>
        </ul>

    </div>
  </div>
</template>
<script>
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'

  export default {
    name: 'recommend',
    data() {
      return {
        imgs: [],
        personlized: [],
      }
    },
    components: {
      Back,
      Tab
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
    },
    //获取轮播图
    created() {
      this.$axios.get('banner')
        .then(res => {
          this.imgs = res.data.banners
        })
        .catch(err => {
          console.log('err');
        });
      this.$axios.get('personalized')
        .then(res => {
          this.personlized = res.data.result;
        })
        .catch(err => {
          console.log('err');
        });
      // 获取歌单详情
    }
  }
</script>

<style scoped>
.retopbanner{
/**/
}

  .mint-header {
    background-color: orangered;
  }

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

  .retopbanner {
    /*width:25rem;*/
  }

  .mint-swipe {
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
    list-style: none;
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
    max-height: 120px;
    max-width: 120px;
  }

  ul p {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }

</style>
