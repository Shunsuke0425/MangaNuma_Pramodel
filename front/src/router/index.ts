import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MangaList from "../pages/MangaList.vue";
import Login from "../pages/Login.vue";
import MangaDetail from "../pages/MangaDetail.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/MangaList",
    name: "MangaList",
    component: MangaList,
  },
  {
    path: "/MangaDetail",
    name: "MangaDetail",
    component: MangaDetail,
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
