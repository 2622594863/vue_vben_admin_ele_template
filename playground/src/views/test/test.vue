<template>
  <div>
    <h1>测试路由</h1>
    <input type="text">
    <button @click="refresh">刷新页面</button>
  </div>
</template>

<script setup lang="ts">
import { useRefresh } from '@vben/hooks';

const { refresh } = useRefresh();

</script>