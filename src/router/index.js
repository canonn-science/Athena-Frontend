import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/reports',
    component: Layout,
    redirect: '/reports/create',
    name: 'Reports',
    meta: { title: 'Reports', icon: 'form' },
    children: [
      {
        path: 'create',
        component: () => import('@/views/reports/create'),
        name: 'Create Report',
        meta: { title: 'New Report' }
      },
      {
        path: 'biology',
        component: () => import('@/views/reports/biology'), // Parent router-view
        name: 'Biology',
        meta: { title: 'Biology' },
        children: [
          {
            path: 'apreports',
            component: () => import('@/views/reports/biology/apreports'),
            name: 'Amphora Plants',
            meta: { title: 'Amphora Plants' }
          },
          {
            path: 'bmreports',
            component: () => import('@/views/reports/biology/bmreports'),
            name: 'Bark Mounds',
            meta: { title: 'Bark Mounds' }
          },
          {
            path: 'btreports',
            component: () => import('@/views/reports/guardian/btreports'),
            name: 'Brain Trees',
            meta: { title: 'Brain Trees' }
          },
          {
            path: 'fgreports',
            component: () => import('@/views/reports/biology/fgreports'),
            name: 'Fungal Gourds',
            meta: { title: 'Fungal Gourds' }
          },
          {
            path: 'tbreports',
            component: () => import('@/views/reports/thargoid/tbreports'),
            name: 'Thargoid Barnacles',
            meta: { title: 'Thargoid Barnacles' }
          },
          {
            path: 'twreports',
            component: () => import('@/views/reports/biology/twreports'),
            name: 'Tube Worms',
            meta: { title: 'Tube Worms' }
          }
        ]
      },
      {
        path: 'cartographics',
        component: () => import('@/views/reports/cartographics'), // Parent router-view
        name: 'Cartographics',
        meta: { title: 'Cartographics' },
        children: [
          {
            path: 'genreports',
            component: () => import('@/views/reports/cartographics/genreports'),
            name: 'Generation Ships',
            meta: { title: 'Generation Ships' }
          },
          {
            path: 'lcreports',
            component: () => import('@/views/reports/cartographics/lcreports'),
            name: 'Lagrange Clouds',
            meta: { title: 'Lagrange Clouds' }
          }
        ]
      },
      {
        path: 'geology',
        component: () => import('@/views/reports/geology'), // Parent router-view
        name: 'Geology',
        meta: { title: 'Geology' },
        children: [
          {
            path: 'csreports',
            component: () => import('@/views/reports/geology/csreports'),
            name: 'Crystalline Shards',
            meta: { title: 'Crystalline Shards' }
          },
          {
            path: 'fmreports',
            component: () => import('@/views/reports/geology/fmreports'),
            name: 'Fumaroles',
            meta: { title: 'Fumaroles' }
          },
          {
            path: 'gvreports',
            component: () => import('@/views/reports/geology/gvreports'),
            name: 'Gas Vents',
            meta: { title: 'Gas Vents' }
          },
          {
            path: 'gyreports',
            component: () => import('@/views/reports/geology/gyreports'),
            name: 'Geysers',
            meta: { title: 'Geysers' }
          },
          {
            path: 'lsreports',
            component: () => import('@/views/reports/geology/lsreports'),
            name: 'Lava Spouts',
            meta: { title: 'Lava Spouts' }
          }
        ]
      },
      {
        path: 'guardian',
        component: () => import('@/views/reports/guardian'), // Parent router-view
        name: 'Guardian',
        meta: { title: 'Guardian' },
        children: [
          {
            path: 'btreports',
            component: () => import('@/views/reports/guardian/btreports'),
            name: 'Brain Trees',
            meta: { title: 'Brain Trees' }
          },
          {
            path: 'gbreports',
            component: () => import('@/views/reports/guardian/gbreports'),
            name: 'Guardian Beacons',
            meta: { title: 'Guardian Beacons' }
          },
          {
            path: 'grreports',
            component: () => import('@/views/reports/guardian/grreports'),
            name: 'Guardian Ruins',
            meta: { title: 'Guardian Ruins' }
          },
          {
            path: 'gsreports',
            component: () => import('@/views/reports/guardian/gsreports'),
            name: 'Guardian Structures',
            meta: { title: 'Guardian Structures' }
          }
        ]
      },
      {
        path: 'thargoid',
        component: () => import('@/views/reports/thargoid'), // Parent router-view
        name: 'Thargoid',
        meta: { title: 'Thargoid' },
        children: [
          {
            path: 'tbreports',
            component: () => import('@/views/reports/thargoid/tbreports'),
            name: 'Thargoid Barnacles',
            meta: { title: 'Thargoid Barnacles' }
          },
          {
            path: 'tsreports',
            component: () => import('@/views/reports/thargoid/tsreports'),
            name: 'Thargoid Structures',
            meta: { title: 'Thargoid Structures' }
          }
        ]
      }
    ]
  },

  {
    path: 'canonn-science',
    component: Layout,
    children: [
      {
        path: 'https://canonn.science',
        meta: { title: 'Canonn Science', icon: 'link' }
      }
    ]
  },

  {
    path: 'canonn-github',
    component: Layout,
    children: [
      {
        path: 'https://github.com/canonn-science',
        meta: { title: 'Canonn Github', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
