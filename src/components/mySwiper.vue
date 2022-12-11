<template>
  <div class="swiper-container" :class=container>
   <div class="swiper-wrapper">
     <slot></slot>
   </div>
 </div>
 </template>
<script>
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
export default {
  props: {
    container: {
      type: String,
      default: 'cc'
    },
    views: {
      type: Number,
      default: 1
    },
    Between: {
      type: Number,
      default: 15
    }
  },
  mounted () {
    new Swiper(`.${this.container}`, {
      slidesPerView: this.views,
      spaceBetween: this.Between,
      freeMode: true
    })
  }
}
</script>
