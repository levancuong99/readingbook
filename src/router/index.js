import Vue from "vue";
import Router from "vue-router";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import Home from "../view/Home.vue";
import HomeUser from "../view/HomeUser.vue";
import Profile from "../view/Profile.vue";
import HomeAdmin from "../view/HomeAdmin.vue";
import ManageAccount from "../view/ManageAccount.vue";
import ManageRepoBook from "../view/ManageRepoBook.vue";
import ManageProposeBook from "../view/ManageProposeBook.vue";
import ManagePost from "../view/ManagePost.vue";
import BookDetail from "../view/BookDetail.vue";
import PostDetail from "../view/PostDetail.vue"
import Post from "../view/Post.vue";
import Book from "../view/Book.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/homeuser", component: HomeUser },
    { path: "/login", component: Login },
    { path: "/book", component: Book },
    { path: "/bookdetail/:id", name: "bookdetail",component: BookDetail, props: true, },
    { path: "/postdetail/:id", name: "postdetail",component: PostDetail, props: true, },
    { path: "/register", component: Register },
    { path: "/post", component: Post },
    {
      path: "/profile",
      component: Profile,
    },
    { path: "/homeadmin", component: HomeAdmin,
    meta: {
      requiresAuth: true,
    },
    children: [
      
      {
        name: "manageaccount",
        path: "/manageaccount",
        component: ManageAccount,
        meta: {
          not_system_user: true,
        },
      },
      {
        name: "managerepobook",
        path: "/managerepobook",
        component: ManageRepoBook,
        meta: {
          not_system_user: true,
        },
      },
      {
        name: "manageproposebook",
        path: "/manageproposebook",
        component: ManageProposeBook,
        meta: {
          not_system_user: true,
        },
      },
      {
        name: "managepost",
        path: "/managepost",
        component: ManagePost,
        meta: {
          not_system_user: true,
        },
      },
    ], },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!localStorage.getItem('token')) {
//       next('/')
//     }
//      else {
//       if (to.matched.some((record) => record.meta.not_system_user)) {
//         // if (localStorage.getItem("roleId") != 1 && to.matched.some((record) => record.name == 'accountmanagement')) {
//         //   next('/404')
//         // }
//       }
//       next()
//     }
//     next();
//   } else {
//     if(!localStorage.getItem('token')) {
//       next()
//     } else {
//       next('/')
//     }
//     next()
//   }

// });

export default router;
