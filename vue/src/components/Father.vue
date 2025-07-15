<script setup>

import Son from "./Son.vue";
import {ref} from "vue";

//1.父传子
const money = ref(100);
</script>

<template>
  <div style="background-color: #747bff">
    <h2>Father</h2>
    <Son :money="money"></Son>
  </div>
</template>

<style scoped>

</style>