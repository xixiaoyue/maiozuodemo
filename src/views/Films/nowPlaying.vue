<template>
  <div class="box">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="300" :immediate-check="false">
          <van-cell v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
            <div style="width: 66px;padding-left: .9375rem; height: 94px; background: rgb(249, 249, 249); float: left; z-index: -1;"><img :src="data.poster" style="width:100%"></div>
                <div class="info">
                    <div class="esp">
                        <span class="name">{{data.name}}</span>
                        <span class="type">{{data.filmType.name}}</span>
                    </div>
                    <div>
                        <span class="label" style="margin-right:5px;">观众评分</span>
                        <span class="grade">{{data.grade}}</span>
                    </div>
                    <div style="height:1.2188rem" class="esp">
                        <span class="label">主演：{{data.actors | actorFliter}}</span>
                    </div>
                    <div>
                        <span class="label">{{data.nation}} | {{data.runtime}}分钟</span>
                    </div>
                </div>
                <div class="buy">购买</div>
          </van-cell>
        </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import http from '@/util/http'
import List from 'vant'
Vue.use(List)
Vue.filter('actorFliter', (data) => { return data.map(item => item.name).join(' ') })
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      page: 1,
      total: 0
    }
  },
  mounted () {
    http.httpForList(1, this.$store.state.cityId).then(res => {
      // console.log(res.data.data)
      this.datalist = res.data.data.films
      this.total = res.data.data.total
      this.loading = false
    })
  },
  methods: {
    onLoad () {
      if (this.datalist.length === this.total) {
        this.finished = true
        return
      }
      this.page++
      http.httpForList(this.page, this.$store.state.cityId).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    },
    handleChangePage (id) {
      this.$router.push(`/film/${id}`)
    }
  }
}
</script>

<style scoped>
.box{
  height: 100%;
}
.van-list__placeholder{
  height: 3.0625rem;
}
.van-cell{
  padding: .9375rem .9375rem .9375rem 0;
    height: 7.8125rem;
    position: relative;
    display: flex;
}
.info{
    width: 13.0625rem;
    height: 5.125rem;
    padding: 0 .625rem;
    float: left;
}
.name{
    font-size: 1rem;
    margin-right: .3125rem;
}
.type{
    font-size: .5625rem;
    color: #fff;
    background-color: #d2d6dc;
    height: .875rem;
    line-height: .875rem;
    padding: 0 .125rem;
    border-radius: .125rem;
}
.grade{
    color: #ffb232;
    font-size: .875rem;
}
.label{
    font-size: .8125rem;
    color: #797d82;
}
.esp{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.buy{
  float: right;
    line-height: 25px;
    height: 25px;
    width: 50px;
    color: #ff5f16;
    font-size: 13px;
    text-align: center;
    border-radius: 2px;
    position: relative;
    top: calc(50% - 12px);
}
.buy::after{
    content: " ";
    -webkit-transform: scale(.5);
    -ms-transform: scale(.5);
    transform: scale(.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}
</style>
