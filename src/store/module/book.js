import http from "../../service/service";

const state = {
  bookInfo: {},
  books: [],
};
const getters = {
  getBookInfor() {
    return state.bookInfo;
  },
  getAllBook() {
    return state.books;
  },
};
const mutations = {
  setInfoBookById(state, data) {
    state.bookInfo = data;
  },
  setBooks(state, data) {
    state.books = data;
  },
};
const actions = {
  getBookById({ commit }, params) {
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
    http.post(`books/create`, params).then(() => {
      dispatch("getAllBook");
    })
      .catch((err) => {
        alert("Create user fail !");
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
