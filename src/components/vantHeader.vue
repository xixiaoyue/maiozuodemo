<template>
  <div id="svantheander">
    <van-nav-bar id="vantheander" :title="title" :fixed="true" :safe-area-inset-top="true" @click-left="handleleft" @click-right="handleright">
      <template  #left >
        {{$store.state.cityName}}<van-icon name="arrow-down" color="#191a1b" size=" .8125rem" />
      </template>
      <template #right>
        <van-icon name="search" slot="right" />
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
import { NavBar, Icon } from 'vant'

import Vue from 'vue'
import 'vant/lib/index.css'
Vue.use(NavBar)
Vue.use(Icon)
export default {
  mounted () {
    document.getElementById('svantheander').style.height =
      document.getElementById('vantheander').offsetHeight + 'px'
  },
  props: {
    title: {
      type: String,
      default: '请输入'
    }
  },
  methods: {
    handleleft () {
      this.$router.push('/city')
    },
    handleright () {
      this.$router.push('/cinemas/search')
    }
  }
}
</script>

<style scoped>
</style>
