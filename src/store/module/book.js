import http from "../../service/service";

const state = {
  bookInfo: {},
  books: [],
  bookNewest: [],
  booksBestLiker: [],
  bookViewed: [],
  bookLiked: [],
  isLiked: false,
};
const getters = {
  getIsLiked() {
    return state.isLiked;
  },
  getBookInfor() {
    console.log(state.bookInfo);
    return state.bookInfo;
  },
  getAllBookBestLiker() {
    return state.booksBestLiker;
  },
  getAllBook() {
    return state.books;
  },
  getAllBookNewest() {
    return state.bookNewest;
  },
  getAllBookViewed() {
    return state.bookViewed;
  },
  getAllBookLiked() {
    return state.bookLiked;
  },
};
const mutations = {
  setIsLiked(state, data) {
    state.isLiked = data;
  },

  setInfoBookById(state, data) {
    state.bookInfo = data;
  },
  setBooks(state, data) {
    state.books = data;
  },
  setBookNewest(state, data) {
    state.bookNewest = data;
  },
  setBooksBestLiker(state, data) {
    state.booksBestLiker = data;
  },
  setAllBookViewed(state, data) {
    state.bookViewed = data;
  },
  setAllBookLiked(state, data) {
    state.bookLiked = data;
  },
};
const actions = {
  getBookById({ commit }, params) {
    http
      .get(`/books/${params}`)
      .then((result) => {
        commit("setInfoBookById", result.data);
      })
      .catch(() => {
        alert("Dont get infor book by id!");
      });
  },
  getAllBook({ commit }) {
    http
      .get("/books")
      .then((result) => {
        commit("setBooks", result.data);
      })
      .catch(() => {});
  },
  getAllBookPaging({ commit }, params) {
    http
      .get(`/books/paging/${params}`)
      .then((result) => {
        commit("setBooks", result.data);
      })
      .catch(() => {});
  },
  updateInforBookById({ commit, dispatch }, params) {
    http
      .put(`/books/${params.bookId}`, params.obj)
      .then((result) => {
        commit("setInfoBookById", result.data);
        dispatch("getAllBook");
      })
      .catch((err) => {
        alert("Update user fail!");
        console.log(err);
      });
  },
  deleteBookById({ dispatch }, params) {
    http
      .delete(`/books/${params}`)
      .then(() => {
        dispatch("getAllBook");
      })
      .catch((err) => {
        alert("Delete user fail !");
        console.log(err);
      });
  },
  createBook({ dispatch }, params) {
    http
      .post(`/books/create`, params)
      .then(() => {
        dispatch("getAllBook");
      })
      .catch((err) => {
        alert("Create user fail !");
        console.log(err);
      });
  },
  getAllBookViewed({ commit }, param1) {
    http
      .get(`/books/viewed/${param1.userId}/${param1.pageNumber}`)
      .then((result) => {
        commit("setAllBookViewed", result.data);
      })
      .catch(() => {});
  },
  getAllBookLiked({ commit }, param1) {
    http
      .get(`/books/liked/${param1.userId}/${param1.pageNumber}`)
      .then((result) => {
        commit("setAllBookLiked", result.data);
      })
      .catch(() => {});
  },
  getAllBookBestViewer({ commit }, param1) {
    http
      .get(`/books/bestviewer/paging/${param1}`)
      .then((result) => {
        commit("setBooks", result.data);
      })
      .catch(() => {});
  },
  getAllBookBestLiker({ commit }, param1) {
    http
      .get(`/books/bestliker/paging/${param1}`)
      .then((result) => {
        commit("setBooksBestLiker", result.data);
      })
      .catch(() => {});
  },
  getAllBookSearch({ commit }, param) {
    http
      .get(`/books/search/${param.cateId}/${param.string}/${param.pageNumber}`)
      .then((result) => {
        commit("setBooks", result.data);
      })
      .catch(() => {});
  },
  increaseView({dispatch},params) {
    http
      .put(`/books/increaseview/${params}`)
      .then(() => {
        dispatch("getAllBook");
      })
      .catch(() => {});
  },
  increaseLike({dispatch},params) {
    http.put(`/books/increaselike/${params}`).then(() => {
      dispatch("getAllBook");
    }).catch(() => { });
  },
  decreaseLike({dispatch},params) {
    http.put(`/books/decreaselike/${params}`).then(() => {
      dispatch("getAllBook");
    }).catch(() => { });
  },
  bookAlreadyViewByUser({ dispatch },params) {
    http
      .post(`/books/viewed/create/${params.idUser}/${params.bookId}`)
      .then(() => {     dispatch("getAllBook");})
      .catch(() => {});
  },


  getAllBookNewest({ commit }, param1) {
    http
      .get(`/books/newest/paging/${param1}`)
      .then((result) => {
        commit("setBookNewest", result.data);
      })
      .catch(() => {});
  },

  bookAlreadyLikeByUser({ dispatch }, params) {
    http.post(`/books/liked/create/${params.idUser}/${params.bookId}`)
      .then(() => {
 
            dispatch("getAllBook");
      
      })
      .catch(() => {});
  },
  deleteBookAlreadyLikeByUser({ dispatch }, params) {
    http.delete(`/books/liked/delete/${params.idUser}/${params.bookId}`)
      .then(() => {
            dispatch("getAllBook");
      })
      .catch(() => {});
  },
  getIsLikedBookByUser({ commit }, params) {
    http.get(`/books/liked/check/${params.idUser}/${params.bookId}`).then((res) => {
        commit("setIsLiked", res.data);
      })
      .catch(() => {});
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
