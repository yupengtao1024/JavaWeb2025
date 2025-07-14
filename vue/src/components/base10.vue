<script setup>

import {ref, onUpdated, onMounted, onBeforeUpdate, onBeforeMount} from 'vue'

const count = ref(1);

function countAdd() {
  count.value++;
}

//挂载前
onBeforeMount(() => {

  //挂载前，api初始化好了，元素找不到
  console.log("挂载前:conut", count.value)
  console.log("挂载前:", document.getElementById("btn01"))
})

// 挂载完
onMounted(() => {

  //挂载完成，能找到元素
  console.log("挂载完成:conut", count.value)
  console.log("挂载完成:", document.getElementById("btn01"))
})

// 更新前
onBeforeUpdate(() => {

  //更新前内容未变，数据变了
  console.log("更新前:count", count.value)
  console.log("更新前:btn内容", document.getElementById("btn01").innerHTML)
})

// 更新完成
onUpdated(() => {
  console.log("更新完:count", count.value)
  console.log("更新完:btn内容", document.getElementById("btn01").innerHTML)
})
</script>

<template>
  <button id="btn01" @click="countAdd">点{{ count }}</button>
</template>

<style scoped>
</style>