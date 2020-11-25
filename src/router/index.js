import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [

  //#################
  //Researcher Routes
  //#################

  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/upload",
    name: "Upload",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/Upload.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/repository",
    name: "Repository",
    component: () =>
      import(/* webpackChunkName: "Repository" */ '../views/RepositoryViewRouter.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () => import('../views/Repository.vue'),
        meta: {
          showHeader: true,
          requiresAuth: true
        }
      },
      {
        path: ':id',
        name: 'RepositoryView',
        component: () => import(/* webpackChunkName: "Repository View" */ '../views/RepositoryView.vue'),
        props: true,
        meta: {
          showHeader: true,
          requiresAuth: true
        }
      },
      {
        path: ':id/read',
        name: 'RepositoryViewRead',
        component: () => import(/* webpackChunkName: "Repository View Read" */ '../views/RepositoryViewRead.vue'),
        props: true,
        meta: {
          requiresAuth: true,
          showHeader: true
        }
      },
    ]
  },

  // {
  //   path: "/repository/:id",
  //   name: "Repository",
  //   props: true,
  //   component: () =>
  //     import(/* webpackChunkName: "Repository View" */ "../views/RepositoryView.vue"),
  //   meta: {
  //     showHeader: true,
  //     requiresAuth: true
  //   },
  // },

  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "History" */ "../views/History.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/analytics",
    name: "Analytics",
    component: () =>
      import(/* webpackChunkName: "Analytics" */ "../views/Analytics.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/viewgrant",
    name: 'ViewGrants',
    component: () =>
      import(/* webpackChunkName: "Grants" */ "../views/Grants.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/viewgrant/:id',
    name: 'viewSingleGrant',
    component: () => import('../views/GrantView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/managegrant",
    name: 'manageGrants',
    component: () =>
      import(/* webpackChunkName: "Grants" */ "../views/ManageGrant.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/managegrant/:id',
    name: 'manageSingleGrant',
    component: () => import('../views/ManageGrantView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/viewcrowd",
    name: 'ViewCrowd',
    component: () =>
      import(/* webpackChunkName: "Grants" */ "../views/Crowd.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/viewcrowd/:id',
    name: 'ViewSingleCrowd',
    component: () => import('../views/CrowdView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/managecrowd",
    name: 'ManageCrowd',
    component: () =>
      import(/* webpackChunkName: "Grants" */ "../views/ManageCrowd.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/managecrowd/:id',
    name: 'ManageSingleCrowd',
    component: () => import('../views/ManageCrowdView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "Chat" */ "../views/Chat.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/ocr",
    name: "OCR",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/OCR.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/convert",
    name: "Convert",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/Convert.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    },
  },

  {
    path: "/video",
    name: "Video",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/Video.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "Signin" */ "../views/Signin.vue"),
    meta: {
      showHeader: false,
      requiresAuth: false
    },
  },

  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "Signin" */ "../views/Signin.vue"),
    meta: {
      showHeader: false,
      requiresAuth: false
    },
  },

  //########### 
  //Admin Route
  //###########

  {
    path: "/admin",
    name: "AdminView",
    component: () =>
      import(/* webpackChunkName: "AdminView" */ "../admin/AdminView.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true,
      requiresAdmin: true
    },
  },

  {
    path: "/user",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "Signin" */ "../views/Users.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    },
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Working Route Guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

  if (requiresAuth && !store.state.token) {
    next('/signin')
  }
  else {
    if(requiresAdmin && store.state.user.userType === 'admin') {
      next('/admin')
    } else {
      next()
    }
  }
})

//Test Roue Guard
// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.state.token == null) {
//         next({
//             path: '/signin',
//             params: { nextUrl: to.fullPath }
//         })
//     } else {
//         if(to.matched.some(record => record.meta.requiresAdmin)) {
//             if(store.state.user.userType === 'admin'){
//                 next('/admin')
//             }
//             else{
//                 next()
//             }
//         }else {
//             next()
//         }
//     }
//   } else {
//       next('/signin')
//   }
// })

export default router;
