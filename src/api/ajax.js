import axios from 'axios'
import NProgress from 'nprogress'
// import qs from 'qs'
import { message } from 'ant-design-vue'
import { BASE_URL } from '../config/index'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
})

instance.interceptors.request.use((config) => {
  NProgress.start()
  // const { data, method } = config
  // post请求参数转urlencoded形式
  // if (method.toLowerCase() === 'post')
  //   config.data = data instanceof Object ? qs.stringify(data) : data
  return config
})

instance.interceptors.response.use(
  (response) => {
    NProgress.done()
    const { status, data, msg } = response.data
    if (status === 200) return data
    message.error(msg)
  },
  () => {
    NProgress.done()
    message.error('当前网络不稳定，请稍后重新尝试', 1)
    return new Promise(() => {})
  }
)

export default instance
