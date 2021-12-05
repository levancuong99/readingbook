import Vue from "vue"
import Vuex from "vuex"
import Auth from "./module/auth"
import Book from "./module/book"
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        AUTH: Auth,
        BOOK: Book
    },
})