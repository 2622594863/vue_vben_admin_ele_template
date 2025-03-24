<template>
  <div class="mb-4">
    <ElButton @click="info">{{name}}</ElButton>
    <ElButton type="success">Default</ElButton>
    <ElButton type="danger">Default</ElButton>

  </div>

</template>

<script lang="js" setup>
import {
  ElButton,
  ElCard,
  ElMessage,
  ElNotification,
  ElSegmented,
  ElSpace,
  ElTable,
} from 'element-plus';
import { ref } from 'vue';
import axios from 'axios';
import { baseRequestClient, requestClient } from '#/api/request';

const name = ref('test');

function info() {
  ElMessage.info('这是一条信息');
  /*axios.get('/api/test/get').then((res) => {
    console.log(res);
    console.log(res.data.data.name)
    name.value = res.data.data.name
  })*/
  requestClient.get('/test/get').then((res) => {
    console.log(res);
    name.value = res.name
  })
  
}
</script>