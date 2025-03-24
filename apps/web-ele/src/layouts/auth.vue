<script lang="js" setup>
import { computed,ref } from 'vue';

import { AuthPageLayout } from '@vben/layouts';
import { preferences } from '@vben/preferences';
import { baseRequestClient, requestClient } from '#/api/request';

import { $t } from '#/locales';

const appName = computed(() => preferences.app.name);
const logo = computed(() => preferences.logo.source);
var title = ref('标题')
var subheading = ref('副标题')
requestClient.get('/auth/info').then((res) => {
  title.value = res.title
  subheading.value = res.subheading
})
</script>

<template>
  <AuthPageLayout :app-name="appName" :logo="logo" :page-description="subheading"
    :page-title="title">
    <!-- 自定义工具栏 -->
    <!-- <template #toolbar></template> -->
  </AuthPageLayout>
</template>
