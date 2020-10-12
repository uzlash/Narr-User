import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
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
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      showHeader: true,
      requiresAuth: true
    }
  },

  {
    path: "/grants",
    name: "Grants",
    component: () =>
      import(/* webpackChunkName: "Grants" */ "../views/Grants.vue"),
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !store.state.token) {
    next('/signin')
  } else {
    next()
  }
  // if (!store.state.token) {
  //   next('signin')
  // } 
  // else {
  //   next()
  // }
})

export default router;
