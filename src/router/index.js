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
import NotFound from "../view/NotFound.vue";
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home,name:"home",
    meta: {
      requiresAuth: true,
      not_admin: true,
      isVisitor:true
    }, },
    { path: "/homeuser", component: HomeUser , meta: {
      requiresAuth: true,
      not_admin: true,
    },},
    { path: "/404",name:"notfound", component: NotFound , meta: {
      requiresAuth: true,
    },},
    { path: "/login",name:"login", component: Login },
    { path: "/book", component: Book,  meta: {
      requiresAuth: true,
      not_admin: true,
      isVisitor:true
    }, },
    { path: "/bookdetail/:id", name: "bookdetail",component: BookDetail, props: true,   meta: {
      requiresAuth: true,
      isVisitor:true,
      not_admin: true,
    },},
    { path: "/postdetail/:id", name: "postdetail",component: PostDetail, props: true,  meta: {
      not_admin: true,
      requiresAuth: true,
      isVisitor:true,
    }, },
    { path: "/register", component: Register },
    { path: "/post", component: Post ,  meta: {
      not_admin: true,
      requiresAuth: true,
      isVisitor:true,
    },},
    {
      path: "/profile", name:"profile",
      component: Profile, meta: {
        requiresAuth: true,
        not_admin: true,
      },
    },
    { path: "/homeadmin", component: HomeAdmin,
    meta: {
      requiresAuth: true,
      not_system_user: true,
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

router.beforeEach((to, from, next) => {
  let isAuthenticated=localStorage.getItem('token')!=null?true:false;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated ) {
      if(to.matched.some((record) => record.meta.isVisitor)) {
        next()
      }else {
        next("/login")
      }
     
    }
     else {
      if (to.matched.some((record) => record.meta.not_system_user)) {
        if (localStorage.getItem("roleId") == 2 ) {
          next('/404')
        }
        
      }
      if(to.matched.some((record) => record.meta.not_admin)) {
        if ((localStorage.getItem("roleId") == 1) ) {
          next('/404')
        }
        if(to.matched.some((record) => record.name == 'home')) {
          next('/404')
        }
      }
      next()
    }
    next();
  } else {
    if(!isAuthenticated) {
      next()
    } else {
      next('/')
    }
    next()
  }
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!localStorage.getItem('token')) {
//       next('/login')
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
