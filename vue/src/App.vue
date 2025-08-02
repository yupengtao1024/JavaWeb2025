<script setup type="module">
// 导入我们自己定义的axios.js文件,而不是导入axios依赖
import axios from './axios.js'
import {onMounted, ref, reactive, toRaw} from 'vue';

let jsonData = reactive({code: 1, content: '我努力不是为了你而是因为你'})

let getLoveWords = () => {
  try {
    return axios.post(
        'api/rand.qinghua',
        {
          username: 'zhangsan',
          password: '123456'
        },//请求体中的JSON数据
        {
          params: {
            format: 'json',
          }
        }// 其他键值对参数
    )
  } catch (e) {
    return e
  }
}

let getLoveMessage = async () => {

  // 这里返回的是一个fulfilled（已兑现）状态的promise
  getLoveWords().then(
      (response) => {
        console.log("after getloveWords")
        console.log(response)
        Object.assign(jsonData, response.data)
      }
  )
}
/* 通过onMounted生命周期,自动加载一次 */
onMounted(() => {
  getLoveMessage()
})
</script>

<template>
  <div>
    <hr>
    <router-link to="/operate">显示操作页</router-link>
    <br>
    <router-link to="/list">显示展示页</router-link>
    <br>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
