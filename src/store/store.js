import Vue from "vue"
import Vuex from "vuex"
import Auth from "./module/auth"
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        AUTH: Auth,
    },
})