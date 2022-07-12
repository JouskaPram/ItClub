import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/anggota",
    name: "anggota",
    component: () => import("../components/anggota.vue"),
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../components/event.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../components/about.vue"),
  },
  {
    path: "/form-daftar",
    name: "formdaftar",
    component: () => import("../components/form-daftar.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
