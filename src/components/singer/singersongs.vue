<template>
  <div>
    <back></back>
    <common :songslist="songslist" :artisinfo="artist"></common>
  </div>

</template>

<script>
  import Commontopbar from '@/components/Tab/commontopbar'
    export default {
        name: "singersongs",
      data(){
          return{
      songslist:[],
            artist:{}
          }
      },
      components:{
       common:Commontopbar      },
      created() {
        //获取歌手歌单
        let id = this.$route.params.id
        this.$axios.get('/artists?id=' + id)
          .then(res => {
            this.songslist = res.data.hotSongs
            this.id = res.data.hotSongs.id
            // console.log(this.songslist);
            this.artist = res.data.artist
          }).catch(err => {
          console.log('获取歌手歌单失败了呢');
        })
      }

    }
</script>

<style scoped>

</style>
