import http from "../../service/service";
import router from "../../router";

const state = {
  userInfo: {},
  users: [],
};
const getters = {
  getUserInfor() {
    return state.userInfo;
  },
  getAllUser() {
    return state.users;
  },
};
const mutations = {
  setInforUserById(state, data) {
    state.userInfo = data;
  },
  setUsers(state, data) {
    state.users = data;
  },
};
const actions = {
  login({ commit }, params) {
    http.post("/login", params).then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId",res.data.userId);
      localStorage.setItem("roleId",res.data.roleId);
      http.post("/user/token", res.data.token).then((result) => {
        commit("setInforUserById", result.data);
        console.log(result.data);
        if(res.data.roleId==1) {
          router.push("/manageaccount");
        }else {
          router.push("/homeuser");
        }
      });
    })
      .catch((err) => {
        console.log(err);
        // localStorage.setItem("historyAccount", JSON.stringify(params));
        alert("Wrong username or password !");
      });
  },
  logout() {
    localStorage.clear();
    router.push("/");
  },
  getInforByToken({ commit }, params) {
    http.post("/user/token", params).then((result) => {
      commit("setInforUserById", result.data);
    })
      .catch((err) => {
        console.log(err);
        localStorage.clear();
        router.push("/");
      });
  },
  getInforUserById({ commit }, params) {
    http.get(`/users/${params}`).then((result) => {
      commit("setInforUserById", result.data);
      localStorage.setItem("users", JSON.stringify(result.data));
    })
      .catch(() => {
        // alert("Dont get infor user by id!");
      });
  },
  getAllUser({ commit }) {
    http.get("/users").then((result) => {
      commit("setUsers", result.data);
    }).catch(() => { });
  },
  updateInforUserById({ dispatch }, params) {
    http.put(`/users/${params.id}`,  params.obj).then(() => {
      dispatch("getAllUser");
    })
      .catch((err) => {
        alert("Update user fail!");
        console.log(err);
      });
  },
  deleteUserById({ dispatch }, params) {
    http.delete(`/users/${params}`)
      .then(() => {
        dispatch("getAllUser");
      })
      .catch((err) => {
        alert("Delete user fail !");
        console.log(err);
      });
  },

  updateUsersByAdmin({ dispatch }, params) {
    http.put(`/user/${params.id}`, params.obj).then(() => {
      dispatch("getAllUser");
    })
      .catch((err) => {
        alert("update user fail !");
        console.log(err);
      });
  },
  updateAvt({dispatch},param) {
    http.put(`/user/avt/${localStorage.getItem("userId")}`,param).then((res) => {
      console.log("ss");
      console.log("acc",res);

      dispatch("getAllUser");
    })
      .catch((err) => {
        alert("update avtuser fail !");
        console.log(err);
      });
  },

  createUsers({ dispatch }, params) {
    http.post(`/users/create`, params).then(() => {
      dispatch("getAllUser");
    })
      .catch((err) => {
        alert("Create user fail !");
        console.log(err);
      });
  },

  registerUsers({ dispatch }, params) {
    http.post(`/users/register`, params).then(() => {
      dispatch("getAllUser");
      router.push("/login");

    })
      .catch((err) => {
        alert("Register user fail !");
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
