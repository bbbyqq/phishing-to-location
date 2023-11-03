import axios from 'axios'
import DomMessage from './message.js'

export function request (config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: '/api', // 关键代码，vite修改proxy配置，这里的baseURL也应该加上
    timeout: 60000
  })

  const messageOnce = new DomMessage()

  // 请求拦截器配置
  instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
      // 将token加入请求头
      config.headers.Authorization = token
    }
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  // 响应拦截器配置
  instance.interceptors.response.use(response => {
    // 如果返回的是文件类型
    if (response.request.responseType === 'blob') {
      return response
    }
    if (response.data.code != 200 && !response.data.ok) {
      messageOnce.error(response.data.msg)
      return Promise.reject(response.data)
    }
    return response.data
  }, error => {
    if (!error.response) {
      messageOnce.error('服务器未启动')
      return
    }
    switch (error.response.status) {
      case 401:
        // 文字信息修改请同时修改message.js的判断信息
        messageOnce.error('token验证失败')
        loginError()
        break
      case 403:
        // 文字信息修改请同时修改message.js的判断信息
        messageOnce.error('token过期')
        loginError()
        break
      case 404:
        messageOnce.error('404')
        break
      case 500:
        messageOnce.error('服务器错误')
        break
      default:
        return Promise.reject(error)
    }
    return Promise.reject(error)
  })
  // 发送真正的网络请求
  return instance(config)
}

function loginError () {
  localStorage.setItem('token', '')
  setTimeout(() => {
    location.reload()
  }, 1000)
}
