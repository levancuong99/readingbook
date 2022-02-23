import http from "../../service/service";

const state = {
  cates: [],
};
const getters = {
  getAllCate() {
    return state.cates;
  },
};
const mutations = {
  setAllCate(state, data) {
    state.cates = data;
  },
};
const actions = {
  getAllCate({ commit }) {
    http.get("/categories").then((result) => {
      commit("setAllCate", result.data);
    }).catch(() => { });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
