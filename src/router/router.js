import Vue from "vue";
import Router from "vue-router";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import HomeUser from "../view/HomeUser.vue";
import Profile from "../view/Profile.vue";
import PersonalInformation from "../component/PersonalInformation.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomeUser },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    {
      path: "/profile",
      component: Profile,
      children: [
        {
          name: "personalInformation",
          path: "/personalinformation",
          component: PersonalInformation,
        },
      ],
    },
  ],
});

export default router;
