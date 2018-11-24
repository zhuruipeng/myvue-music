<template>

<div class="playbutton">
  <back></back>
  <div>
    <img :src="songsurl" alt="">
  </div>
  <aplayer autoplay  listMaxHeight
           v-for ='item in songs' :key="item.id"
           :music="{
    title: songsname,
    artist: autorname,
    src:item.url,
    lrc:lyrics,
    pic: songsurl,

  }"
           showLrc
           mutex
  />
<ul>
  <!--播放过的歌曲-->
<!--<li >-->
<!--{{$store.getters.getId}}-->
<!--</li>-->
</ul>
</div>
</template>
<script>
  export default {
    methods: {
    },
    components:{

    },
    name: "playsong",
    data() {
      return {
        songs: [],
        lyrics: '',
        showLrc:true,
        mini :true,
        listMaxHeight:'500px',
        songsdetail:[],
        songsname:'',
        songsurl:'',
        autorname:'',


      }
    },
    computed:{

    },
    props:[

     ],
    methods: {},
    created() {
      //获取歌单
      let id = this.$route.params.id
      this.$axios.get('song/url?id=' + id)
        .then(res => {
          this.songs = res.data.data
          console.log(this.songs);
        }).catch(err => {
        console.log('播放列表获取失败了');
      });
      //获取歌词
      this.$axios.get('lyric?id=' + id)
        .then(res => {
          this.lyrics = res.data.lrc.lyric
        }).catch(err => {
        console.log('播放列表获取失败了');
      });
      //获取歌曲详情注意:歌曲封面现在需要通过专辑内容接口获取 找不到
      this.$axios.get('/song/detail?ids=' + id)
        .then(res => {
          this.songsdetail = res.data.songs.forEach(item=>{
            this.songsurl= item.al.picUrl
            this.autorname= item.ar[0].name;
            this.songsname=item.name
          })
        }).catch(err => {
        console.log('播放列表获取失败了');
      });
    }
  }

</script>

<style scoped>
.playbutton{
  position: fixed;

}
img{
  width: 100%;
  height: 100%;
  max-height: 300px;
  max-width: 500px;

}
</style>
