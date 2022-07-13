import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeViews.vue"),
  },
  {
    path: "/anggota",
    name: "anggota",
    component: () => import("@/views/anggotaViews.vue"),
  },

  {
    path: "/about",
    name: "about",
    component: () => import("@/views/aboutViews.vue"),
  },
  {
    path: "/form-daftar",
    name: "formdaftar",
    component: () => import("@/views/formdaftarViews.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    component: () => import("@/views/activityViews.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
