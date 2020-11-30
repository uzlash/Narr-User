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
      import(/* webpackChunkName: "upload" */ "../views/Upload.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/repository",
    name: "Repository",
    component: () =>
      import(/* webpackChunkName: "repository" */ '../views/RepositoryViewRouter.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "repositoryrouterview" */ '../views/Repository.vue'),
        meta: {
          showHeader: true,
          requiresAuth: true
        }
      },
      //working
      {
        path: ':id',
        name: 'RepositoryView',
        component: () => import(/* webpackChunkName: "repositoryview" */ '../views/RepositoryView.vue'),
        props: true,
        meta: {
          showHeader: true,
          requiresAuth: true
        }
      },
      {
        path: ':id/read',
        name: 'RepositoryViewRead',
        component: () => import(/* webpackChunkName: "repositoryviewread" */ '../views/RepositoryViewRead.vue'),
        props: true,
        meta: {
          requiresAuth: true,
          showHeader: true
        }
      },
    ]
  },

  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "history" */ "../views/History.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/analytics",
    name: "Analytics",
    component: () =>
      import(/* webpackChunkName: "analytics" */ "../views/Analytics.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/Profile.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/viewgrant",
    name: 'ViewGrants',
    component: () =>
      import(/* webpackChunkName: "viewgrants" */ "../views/Grants.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/viewgrant/:id',
    name: 'viewSingleGrant',
    component: () => import(/* webpackChunkName: "viewsinglegrant" */ '../views/GrantView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/managegrant",
    name: 'manageGrants',
    component: () =>
      import(/* webpackChunkName: "managegrant" */ "../views/ManageGrant.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/managegrant/:id',
    name: 'manageSingleGrant',
    component: () => import(/* webpackChunkName: "managesinglegrant" */ '../views/ManageGrantView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/viewcrowd",
    name: 'ViewCrowd',
    component: () =>
      import(/* webpackChunkName: "viewcrowd" */ "../views/Crowd.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/viewcrowd/:id',
    name: 'ViewSingleCrowd',
    component: () => import(/* webpackChunkName: "viewsinglecrowd" */ '../views/CrowdView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/managecrowd",
    name: 'ManageCrowd',
    component: () =>
      import(/* webpackChunkName: "managecrowd" */ "../views/ManageCrowd.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: '/managecrowd/:id',
    name: 'ManageSingleCrowd',
    component: () => import(/* webpackChunkName: "managesinglecrowd" */  '../views/ManageCrowdView.vue'),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/chat",
    name: "Chat",
    component: () => import(/* webpackChunkName: "chat" */ "../views/Chat.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/ocr",
    name: "OCR",
    component: () =>
      import(/* webpackChunkName: "ocr" */ "../views/OCR.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/convert",
    name: "Convert",
    component: () =>
      import(/* webpackChunkName: "convert" */ "../views/Convert.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    },
  },

  {
    path: "/video",
    name: "Video",
    component: () =>
      import(/* webpackChunkName: "video" */ "../views/Video.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/signin",
    name: "signin",
    component: () =>
      import(/* webpackChunkName: "signin" */ "../views/Signin.vue"),
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
      import(/* webpackChunkName: "adminview" */ "../admin/AdminView.vue"),
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
      import(/* webpackChunkName: "users" */ "../views/Users.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    },
  },

  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// // Working Route Guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !store.state.token) {
    next('/signin')
  }
  else {
    next()
   }
})

export default router;
