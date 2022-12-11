<template>
    <div style="" v-if="filmdata">
        <div class="title">
          <div style="position:fixed;top:.3125rem;"><van-icon name="arrow-left" size="1.875rem" @click=iconback() /></div>
          <div class="filmtitle" v-if="ishidde">{{filmdata.name}}</div>
        </div>
        <div class="img"><img class="navimg" style="width:100%" :src=filmdata.poster></div>
        <div class="film-detail">
          <div class="col">
            <div class="film-name">
              <span class="name">{{filmdata.name}}</span>
              <span class="item">{{filmdata.filmType.name}}</span>
            </div>
            <div class="film-grade">
              <span class="grade">
                {{filmdata.grade}}
              </span>
              <span class="grade-text">
                分
              </span>
            </div>
          </div>
          <div class="film-category grey-text">{{filmdata.category}}</div>
          <div class="film-premiere-time grey-text">{{filmdata.premiereAt|dataFilter}}上映</div>
          <div class="film-nation-runtime grey-text">{{filmdata.nation}} | {{filmdata.runtime}}分钟</div>
          <div class="film-synopsis grey-text" :class="{'hidde':iconshow}">{{filmdata.synopsis}}</div>
          <div class="toggle"><van-icon :name="iconshow?'arrow-down':'arrow-up'" color="#797d82" @click="changeHidde()"/></div>
        </div>
        <div class="actors">
          <div class="actors-title-bar"><span class="actors-title-text">演职人员</span></div>
          <div style="height: 140px; display: block; text-align: center;">
              <my-swiper  container="cc" :views=4 :Between=15 >
                <div class="swiper-slide" v-for="actor in filmdata.actors" :key="actor.name">
                  <div class="actor-img"><img :src="actor.avatarAddress"></div>
                  <div class="actor-name">{{actor.name}}</div>
                  <div class="actor-item">{{actor.role}}</div>
                </div>
              </my-swiper>
          </div>
        </div>
        <div class="photos">
          <div class="photos-title-bar">剧照</div>
          <div class="photos-list">
            <my-swiper  container="CC" :views=2.5 :Between=10 >
                <div class="swiper-slide photo" v-for="(photo,index) in filmdata.photos" :key="index" @click="handleimg(index)">
                  <img :src="photo">
                </div>
              </my-swiper>
          </div>
        </div>
        <div class="buy">选座购票</div>
    </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import { Icon, ImagePreview } from 'vant'
import moment from 'moment'
import mySwiper from '@/components/mySwiper.vue'

Vue.filter('dataFilter', (data) => { return moment(data * 1000).format('YYYY-MM-DD') })
Vue.use(Icon)
export default {
  data () {
    return {
      filmdata: null,
      ishidde: false,
      iconshow: true
    }
  },
  components: {
    mySwiper
  },
  created () {
    console.log(this.$route.params.id)
    http.httpForDetail(this.$route.params.id).then(res => {
      this.filmdata = res.data.data.film
      console.log(res.data.data.film)
    })
  },
  mounted () {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 90) {
        this.ishidde = true
      } else {
        this.ishidde = false
      }
    }
  },
  methods: {
    changeHidde () {
      this.iconshow = !this.iconshow
    },
    iconback (data) {
      this.$router.back()
    },
    handleimg (index) {
      ImagePreview({
        images: this.filmdata.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    }
  }
}
</script>

<style scoped>
.title{
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  height: 2.75rem;
  background-color: rgba(255, 255, 255,0 );
}
.filmtitle{
  flex: 1;
  text-align: center;
  font-size: 1.0625rem;
  height: 2.75rem;
  line-height: 2.75rem;
  background-color: #fff;
}
.img{
  height: 13.125rem;
  /* background-color: rgb(245, 3, 3); */
  overflow: hidden;
}
.navimg{
  position:relative;
  top: -75%;
  z-index: -1;
}
.film-detail{
  padding: .75rem .9375rem .9375rem .9375rem;
  /* height: 10.2188rem; */
  width: 21.5625rem;
  /* background-color: rgb(235, 194, 14); */
}
.col{
  display: flex;
}
.film-name{
  width: 16rem;
}
.name{
  color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
    vertical-align: middle;
}
.item{
  font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
    vertical-align: middle;
}
.film-grade{
    width: calc(100% - 250px);
    text-align: right;
    color: #ffb232;
}
.grade{
  font-size: 1.125rem;
    font-style: italic;
}
.grade-text {
    font-size: .625rem;
}
.grey-text{
  font-size: .8125rem;
    color: #797d82;
    margin-top: .25rem;
}
.film-synopsis{
  margin-top: .75rem;
}
.hidde {
    height: 2.125rem!important;
    overflow: hidden;
}
.toggle{
  text-align: center;
}
.actors{
  margin-top: 10px;
    background-color: #fff;
    width: 100%;
    height: 12.0313rem;
}
.actors-title-bar {
    width: 100%;
    padding: 15px;
    height: 1.4063rem;
}
.actors-title-text {
    font-size: 16px;
    text-align: left;
    color: #191a1b;
}
.actor-img{
  height: 5.3125rem;
  width: 5.3125rem;
  position: relative;
  overflow: hidden;
}
.actor-img>img{
  height: 7.3125rem;
  position: absolute;
  top: -16%;
  left: 0;
}
.actor-name{
  padding-top: .625rem;
    font-size: .75rem;
    color: #191a1b;
    width: 5.3125rem;
    height: 1.125rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.actor-item{
  display: block;
  text-align: center;
  font-size: .625rem;
  color: #797d82;
}
.photos{
  height: 9.375rem;
  margin-top: 10px;
  margin-bottom: 60px;
  box-sizing: border-box;
  margin-bottom: 4.375rem;
}
.photos-title-bar{
  height: 3.875rem;
  width: 100%;
  padding: .9375rem;
  box-sizing: border-box;
  font-size: 16px;
  text-align: left;
  color: #191a1b;
}
.photos-list{
  height: 7.1875rem;
  width: 100%;
  padding: 0 .9375rem;
}
div.photo{
  height: 6.25rem;
  width: 9.375rem;
  overflow: hidden;
  position: relative;
}
.photo>img{
  position: absolute;
  width: 100%;
  height: 13.125rem;
  left: 0;
  top: -3.4375rem;
}
.buy{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3.0625rem;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 1rem;
    line-height: 3.0625rem;
    z-index: 100;
}
</style>
