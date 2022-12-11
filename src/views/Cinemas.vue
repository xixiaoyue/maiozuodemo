<template>
  <div>
    <div>
      <vant-header title="影院"></vant-header>
    </div>
    <div>
        <div class="box">
          <ul>
          <li v-for="data in $store.state.cinemasList" :key="data.cinemaId">
            <div class="left">
              <div class="cinema-name">{{data.name}}</div>
              <div class="cinema-text">{{data.address}}</div>
            </div>
            <div class="right cinema-name">
              <div style="color:#ff5f16">￥{{data.lowPrice/100}}起</div>
            </div>
          </li>
        </ul>
        </div>
    </div>
  </div>
</template>
<script>
import vantHeader from '@/components/vantHeader.vue'
import BetterScroll from 'better-scroll'
export default {
  data () {
    return {
      cinemalist: []
    }
  },
  mounted () {
    if (this.$store.state.cinemasList.length === 0) {
      this.$store.dispatch('changecinemas', this.$store.state.cityId).then(() => {
        new BetterScroll('.box', {
          scrollbar: {
            fade: true
          }
        })
      })
    } else {
      new BetterScroll('.box', {
        scrollbar: {
          fade: true
        }
      })
    }
    // shttp({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=3112560`,
    //   headers: {
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then((res) => {
    //   // console.log(res.data.data.cinemas)
    //   this.cinemalist = res.data.data.cinemas
    // console.log(document.documentElement.getElementsByTagName('li').length)
    // this.$nextTick(() => {
    //   // console.log(document.documentElement.getElementsByTagName('li').length) 确定dom已经完全上树
    //   new BetterScroll('.box', {
    //     scrollbar: {
    //       fade: true
    //     }
    //   })
    //   })
    // })
  },
  components: {
    vantHeader
  }
}
</script>

<style scoped>
li{
  padding: .9375rem;
  height: 2.8438rem;
  display: flex;
  justify-content: space-between;
}
.left{
  width: 13.25rem;
}
.cinema-text{
  color: #797d82;
  font-size: .75rem;
  margin-top: .3125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cinema-name{
  font-size: .9375rem;
}
.box{
  height: 35.9375rem;
  overflow: hidden;
  position: relative;
}
</style>
