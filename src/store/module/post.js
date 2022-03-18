import http from "../../service/service";

const state = {
  post: {},
  posts: [],
};
const getters = {
  getPost() {
    return state.post;
  },
  getAllPost() {
    return state.posts;
  },
};
const mutations = {
  setPost(state, data) {
    state.post = data;
  },
  setAllPost(state, data) {
    state.posts = data;
  },
};
const actions = {
  getPost({ commit }, params) {
    http.get(`/post/${params}`).then((result) => {
      commit("setPost", result.data);
    })
      .catch(() => {
        alert("Lấy thông tin bài viết thất bạn!");
      });
  },
  getAllPost({ commit }) {
    http.get("/posts").then((result) => {
      commit("setAllPost", result.data);
    }).catch(() => { });
  },
  getAllPostPaging({ commit },param) {
    http.get(`/post/paging/${param}`).then((result) => {
      commit("setAllPost", result.data);
    }).catch(() => { });
  },
  updatePostById({ commit,dispatch }, params) {
    http.put(`/post/${params.id}`, params.obj).then((result) => {
      commit("setPost", result.data);
      dispatch("getAllPost");
      alert("Cập nhật bài đăng thành công!");
    })
      .catch(() => {
        alert("Cập nhật bài đăng thất bại!");
      });
  },
  deletePostById({ dispatch }, params) {
    http.delete(`/post/${params}`)
      .then(() => {
        dispatch("getAllPost");
      })
      .catch(() => {
        alert("Xóa bài đăng thất bại !");
      });
  },

 

  createPost({ dispatch }, params) {
    http.post(`/post/create`, params).then(() => {
      dispatch("getAllPost");
      alert("Tạo mới bài viết thành công !");
    })
      .catch(() => {
        alert("Tạo mới bài viết thất bại !");
      });
  },

};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
