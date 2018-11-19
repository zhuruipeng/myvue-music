<template>
  <div class="search-container">
    <back></back>
    <div class="searchtop">
      <div class="searchiconfont">
        <input type="text" @keyup.enter="_getseardata" v-model="searchdata">
      </div>
    </div>
    <ul v-for='item in songs' :key="item.id">
      <router-link :to="{path:`/search/${item.id}`,params:{id:item.id}}">
        <li>{{item.name}}</li>
      </router-link>

    </ul>
  </div>
</template>
<script>
  import {getdata} from '@/api/getdata'

  export default {
    name: 'Search',
    data() {
      return {
        searchdata: '',
        songs: []
      }
    },
    created() {
    },
    methods: {
      _getseardata() {
        getdata(`/search?keywords= ${this.searchdata}`).then(res => {
          this.songs = (res.data.result.songs);
        })
      }
    },
    components: {}
  }

</script>

<style scoped>
  .searchtop {
    height: 50px;
    background-color: orangered;
  }

  .searchiconfont {
    position: absolute;
    top: 8px;
    left: 90px;
    overflow: hidden;
  }

  .searchiconfont input {
    outline: none;
    border-radius: 15px;
    opacity: .7;
    height: 100%;
    border: 1px solid #ffff;
  }

  input:focus {
    outline: none;
    border: 1px solid #ffff;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
  }

  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;
  }

  .numsort {
    position: relative;
    top: 10px;
    left: 0px;
  }
</style>
