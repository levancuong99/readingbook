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
        if(res.data.roleId==1) {
          router.push("/manageaccount");
        }else {
          router.push("/homeuser");
        }
      });
    })
      .catch(() => {
        alert("Sai email hoặc mật khẩu!");
      });
  },
  logout() {
    localStorage.clear();
    router.push("/");
  },
  getInforByToken({ commit }, params) {
    http.post("/user/token", params).then((result) => {
      commit("setInforUserById", result.data);
    }).catch(() => {
       localStorage.clear();
       router.push("/");
      });
  },
  getInforUserById({ commit }, params) {
    http.get(`/users/${params}`).then((result) => {
      commit("setInforUserById", result.data);
      let obj={
        "email": result.data.email,
       "fullName": result.data.fullName,
        "address": result.data.address
        }
      localStorage.setItem("users", JSON.stringify(obj));
    })
      .catch(() => {
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
      alert("Cập nhật thông tin thành công!");
    })
      .catch(() => {
        alert("Cập nhật thông tin thất bại!");
      });
  },
  deleteUserById({ dispatch }, params) {
    http.delete(`/users/${params}`)
      .then(() => {
        dispatch("getAllUser");
      })
      .catch(() => {
        alert(" Xóa tài khoản thất bại!");
      });
  },

  updateUsersByAdmin({ dispatch }, params) {
    http.put(`/user/${params.id}`, params.obj).then(() => {
      dispatch("getAllUser");
      alert("Cập nhật thông tin tài khoản thành công!");
    })
      .catch(() => {
        alert("Cập nhật thông tin thất bại!");
      });
  },
  updateAvt({dispatch},param) {
    http.put(`/user/avt/${localStorage.getItem("userId")}`,param).then(() => {
      dispatch("getAllUser");
    })
      .catch(() => {
        alert("Cập nhật avt thất bại!");
      });
  },

  createUsers({ dispatch }, params) {
    http.post(`/users/create`, params).then(() => {
      dispatch("getAllUser");
      alert("Tạo tài khoản mới thành công !");
    })
      .catch((err) => {
        alert("Tạo tài khoản thất bại !");
        console.log(err);
      });
  },

  registerUsers({ dispatch }, params) {
    http.post(`/users/register`, params).then(() => {
      dispatch("Đăng ký tài khoản thành công !");
      alert("Đăng ký tài khoản thành công !");
      router.push("/login");
    })
      .catch(() => {
        alert("Đăng ký tài khoản thất bại !");
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
