<template>
  <ul>
    <back></back>
    <li v-for="item in playlists" :key="item.id">
      <img :src="item.coverImgUrl" alt="">
      <p>{{item.name}}</p>
    </li>
  </ul>
</template>
<script>

  export default {
        name: "recommendlist",
      data(){
        return{
          playlists:[]
        }
      },
      created(){
        //获取推荐歌单次页面
        let id = 1
        this.$axios.get('related/playlist?id='+id)
          .then(res=>{
            this.playlists=(res.data.playlists);
          })
          .catch(err=>{
            console.log('点击推荐歌单获取5个的地方失败了');
          })

      },


    }
</script>

<style scoped>
  ul{
    padding: 0;
    margin-top:1px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  }
  li{
    margin-left: 5px;
    width: 48%;
  }
  li img{
    width: 180px;
    height:180px;
  }
  ul p{
    margin: 0;
    padding: 0;
    font-size: 13px;
  }
</style>
