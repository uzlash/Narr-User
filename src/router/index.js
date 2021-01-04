import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Repository from '../views/Repository.vue'
import RepositoryView from '../views/RepositoryView.vue'
import RepositoryViewRead from '../views/RepositoryViewRead.vue'
import RepositoryViewRouter from '../views/RepositoryViewRouter.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const user = JSON.parse(localStorage.getItem('user'))
const routes = [
  //#################
  //Researcher Routes
  //#################

  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/upload',
    name: 'Upload',
    component: () =>
      import(/* webpackChunkName: "upload" */ '../views/Upload.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/repository',
    name: 'Repository',
    component: RepositoryViewRouter,
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        component: Repository,
        meta: {
          showHeader: true,
          requiresAuth: true,
        },
      },
      //working
      {
        path: ':id',
        name: 'RepositoryView',
        component: RepositoryView,
        props: true,
        meta: {
          showHeader: true,
          requiresAuth: true,
        },
      },
      {
        path: ':id/read',
        name: 'RepositoryViewRead',
        component: RepositoryViewRead,
        props: true,
        meta: {
          requiresAuth: true,
          showHeader: true,
        },
      },
    ],
  },

  {
    path: '/history',
    name: 'History',
    component: () =>
      import(/* webpackChunkName: "history" */ '../views/History.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/analytics',
    name: 'Analytics',
    component: () =>
      import(/* webpackChunkName: "analytics" */ '../views/Analytics.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/Profile.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/viewgrant',
    name: 'ViewGrants',
    component: () =>
      import(/* webpackChunkName: "viewgrants" */ '../views/Grants.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/viewgrant/:id',
    name: 'viewSingleGrant',
    component: () =>
      import(
        /* webpackChunkName: "viewsinglegrant" */ '../views/GrantView.vue'
      ),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/managegrant',
    name: 'manageGrants',
    component: () =>
      import(/* webpackChunkName: "managegrant" */ '../views/ManageGrant.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/managegrant/:id',
    name: 'manageSingleGrant',
    component: () =>
      import(
        /* webpackChunkName: "managesinglegrant" */ '../views/ManageGrantView.vue'
      ),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/viewcrowd',
    name: 'ViewCrowd',
    component: () =>
      import(/* webpackChunkName: "viewcrowd" */ '../views/Crowd.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/viewcrowd/:id',
    name: 'ViewSingleCrowd',
    component: () =>
      import(
        /* webpackChunkName: "viewsinglecrowd" */ '../views/CrowdView.vue'
      ),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/managecrowd',
    name: 'ManageCrowd',
    component: () =>
      import(/* webpackChunkName: "managecrowd" */ '../views/ManageCrowd.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/managecrowd/:id',
    name: 'ManageSingleCrowd',
    component: () =>
      import(
        /* webpackChunkName: "managesinglecrowd" */ '../views/ManageCrowdView.vue'
      ),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/chat',
    name: 'Chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/Chat.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/ocr',
    name: 'OCR',
    component: () => import(/* webpackChunkName: "ocr" */ '../views/OCR.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/convert',
    name: 'Convert',
    component: () =>
      import(/* webpackChunkName: "convert" */ '../views/Convert.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/video',
    name: 'Video',
    component: () =>
      import(/* webpackChunkName: "video" */ '../views/Video.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
  },

  {
    path: '/signin',
    name: 'signin',
    component: () =>
      import(/* webpackChunkName: "signin" */ '../views/Signin.vue'),
    meta: {
      showHeader: false,
      requiresAuth: false,
    },
  },

  {
    path: '/signout',
    name: 'signout',
    component: () =>
      import(/* webpackChunkName: "signout" */ '../views/Signout.vue'),
    meta: {
      showHeader: false,
      requiresAuth: false,
    },
  },

  //###########
  //Admin Route
  //###########

  {
    path: '/admin',
    name: 'AdminView',
    component: () =>
      import(/* webpackChunkName: "adminview" */ '../admin/AdminView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
    beforeEnter: (to, from, next) => {
      if (user.userRole === 'admin') {
        next()
      } else {
        next('/signin')
      }
    },
  },

  {
    path: '/user',
    name: 'users',
    component: () =>
      import(/* webpackChunkName: "users" */ '../admin/Users.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true,
    },
    beforeEnter: (to, from, next) => {
      console.log('userRole', user.userRole)
      if (user.userRole === 'admin') {
        next()
      } else {
        next('/signin')
      }
    },
  },

  { path: '*', redirect: '/' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// // Working Route Guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !store.state.token) {
    next('/signin')
  } else {
    next()
  }
})

export default router
