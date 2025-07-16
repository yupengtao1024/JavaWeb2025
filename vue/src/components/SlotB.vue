<script setup>
</script>

<template>
  <div style="background-color: #888888;color: antiquewhite">
    <h3>
      <slot name="title">
        哈哈Son
      </slot>
    </h3>
    <button>
      <slot name="btn"></slot>
    </button>
  </div>
</template>

<style scoped>
</style>