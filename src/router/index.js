import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Comment from "../views/Comment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/comment/:id",
    name: "Comment",
    component: Comment
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
