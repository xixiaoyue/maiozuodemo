<template>
  <div>
    <div class="form">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="box">
      <ul>
        <li v-for="data in computedlist" :key="data.cinemaId">
          <div class="left">
            <div class="cinema-name">{{ data.name }}</div>
            <div class="cinema-text">{{ data.address }}</div>
          </div>
          <div class="right cinema-name">
            <div style="color: #ff5f16">￥{{ data.lowPrice / 100 }}起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search, Toast } from 'vant'
Vue.use(Search)

export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedlist () {
      return this.$store.state.cinemasList.filter((item) =>
        item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase())
      )
    }
  },
  mounted () {
    if (this.$store.state.cinemasList.length === 0) {
      this.$store.dispatch('changecinemas', this.$store.state.cityId)
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.form {
  height: 3.375rem;
  position: sticky;
  top: 0;
}
li {
  padding: 0.9375rem;
  height: 2.8438rem;
  display: flex;
  justify-content: space-between;
}
.left {
  width: 13.25rem;
}
.cinema-text {
  color: #797d82;
  font-size: 0.75rem;
  margin-top: 0.3125rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.cinema-name {
  font-size: 0.9375rem;
}
.box {
  height: 35.9375rem;
  position:absolute;
  overflow: scroll;
  width: 100%;
  box-sizing: border-box;
}
</style>
