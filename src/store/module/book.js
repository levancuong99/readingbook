import http from "../../service/service";

const state = {
  bookInfo: {},
  books: [],
  bookViewed:[],
  bookLiked:[]
};
const getters = {
  getBookInfor() {
    console.log(state.bookInfo);
    return state.bookInfo;

  },
  getAllBook() {
    return state.books;
  },
  getAllBookViewed() {
    return state.bookViewed;
  },
  getAllBookLiked() {
    return state.bookLiked;
  }
};
const mutations = {
  setInfoBookById(state, data) {
    console.log("vo set");
    console.log(data);
    state.bookInfo = data;
  },
  setBooks(state, data) {
    state.books = data;
  },
  setAllBookViewed(state,data) {
    state.bookViewed=data;
  },
  setAllBookLiked(state,data) {
    state.bookLiked=data;
  },
};
const actions = {
  getBookById({ commit }, params) {
    console.log("vo action")
    http.get(`/books/${params}`).then((result) => {
      commit("setInfoBookById", result.data);
    })
      .catch(() => {
        alert("Dont get infor book by id!");
      });
  },
  getAllBook({ commit }) {
    http.get("/books").then((result) => {
      commit("setBooks", result.data);
    }).catch(() => { });
  },
  updateInforBookById({ commit }, params) {
    http.put(`/books/${JSON.parse(localStorage.getItem("users")).userId}`, params).then((result) => {
      commit("setInfoBookById", result.data);
      localStorage.setItem("users", JSON.stringify(result.data));
    })
      .catch((err) => {
        alert("Update user fail!");
        console.log(err);
      });
  },
  deleteBookById({ dispatch }, params) {
    http.delete(`/books/${params}`)
      .then(() => {
        dispatch("getAllBook");
      })
      .catch((err) => {
        alert("Delete user fail !");
        console.log(err);
      });
  },
  createBook({ dispatch }, params) {
    http.post(`/books/create`, params).then(() => {
      dispatch("getAllBook");
    })
      .catch((err) => {
        alert("Create user fail !");
        console.log(err);
      });
  },
  getAllBookViewed({ commit },param1) {
    http.get(`/books/viewed/${param1.userId}/${param1.pageNumber}`).then((result) => {
      commit("setAllBookViewed", result.data);
    }).catch(() => { });
  },
  getAllBookLiked({ commit },param1,param2) {
    http.get(`/books/liked/${param1}/${param2}`).then((result) => {
      commit("setAllBookLiked", result.data);
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
