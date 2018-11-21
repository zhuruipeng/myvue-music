<template>
<div>
  <tab></tab>
  <back></back>
  <slot name="back"></slot>
<ul class="artists">
  <li v-for="item in s" :key="item.id" @click="getsongs(item.id)">
    <img :src="item.img1v1Url" alt="">
    <span>{{item.name}}</span>
  </li>
</ul>
</div>

</template>

<script>
  import Singer from '@/common/singer'
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'

  const HOT_NAME ='热门'
  const HOT_SINGERS = 10


  export default {
    data() {
      return {
        s: []
      }
    },
    name: "singer",
    components: {
      back: Back,
      Tab,
    },
    created(){
      this._getSingers()
    },
    methods: {
      _getSingers() {
        this.$axios.get('/top/artists?offset=0&limit=100')
          .then((res) => {
            this.s = res.data.artists;
            // s.map((item)=>{
            //   let  py = pinyin(item.name[0], {
            //     style: pinyin.STYLE_FIRST_LETTER
            //   })
            //   item.initial = py[0][0].toUpperCase()
            // })
            this.singers = this._normalizeSinger(this.s)
            console.log(singers);
          }).catch(err => {
          console.log('歌手排行榜获取数据失败了');
        })
      },
      getsongs(id) {
        this.$router.push({
          name: "singersongs",
          params: {
            id: id
          }
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGERS) {
            map.hot.items.push(new Singer({
              id: item.id,
              name: item.name,
              avatar: item.img1v1Url,
              aliaName: item.alias.join(' / ')
            }))
          }

          const key = item.initial
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new Singer({
            id: item.id,
            name: item.name,
            avatar: item.img1v1Url,
            aliaName: item.alias[0]
          }))
        })
        let hot = []
        let ret = []
        for (const key in map) {
          let val = map[key]
          if (val.title.match(/[A-Z]/)) {
            ret.push(val)
          } else if (val.title === HOT_NAME) {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        })
        return hot.concat(ret)
      },
    }
    }
</script>

<style scoped>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
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
    font-weight: 400;
    vertical-align: baseline;
  }
</style>
