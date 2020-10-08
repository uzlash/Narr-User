import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    user: localStorage.getItem("user") || null,
  },
  getters: {
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      state.userId = userData.userId;
    },
  },
  actions: {
    signIn({ commit }, authData) {
      axios
        .post("http://192.168.1.4:3000/api/v1/auth/login", {
          username: authData.username,
          password: authData.password,
        })
        .then((response) => {
          console.log(response.data.payload);
          commit("authUser", {
            token: response.data.payload.token,
            refreshToken: response.data.payload.refreshToken,
            user: response.data.payload.user,
          });
          localStorage.setItem("token", response.data.payload.token);
          localStorage.setItem(
            "refreshToken",
            response.data.payload.refreshToken
          );
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.payload.user)
          );
          router.push("/");
        })
        .catch((error) => console.log(error));
    },
    signUp({ commit }, authData) {
      axios
        .post("http://192.168.1.4:3000/api/v1/auth/register", {
          fname: authData.fname,
          lname: authData.lname,
          username: authData.username,
          phone: authData.phone,
          address: authData.address,
          organization: authData.organization,
          selectedInstitutionType: authData.selectedInstitutionType,
          selectedInstitution: authData.selectedInstitution,
          password: authData.confirmPassword,
        })
        .then((response) => {
          console.log(response.data.payload);
          commit("authUser", {
            token: response.data.payload.token,
            refreshToken: response.data.payload.refreshToken,
            user: response.data.payload.user,
          });
          localStorage.setItem("token", response.data.payload.token);
          localStorage.setItem(
            "refreshToken",
            response.data.payload.refreshToken
          );
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.payload.user)
          );
          router.push("/");
        })
        .catch((error) => console.log(error));
    },
    // AUTH_LOGOUT: ({commit, dispatch}) => {
    //     return new Promise((resolve, reject) => {
    //       commit('AUTH_LOGOUT')
    //       localStorage.removeItem('user-token') // clear your user's token from localstorage
    //       resolve()
    //     })
    //   }
  },
});

export default store;
