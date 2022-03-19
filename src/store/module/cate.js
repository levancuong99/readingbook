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
  createCate({dispatch},param) {
    http.post("/cate/create",param).then(() => {
      dispatch("getAllCate");
      alert("Thêm thể loại thành công");
    }).catch(() => { 
      alert("Thêm thể loại thất bại");

    });
  }
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
