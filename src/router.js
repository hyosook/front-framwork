import Vue from 'vue'
import Router from 'vue-router'

import { createSandbox } from 'vue-kindergarten'
import RouteGoverness from './kindergarten/governesses/RouteGoverness'
import child from './kindergarten/child'

Vue.use(Router)

// 동적 호출
function loadView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`) // TODO : 폴더구조 생각 필요
}

// 라우트 대상 정의 (url추가시 여기에)
let routes = [
  {
    path: '/',
    name: 'home-main',
    component: loadView('home-main')
  },
  // TODO : 부-자 관계 처리필요
  {
    path: '/user/login',
    name: 'user-login',
    component: loadView('user-login')
  },
  {
    path: '/user/register',
    name: 'user-register',
    component: loadView('user-register')
  },
  {
    path: '/user/main',
    name: 'user-main',
    component: loadView('user-main'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin-main',
    component: loadView('admin-main'),

    meta: {
      requiresAuth: true
    }
  }
]

routes.push({ path: '*', component: loadView('home-main') })

let router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

router.beforeEach((to, from, next) => {
  to.matched.some((routeRecord) => {
    const perimeter = routeRecord.meta.perimeter
    const Governess = routeRecord.meta.governess || RouteGoverness
    const action = routeRecord.meta.perimeterAction || 'route'

    if (perimeter) {
      const sandbox = createSandbox(child(), {
        governess: new Governess(),

        perimeters: [
          perimeter
        ]
      })

      return sandbox.guard(action, { to, from, next })
    }

    return next()
  })
})

export default router
