import type { RouteRecordRaw } from 'vue-router';


import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:home',
      title: '测试路由',
    },
    name: 'Home',
    path: '',
    redirect: '/home/index1',
    children: [
      {
        name: 'HomeIndex',
        path: '/home/index1', 
        component: () => import('#/views/test/test.vue'),
        meta: {
          keepAlive: true,
          icon: 'mdi:home',
          title: "测试路由1",
        },
      },
    ],
  },
];

export default routes;