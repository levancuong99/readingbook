import http from "../../service/service";

const state = {
  prop: {},
  props: [],
};
const getters = {
  getProp() {
    return state.prop;
  },
  getAllProp() {
    return state.props;
  },
};
const mutations = {
  setProp(state, data) {
    state.prop = data;
  },
  setAllProp(state, data) {
    state.props = data;
  },
};
const actions = {
  getProp({ commit }, params) {
    http.get(`/props/${params}`).then((result) => {
      commit("setProp", result.data);
    })
      .catch(() => {
        alert("Dont get infor prop by id!");
      });
  },
  getAllProp({ commit }) {
    http.get("/props").then((result) => {
      commit("setAllProp", result.data);
    }).catch(() => { });
  },
  getAllPropPaging({ commit },param) {
    http.get(`/props/paging/${param}`).then((result) => {
      commit("setAllProp", result.data);
    }).catch(() => { });
  },

  deletePropById({ dispatch }, params) {
    http.delete(`/props/${params}`)
      .then(() => {
        dispatch("getAllProp");
      })
      .catch((err) => {
        alert("Delete prop fail !");
        console.log(err);
      });
  },

 

  createProp({ dispatch }, params) {
    http.post(`/props/create`, params).then(() => {
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
