import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: () =>
      import(/* webpackChunkName: "Analytics" */ "../views/Analytics.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/grants",
    name: "Grants",
    component: () =>
      import(/* webpackChunkName: "Grants" */ "../views/Grants.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/upload",
    name: "Upload",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/Upload.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import(/* webpackChunkName: "History" */ "../views/History.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/chat",
    name: "Chat",
    component: () =>
      import(/* webpackChunkName: "Chat" */ "../views/Chat.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/ocr",
    name: "OCR",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/OCR.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/convert",
    name: "Convert",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/Convert.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/video",
    name: "Video",
    component: () =>
      import(/* webpackChunkName: "Upload" */ "../views/Video.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "Signin" */ "../views/Signin.vue"),
    meta: {
      showHeader: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
