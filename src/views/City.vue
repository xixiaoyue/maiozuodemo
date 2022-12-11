<template>
  <div class="city">
    <van-index-bar :index-list="computedList" @select="handleletter">
    <div  v-for="data in citylist" :key="data.type">
      <van-index-anchor :index="data.type"/>
      <van-cell :title="list.name " v-for="list in data.list" :key="list.cityId" @click="setCity(list)"/>
    </div>
  </van-index-bar>
  </div>
</template>

<script>
import shttp from '@/util/shttp'
import Vue from 'vue'
import { IndexBar, IndexAnchor, Toast } from 'vant'
import obj from '@/util/navmixins'
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Toast)
export default {
  mixins: [obj],
  data () {
    return {
      citylist: []
    }
  },
  computed: {
    computedList () {
      return this.citylist.map(item => item.type)
    }
  },
  mounted () {
    shttp({
      url: '/gateway?k=4223494',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then((res) => {
      // console.log(res.data.data.cities)
      this.randerdata(res.data.data.cities)
    })
  },
  methods: {
    randerdata (list) {
      // console.log(list)
      const indexList = []
      for (let i = 65; i < 91; i++) {
        indexList.push(String.fromCharCode(i))
      }
      indexList.forEach(index => {
        const tittlelist = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === index)
        tittlelist.length > 0 && this.citylist.push({
          type: index,
          list: tittlelist
        })
        // console.log(tittlelist)
      })
      // console.log(this.citylist)
    },
    handleletter (data) {
      Toast(data)
    },
    setCity (item) {
      this.$store.commit('changecity', item.name)
      this.$store.commit('changecityid', item.cityId)
      console.log(this.$store.state.cityName, this.$store.state.cityId)
      this.$store.commit('changecinemalist', [])
      this.$router.back()
    }
  }
}
</script>
<style>
.city>.van-toast--text{
  min-width: 17px;
}
</style>
