import axios from "axios"
import store from "@store"
import action from "@store/actions"

const instance = axios.create({
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  store.dispatch(action.load.setLoad())
  // 在发送请求之前做些什么
  return config
}, err => {
  // 对请求错误做些什么
  return Promise.reject(err)
})

// 添加请求拦截器
instance.interceptors.response.use(response => {
  store.dispatch(action.load.setLoad())
  // 对响应数据做点什么
  return response
}, err => {
  // 对响应错误做点什么
  return Promise.reject(err)
})

export default instance