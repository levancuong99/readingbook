import http from "../../service/service";

const state = {
  bookInfo: {},
  books: [],
  booksBestLiker:[],
  bookViewed:[],
  bookLiked:[],
  currentPage:"",
  total:"",
  perPage:"",
  currentPageL:"",
  totalL:"",
  perPageL:"",
  currentPageB:"",
  totalB:"",
  perPageB:"",
  isLiked:false

  // bookSearchByCate:[],
};
const getters = {
  getIsLiked() {
    return state.isLiked;
  },
  getCurrentPageV() {
    return state.currentPage;
  },
  getTotalV() {
    return state.total;
  },
  getPerPageV() {
    return state.perPage;
  },
  getCurrentPageL() {
    return state.currentPageL;
  },
  getTotalL() {
    return state.totalL;
  },
  getPerPageL() {
    return state.perPageL;
  },
  getCurrentPageB() {
    return state.currentPageB;
  },
  getTotalB() {
    return state.totalB;
  },
  getPerPageB() {
    return state.perPageB;
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
  getAllBookViewed() {
    return state.bookViewed;
  },
  getAllBookLiked() {
    return state.bookLiked;
  },
 
};
const mutations = {
  setIsLiked(state,data) {
   state.isLiked=data;
  },
  setCurrentPageV(state,data) {
    state.currentPage=data;
  },
  setTotalV(state,data) {
    state.total=data;
  },
  setPerPageV(state,data) {
   state.perPage=data;
  },

  setCurrentPageL(state,data) {
    state.currentPageL=data;
  },
  setTotalL(state,data) {
    state.totalL=data;
  },
  setPerPageL(state,data) {
   state.perPageL=data;
  },

  setCurrentPageB(state,data) {
    state.currentPageB=data;
  },
  setTotalB(state,data) {
    state.totalB=data;
  },
  setPerPageB(state,data) {
   state.perPageB=data;
  },

  setInfoBookById(state, data) {
    state.bookInfo = data;
  },
  setBooks(state, data) {
    state.books = data;
  },
  setBooksBestLiker(state,data) {
    state.booksBestLiker = data;
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
  getAllBookPaging({ commit },params) {
    http.get(`/books/paging/${params}`).then((result) => {
      commit("setBooks", result.data);
      commit("setCurrentPageB", result.data.currentPage);
      commit("setTotalB", result.data.allRow);
      commit("setPerPageB", result.data.numberRowCurrentpage);
    }).catch(() => { });
  },
  updateInforBookById({ commit ,dispatch}, params) {
    http.put(`/books/${params.bookId}`, params.obj).then((result) => {
      commit("setInfoBookById", result.data);
      dispatch("getAllBook");
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
      commit("setCurrentPageV", result.data.currentPage);
      commit("setTotalV", result.data.allRow);
      commit("setPerPageV", result.data.numberRowCurrentpage);
    }).catch(() => { });
  },
  getAllBookLiked({ commit },param1) {
    http.get(`/books/liked/${param1.userId}/${param1.pageNumber}`).then((result) => {
      commit("setAllBookLiked", result.data);
      commit("setCurrentPageL", result.data.currentPage);
      commit("setTotalL", result.data.allRow);
      commit("setPerPageL", result.data.numberRowCurrentpage);
     
    }).catch(() => { });
  },
  getAllBookBestViewer({ commit },param1) {
    http.get(`/books/bestviewer/paging/${param1}`).then((result) => {
      commit("setBooks", result.data);
    }).catch(() => { });
  },
  getAllBookBestLiker({ commit },param1) {
    http.get(`/books/bestliker/paging/${param1}`).then((result) => {
      commit("setBooksBestLiker", result.data);
    }).catch(() => { });
  },
  getAllBookSearch({ commit },param) {
    http.get(`/books/search/${param.cateId}/${param.string}/${param.pageNumber}`).then((result) => {
      commit("setBooks", result.data);
      commit("setCurrentPageB", result.data.currentPage);
      commit("setTotalB", result.data.allRow);
      commit("setPerPageB", result.data.numberRowCurrentpage);
    }).catch(() => { });
  },
  increaseView(params) {
    http.put(`/books/increaseview/${params}`).then(() => {
    }).catch(() => { });
  },
  // increaseLike({dispatch},params) {
  //   http.put(`/books/increaselike/${params}`).then(() => {
  //     console.log("ss +");
  //     dispatch("getAllBook");
  //   }).catch(() => { });
  // },
  bookAlreadyViewByUser(params) {
    http.post(`/books/viewed/create/${params.idUser}/${params.bookId}`).then(() => {
    }).catch(() => { });
  },
  bookAlreadyLikeByUser({ dispatch },params) {
      http.post(`/books/liked/create/${params.idUser}/${params.bookId}`).then(() => {
      http.put(`/books/increaselike/${params.bookId}`).then((res) => {
        console.log(res.data);
        dispatch("getAllBook");
      }).catch(() => { });
     
    
    }).catch(() => { });
  },
  // addLiked(params) {
  //   http.post(`/books/liked/create/${params.idUser}/${params.bookId}`).then(() => {
  //     console.log("success");
  //     http.put(`/books/increaselike/${params.bookId}`).then(() => {
  //     }).catch(() => { });
  //   }).catch(() => { });
  // } ,

   getIsLikedBookByUser({commit},params) {
     http.get(`/books/liked/check/${params.idUser}/${params.bookId}`).then((res) => {
      commit("setIsLiked", res.data);
    }).catch(() => { });
  },
  getAllBookNewest({ commit },param1) {
    http.get(`/books/newest/paging/${param1}`).then((result) => {
      commit("setBooks", result.data);
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
