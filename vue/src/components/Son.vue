<script setup>
let props = defineProps(['money']);

//1.defineEmits用于定义要发送给父组件的方法，可以1个或者多个
let emits = defineEmits(['buy']);

function buy(){
  emits('buy',-5);
}
</script>

<template>
  <div style="background-color: #888888;color: antiquewhite">
    <h3>Son</h3>
    <div>账户：{{ props.money }}</div>

<!--    2.提交数据的方法-->
    <button @click="buy">买棒棒糖</button>
  </div>
</template>

<style scoped>

</style>