import Vue from 'vue'
import Vuex from 'vuex'
import shttp from '@/util/shttp'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityName: state.cityName,
        cityId: state.cityId
      }
    }
  })],
  state: {
    cityId: 440300,
    cityName: '深圳',
    cinemasList: [],
    navisShow: true
  },
  mutations: {
    changecity (state, city) {
      state.cityName = city
    },
    changecityid (state, cityId) {
      state.cityId = cityId
    },
    changecinemalist (state, list) {
      state.cinemasList = list
    },
    show (state) {
      state.navisShow = true
    },
    hide (state) {
      state.navisShow = false
    }
  },
  actions: {
    changecinemas (Store, id) {
      return shttp({
        url: `/gateway?cityId=${id}&ticketFlag=1&k=3112560`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        Store.commit('changecinemalist', res.data.data.cinemas)
      })
    }
  }
})
