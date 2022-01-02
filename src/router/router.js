import Vue from "vue";
import Router from "vue-router";
import Login from "../view/Login.vue";
import Register from "../view/Register.vue";
import HomeUser from "../view/HomeUser.vue";
import Profile from "../view/Profile.vue";
import PersonalInformation from "../view/PersonalInformation.vue";
import HomeAdmin from "../view/HomeAdmin.vue";
import MyBook from "../view/MyBook.vue";
import AlreadyRead from "../view/AlreadyRead.vue";
import ManageAccount from "../view/ManageAccount.vue";
import ManageRepoBook from "../view/ManageRepoBook.vue";
import ManageProposeBook from "../view/ManageProposeBook.vue";
import ManagePost from "../view/ManagePost.vue";
import BookDetail from "../view/BookDetail.vue";
import Post from "../view/Post.vue";
import Book from "../view/Book.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomeUser },
    { path: "/login", component: Login },
    { path: "/book", component: Book },
    { path: "/bookdetail:id", name: "bookdetail",component: BookDetail, params:true,
    props: true },
    { path: "/register", component: Register },
    { path: "/post", component: Post },
    {
      path: "/profile",
      component: Profile,
      children: [
        {
          name: "personalInformation",
          path: "/personalinformation",
          component: PersonalInformation,
        },
        {
          name: "mybook",
          path: "/mybook",
          component: MyBook,
        },
        {
          name: "alreadyread",
          path: "/alreadyread",
          component: AlreadyRead,
        
        },
      ],
    },
    { path: "/homeadmin", component: HomeAdmin,
    children: [
      {
        name: "manageaccount",
        path: "/manageaccount",
        component: ManageAccount,
      },
      {
        name: "managerepobook",
        path: "/managerepobook",
        component: ManageRepoBook,
      },
      {
        name: "manageproposebook",
        path: "/manageproposebook",
        component: ManageProposeBook,
      },
      {
        name: "managepost",
        path: "/managepost",
        component: ManagePost,
      },
    ], },
  ],
});

// router.beforeEach((to, from, next) => {
//   // let userInfo = JSON.parse(localStorage.getItem('user'))
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!localStorage.getItem('token')) {
//       next('/')
//     }
//     //  else {
//     //   if (to.matched.some((record) => record.meta.not_system_user)) {
//     //     if (userInfo.role_id != 1 && to.matched.some((record) => record.name == 'accountmanagement')) {
//     //       next('/404')
//     //     }
//     //   }
//     //   next()
//     // }
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
