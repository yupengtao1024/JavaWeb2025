<script setup>

import Son from "./Son.vue";
import {ref} from "vue";

//1.父传子
const money = ref(100);

function moneyMinis(arg){

  // alert("感知到儿子买了棒棒糖"+arg);
  money.value +=arg;
}
</script>

<template>
  <div style="background-color: #747bff">
    <h2>Father</h2>

<!--    购买事件-->
    <Son :money="money" @buy="moneyMinis"/>
  </div>
</template>

<style scoped>

</style>