import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MangaList from "../pages/MangaList.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "MangaList",
    component: MangaList,
  },
  //ログインページを追加
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Login.vue"),
  },
  {
    path: "/comment",
    name: "Commnet",
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Comment.vue")
  },
  
  //コメントページを追加
];

const router = new VueRouter({
  routes,
});

export default router;
