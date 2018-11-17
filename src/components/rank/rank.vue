<!--suppress ALL -->
<template>
  <div class="rankcontainer">
    <tab></tab>
    <ul class="rank">
      <li class="rankli" v-for ='item in yunTopList' :key="item.id" @click="selectItem(item)">
        <div class="rankimg">
          <img :src="item.coverImgUrl" alt="">
        </div>
        <div class="ranktext">
          <ul class="ranktextitem">
            <li v-for="(item,index) in item.top " :key="item.id">{{index+1}}{{item.name}}-{{item.ar[0].name}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'
  const music_top = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
  export default {
    data() {
      return {
        yunTopList: []
      }
    },
    name: "singer",
    components:{
      back:Back,
      Tab,
    },
    methods:{
      selectItem(item){
        this.$router.push({
          path:`/rank/${item.id}`
        })
      },
      _getTopList(){
        for (let i = 0; i <music_top.length ; i++) {
          this.$axios.get(`top/list?idx=${music_top[i]}`)
            .then(res=>{
              let list = res.data.playlist
              list.top= res.data.playlist.tracks.splice(0, 3)
              this.yunTopList.push(list)
              // console.log(list)
            })
        }
      }
      },
    created() {
      this._getTopList()
      //自己写的笨方法警示自己不删除
      // this.$axios.all([
      //     this.$axios.get('/top/list/?idx=0'),
      //     this.$axios.get('/top/list/?idx=1'),
      //     this.$axios.get('/top/list/?idx=2'),
      //   ])
      //   .then(this.$axios.spread((res1, res2, res3) => {
      //     this.tracks = (res1.data.playlist.tracks.splice(0, 3));
      //     this.playlists = res1.data.playlist
      //     this.tracks1 = (res2.data.playlist.tracks.splice(0, 3));
      //     this.playlists1 = res2.data.playlist
      //     this.tracks2 = (res3.data.playlist.tracks.splice(0, 3));
      //     this.playlists2 = res3.data.playlist
      //   }))
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
