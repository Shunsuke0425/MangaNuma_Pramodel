import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MangaList from "../pages/MangaList.vue";
import Login from "../pages/Login.vue";
import MangaDetail from "../pages/MangaDetail.vue";
import Comment from "../pages/Comment.vue";
import BuyPoint from "../pages/BuyPoint.vue";

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
    name: "Comment",
    component: Comment,
  },
  {
    path: "/BuyPoint",
    name: "BuyPoint",
    component: BuyPoint,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
