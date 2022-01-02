import Vue from "vue"
import Vuex from "vuex"
import Auth from "./module/auth"
import Book from "./module/book"
import Post from "./module/post"
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        AUTH: Auth,
        BOOK: Book,
        POST:Post
    },
})