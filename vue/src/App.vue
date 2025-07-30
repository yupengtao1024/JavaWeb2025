<script setup type="module">
import axios from 'axios'
import {onMounted, ref, reactive, toRaw} from 'vue';

let jsonData = reactive({code: 1, content: '我努力不是为了你而是因为你'})

let getLoveWords = () => {
  try {
    return  axios.get(
        'http://api.uomg.com/api/rand.qinghua?format=json',
        {
          params: {// 向url后添加的键值对参数
            format: 'json',
            username: 'zhangsan',
            password: '123456'
          },
          headers: {// 设置请求头
            'Accept': 'application/json, text/plain, text/html,*/*'
          }
        }
    )
  } catch (e) {
    return  e
  }
}

let getLoveMessage =async () => {
  let {data} = await getLoveWords()
  Object.assign(jsonData, data)
}

/* 通过onMounted生命周期,自动加载一次 */
onMounted(() => {
  getLoveMessage()
})
</script>

<template>
  <div>
    <h1>今日土味情话:{{ jsonData.content }}</h1>
    <button @click="getLoveMessage">获取今日土味情话</button>
  </div>
</template>

<style scoped>
</style>
