import http from "../../service/service";

const state = {
  comment:{},
  comments: [],
};
const getters = {
  getAllComment() {
    return state.comments;
  },
};
const mutations = {
  setAllComment(state, data) {
    state.comments = data;
  },
};
const actions = {
  getAllComment({ commit },param) {
    http.get(`/comments/${param.bookId}/${param.pageNumber}`).then((result) => {
      commit("setAllComment", result.data);
    }).catch(() => { });
  },
  createComment({ dispatch },param) {
    http.post(`/comments/create`,param).then(() => {
      dispatch("getAllComment");
    }).catch(() => { });
  },
  deleteCommentById({ dispatch },param) {
    http.delete(`/comments/${param}`).then(() => {
      dispatch("getAllComment");
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
