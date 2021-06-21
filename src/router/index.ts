import { handleRoutes } from './../utils/handlePermission';
import store from '@/store'
import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocationNormalized,NavigationGuardNext } from 'vue-router'
import Login from '../views/login.vue'


 const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '登录',
    component: Login,
    meta: {
      breadcrumb: [],
      parent: '登录'
    }
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../views/layout/index.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const canUserAccess = (to: RouteLocationNormalized, from: RouteLocationNormalized,next:NavigationGuardNext) => {
  if (to.path == '/') {
    next();
  } else {
    if (sessionStorage.getItem('token')) {
      if(!store.state.permission.sidbarList.length){
        handleRoutes()
        next({ ...to, replace: true })
      }else{
        !to.meta.parent? next({ path: "/" }): next()
      }
    } else {
       next({ path: "/" })
    }
  }
}
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized,next:NavigationGuardNext) => {
  return await canUserAccess(to, from ,next)
})

export default router
