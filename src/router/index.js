import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'BasicLayout',
      component: () => import('../layout/BasicLayout/BasicLayout.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views/Index/Index.vue')
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404/404.vue')
    },
    {
      path: '/:catchAll(.*)', // 此处需特别注意置于最底部
      redirect: '/404'
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  next()
})

export default router
