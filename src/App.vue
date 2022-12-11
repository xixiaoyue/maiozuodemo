<template>
  <div id="app">
    <my-navibar></my-navibar>
    <router-view></router-view>
  </div>
</template>
<script>
import myNavibar from '@/components/myNavibar.vue'
export default {
  components: {
    myNavibar
  }
}
</script>
<style>
#app{
  height: 100%;
  width: 23.4375rem;
  overflow-x: hidden;
}

</style>
