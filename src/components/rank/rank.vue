<template>
  <div class="rankcontainer">
    <tab></tab>
    <ul class="rank">
      <li class="rankli">
        <div class="rankimg">
          <img :src="playlists.coverImgUrl" alt="">
          <!--<span class="rankname">{{playlists.name}}</span>-->
        </div>
        <div class="ranktext">
          <ul class="ranktextitem">
            <li v-for="(item,index) in tracks " :key="item.id">{{index+1}}{{item.name}}-{{item.ar[0].name}}</li>
          </ul>
        </div>
      </li>
    </ul>
    <ul class="rank">
      <li class="rankli">
        <div class="rankimg">
          <img :src="playlists1.coverImgUrl" alt="">
          <!--<span class="rankname">{{playlists.name}}</span>-->
        </div>
        <div class="ranktext">
          <ul class="ranktextitem">
            <li v-for="(item,index) in tracks1 " :key="item.id">{{index+1}}{{item.name}}-{{item.ar[0].name}}</li>
          </ul>
        </div>
      </li>
    </ul>
    <ul class="rank">
      <li class="rankli">
        <div class="rankimg">
          <img :src="playlists2.coverImgUrl" alt="">
          <!--<span class="rankname">{{playlists.name}}</span>-->
        </div>
        <div class="ranktext">
          <ul class="ranktextitem">
            <li v-for="(item,index) in tracks2 " :key="item.id">{{index+1}}{{item.name}}-{{item.ar[0].name}}</li>
          </ul>
        </div>
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
      playlists:{},
        tracks:[],
        playlists1:{},
        tracks1:[],  playlists2:{},
        tracks2:[],

    }
    },
    name: "singer",
    components:{
      back:Back,
      Tab,
    },
    watch:{
    },
    created(){
this.$axios.all([
  this.$axios.get('/top/list/?idx=0'),
  this.$axios.get('/top/list/?idx=1'),
  this.$axios.get('/top/list/?idx=2'),
])
  .then(this.$axios.spread((res1,res2,res3)=>{
    this.tracks =(res1.data.playlist.tracks.splice(0,3));
    this.playlists =res1.data.playlist
    this.tracks1 =(res2.data.playlist.tracks.splice(0,3));
    this.playlists1 =res2.data.playlist
    this.tracks2 =(res3.data.playlist.tracks.splice(0,3));
    this.playlists2 =res3.data.playlist
  }))



    }
  }
</script>

<style scoped>
  .rankcontainer{
    background:#f2f3f4 ;
  }
  .rankli{
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
  padding: 5px 15px;
}
  .rankimg{
    height: 100px;
    width: 100px;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .ranktext{
    margin-left: 30px;
    height: 100px;

  }
  .ranktextitem{
    height: 100px;
  }
  .ranktextitem li{
    height: 33px;
    font-size: 12px ;
    display: flex;

  }
</style>
