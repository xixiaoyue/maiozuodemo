import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'

Vue.use(Toast)
function httpForList (pageNum, id) {
  return axios({
    url: `https://m.maizuo.com/gateway?cityId=${id}&pageNum=${pageNum}&pageSize=10&type=1&k=7945574`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16686176265203554742566913"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}

function httpForDetail (params) {
  return axios({
    url: `https://m.maizuo.com/gateway?filmId=${params}&k=6920528`,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16686176265203554742566913"}',
      'X-Host': 'mall.film-ticket.film.info'
    }
  })
}
axios.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  Toast.clear()
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default {
  httpForDetail,
  httpForList
}
