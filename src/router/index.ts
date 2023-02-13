import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/form",
    // component: Home,
  },
  {
    path: "/flow",
    name: "Flow", 
    component: () => import("../views/Flow.vue"),
  },
  {
    path: "/form",
    name: "Form", 
    component: () => import("../views/Form.vue"),
  },
  {
    path: "/flow1",
    name: "Flow1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Flow1.vue"),
  },
  {
    path: "/flow2",
    name: "Flow2",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Flow2.vue"),
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router;

export default router;
