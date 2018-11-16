<template>
  <div>
    <tab></tab>
    <slot name="back"></slot>
 <h1>paihang</h1>
  </div>

</template>

<script>
  import Back from '@/components/back/back'
  import Tab from '@/components/tab/tab'

  export default {
    data(){return{

    }},
    name: "singer",
    components:{
      back:Back,
      Tab,
    },
    watch:{
    }


  }
</script>

<style scoped>

</style>
