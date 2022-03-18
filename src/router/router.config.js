/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/home/home.vue')
  },
  {
    path: '/videodetaile',
    name: 'Detaile',
    component: () => import('@/views/home/videodetaile.vue')
  },
  {
    path: '/searchvideodetaile',
    name: 'Detaile',
    component: () => import('@/views/home/searchvideodetaile.vue')
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
