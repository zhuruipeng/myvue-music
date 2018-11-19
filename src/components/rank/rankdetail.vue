<template>

  <div>
    <back></back>
  <tab></tab>

<ul  v-for="item in tracks">
  <li v-for = 'i in item.tracks '>{{i.first}}---{{i.second}}</li></ul>
  </div>
</template>
<script>
	export default {
		name: 'rankdetail',
    data(){
		  return {tracks :[]}
    },
    created(){
      this.$axios.get('/toplist/detail')
        .then(res => {
          this.tracks=(res.data.list)
          console.log(res.data.list);
        })
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
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;}
</style>
