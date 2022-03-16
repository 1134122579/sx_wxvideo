/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  // {
  //   path: '/newculture',
  //   name: 'newCulture',
  //   component: () => import('@/views/company/newculture')
  // },
  {
    path: '*',
    redirect: '/'
    // hidden: true
  }
]
