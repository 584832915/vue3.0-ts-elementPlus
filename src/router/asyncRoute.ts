export const asyncRoute = [
    {
        path: '/home',
        name: '首页',
        component: () => import('../views/home/index.vue'),
        meta: {
          breadcrumb: [],
          parent: '首页'
        }
      },
      {
        path: '/vuextable',
        name: '表格',
        component: () => import('../views/table/index.vue'),
        meta: {
          breadcrumb: [],
          parent: '表格'
        }
      },
      {
        path: '/Suspense',
        name: 'Suspense',
        component: () => import('../views/Suspense/index.vue'),
        meta: {
          breadcrumb: [],
          parent: 'Suspense'
        }
      },
      {
        path:"/promise",
        name:'权限',
        component:()=>import('../views//Suspense/index.vue'),
        meta: {
          breadcrumb: [],
          parent: 'Suspense'
        }
      }
]