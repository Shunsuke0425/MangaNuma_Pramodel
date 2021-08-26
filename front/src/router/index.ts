import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MangaList from "../pages/MangaList.vue";
import Login from "../pages/Login.vue";
import MangaDetail from "../pages/MangaDetail.vue";
import Comment from "../pages/Comment.vue";
import BuyPoint from "../pages/BuyPoint.vue";
import MangaContent from "../pages/MangaContent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/mangaList",
    name: "MangaList",
    component: MangaList,
  },
  {
    path: "/mangaDetail",
    name: "MangaDetail",
    component: MangaDetail,
    props: true,
  },
  {
    path: "/mangaContent",
    name: "MangaContent",
    component: MangaContent,
    props: true,
  },
  {
    path: "/comment",
    name: "Comment",
    component: Comment,
  },
  {
    path: "/buyPoint",
    name: "BuyPoint",
    component: BuyPoint,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
