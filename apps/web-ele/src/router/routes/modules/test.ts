import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:home',
      title: '测试路由',
      authority: ['管理']
    },
    name: 'Home',
    path: '/home',
    redirect: '/home/index',
    children: [
      {
        name: 'HomeIndex',
        path: '/home/index',
        component: () => import('#/views/test/a.vue'),
        meta: {
          icon: 'mdi:home',
          title: '测试路由1',
          authority: ['员工']
        },
      },
      {
        name: 'HomeIndex2',
        path: '/home/index2',
        component: () => import('#/views/test/b.vue'),
        meta: {
          icon: 'mdi:home',
          title: '测试路由2',
          authority: ['来了']
        },
      },
      {
        name: 'HomeIndex3',
        path: '/home/index3',
        component: () => import('#/views/test/b.vue'),
        meta: {
          icon: 'mdi:home',
          title: '测试路由3',
        },
      }
    ],
  },
];

export default routes;