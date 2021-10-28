import Vue from "vue";
import Router from "vue-router";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Login },
    { path: "/register", component: Register },
  ],
});

export default router;
