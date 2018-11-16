<template>
<div>
  <tab></tab>
  <slot name="back"></slot>
<ul class="artists">
  <li v-for="item in artists" :key="item.id" @click="getsongs(item.id)">
    <img :src="item.img1v1Url" alt="">
    <span>{{item.name}}</span>
  </li>
</ul>
</div>

</template>

<script>
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'

  export default {
    data() {
      return {
        artists: []
      }
    },
    name: "singer",
    components: {
      back: Back,
      Tab,
    },
    created(){
      this.$axios.get('/top/artists?offset=0&limit=100')
        .then(res=>{
          this.artists= res.data.artists;
        }).catch(err=>{
        console.log('歌手排行榜获取数据失败了');
      })
    },
    methods:{
      getsongs(id){
        this.$router.push({
          name:"singersongs",
          params:{
            id:id
          }
        })
      }
    },
    watch:{
      }


    }
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;  }
  li{
    display: flex;
    align-items: center;
    padding: 5px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;
  }
  li img{
    width: 50px;
    height: 50px;
    border-radius: 3px;
  }
  span{
    margin-left: 20px;
    color: #2e3030;
    font-size: 14px;
    padding: 0;
    border: 0;
    font-weight: 400;
    vertical-align: baseline;
  }
</style>
