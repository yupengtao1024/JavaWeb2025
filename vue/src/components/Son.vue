<script setup>
let props = defineProps(['money']);
</script>

<template>
  <div style="background-color: #888888;color: antiquewhite">
    <h3>Son</h3>
    <div>账户：{{ props.money }}</div>
  </div>
</template>

<style scoped>

</style>