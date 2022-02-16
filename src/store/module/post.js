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
        alert("Dont get infor post by id!");
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
    })
      .catch((err) => {
        alert("Update post fail!");
        console.log(err);
      });
  },
  deletePostById({ dispatch }, params) {
    http.delete(`/post/${params}`)
      .then(() => {
        dispatch("getAllPost");
      })
      .catch((err) => {
        alert("Delete post fail !");
        console.log(err);
      });
  },

 

  createPost({ dispatch }, params) {
    http.post(`/post/create`, params).then(() => {
      dispatch("getAllPost");
    })
      .catch((err) => {
        alert("Create post fail !");
        console.log(err);
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
