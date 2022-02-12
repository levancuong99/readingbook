import Vue from "vue"
import Vuex from "vuex"
import Auth from "./module/auth"
import Book from "./module/book"
import Post from "./module/post"
import Cate from "./module/cate"
import Comment from "./module/comment"
// import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        AUTH: Auth,
        BOOK: Book,
        POST:Post,
        CATE:Cate,
        COMMENT:Comment
    },
    // plugins: [createPersistedState()]
})