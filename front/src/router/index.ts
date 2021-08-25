import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import MangaList from "../pages/MangaList.vue";
import Login from "../pages/Login.vue";
import MangaDetail from "../pages/MangaDetail.vue";
import MangaContent from "../pages/MangaContent.vue";
import Comment from "../pages/Comment.vue";

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
    path: "/MangaContent",
    name: "MangaContent",
    component: MangaContent,
  },
  {
    path: "/comment",
    name: "Comment",
    component: Comment
  },

  //コメントページを追加
];

const router = new VueRouter({
  routes,
});

export default router;
