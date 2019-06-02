import axios from 'axios'
import router from '../../router'

// 请求拦截 设置统一header
axios.interceptors.request.use(config => {
  if (localStorage.banmaToken) {
    config.headers.Authorization = localStorage.banmaToken
    console.log(config, 'axios')
    return config
  }
}, error => {
  return Promise.reject(error)
})

// 响应拦截 401 token过期处理
axios.interceptors.response.use(response => {
  return response
}, error => {
  // 错误提醒
  console.log(error.response, 'errors response')
  const { status } = error.response
  if (status) {
    localStorage.removeItem('banmaToken')
    router.push('/recommend')
  }
  return Promise.reject(error)
})

export default axios
