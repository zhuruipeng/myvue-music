
<template>
  <!--这是一个公共组件每一个歌曲详情列表上边是图片，下边是歌曲-->

  <div class="commonstyle" slot="commontopbar">
    <h3> 歌单 </h3>
    <back></back>
    <div class="topcover">
      <img class="authorimg" :src="songsdetail.coverImgUrl" alt="">
      <div class="topcovername">

        <h4>
          {{songsdetail.name}}
        </h4>
      </div>

      <div  class="bottomsonglsit">
        <h5>播放全部</h5>
        <ul>
          <li v-for="(item,index) in tracks " class="songsname" @click="getsong(item.id)">{{index+1}}{{'  '}}{{item.name}}
            <br>
            <span v-for="i in item.ar" class="autor">{{i.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {getdata} from '@/api/getdata'
  export default {
    name: "recommend",
    data(){
      return{
        songsdetail:{},
        tracks:[],
      }
    },
    created(){
      let id = this.$route.params.id
      getdata(`/playlist/detail?id=${id}`)
        .then(res => {
          this.songsdetail=res.data.playlist
          // console.log(res.data);
          this.tracks=(res.data.playlist.tracks)
        })
        .catch(err => {
          console.log('获取歌曲失败了');
        });

    },
    methods:{
      getsong(id){
        this.$router.push({
          name:'playsong',
          params: {
            id: id
          }
        })
      }
    },
  }
</script>

<style scoped>
  h3 {
    position: relative;
    top: 05px;
    left: 47px;
    color: #ccc;
    font-size: 18px;
    z-index: 999;
  }
  .commonstyle{
background-color:lightgrey;
  }
  .topcover{
    /*height: 260px;*/
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
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
  }
  li{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;
    font-size: 13px;
    height: 20px;
  }
  .autor{
    font-size: 10px;
  }
  .numsort{
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
    max-height:300px;
  }

</style>
