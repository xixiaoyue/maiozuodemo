<template>
  <div>
    <div class="b" >
      <vant-header title="电影" v-if="isShow"></vant-header>
      <my-header :isfle="isShow"></my-header>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vantHeader from '@/components/vantHeader'
import myHeader from '@/components/myHeader'

export default {
  components: {
    vantHeader,
    myHeader
  },
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 300) {
        this.isShow = true
      } else {
        this.isShow = false
      }
      // console.log(document.documentElement.scrollTop, this.isShow)
    }
  },
  destroyed () {
    window.onscroll = null
  }
}
</script>
<style scoped>
div.b{
  /* height: 80px; */
  position: relative;
}
</style>
