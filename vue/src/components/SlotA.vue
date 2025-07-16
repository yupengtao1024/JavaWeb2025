<script setup>

import {ref} from "vue";
import SlotB from "./SlotB.vue";
</script>

<template>
  <div style="background-color: #747bff">
    <h2>Father</h2>
    <SlotB>
      <template #title>
        哈哈Son
      </template>
      <template #btn>
        买飞机
      </template>
    </SlotB>
  </div>
</template>

<style scoped>

</style>