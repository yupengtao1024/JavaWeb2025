import axios from 'axios'

//  创建instance实例
const instance = axios.create({
    baseURL: 'http://api.uomg.com',
    timeout: 10000
})

//  添加请求拦截
instance.interceptors.request.use(
    // 设置请求头配置信息
    config => {
        //处理指定的请求头
        console.log("before request")
        config.headers.Accept = 'application/json, text/plain, text/html,*/*'
        return config
    },

    // 设置请求错误处理函数
    error => {
        console.log("request error")
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    // 设置响应正确时的处理函数
    response => {
        console.log("after success response")
        console.log(response)
        return response
    },

    // 设置响应异常时的处理函数
    error => {
        console.log("after fail response")
        console.log(error)
        return Promise.reject(error)
    }
)
// 默认导出
export default instance