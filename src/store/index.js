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
  getters: {},
  mutations: {
    authUser(state, userData) {
      state.token = userData.token;
      state.refreshToken = userData.refreshToken;
      state.user = userData.user;
    },
    registerUser(state, userData) {
      state.user = userData.user;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.clear();
    },
  },
  actions: {
    SIGN_IN({ commit }, authData) {
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
    SIGN_UP({ commit }, authData) {
      axios
        .post("http://192.168.1.4:3000/api/v1/auth/register", {
          fname: authData.fname,
          lname: authData.lname,
          username: authData.username,
          phone: authData.phone,
          address: authData.address,
          dob: authData.dob,
          organization: authData.organization,
          institution: {
            type: authData.institution.type,
            name: authData.institution.name,
          },
          // selectedInstitutionType: .selectedInstitutionType,
          // selectedInstitution: authData.selectedInstitution,
          password: authData.password,
        })
        .then((response) => {
          console.log(response);
          commit("registerUser", {
            user: response.data.payload,
          });
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.payload.user)
          );
        })
        .catch((error) => alert(error));
    },
    SIGN_OUT: ({ commit }) => {
      commit("signOut");
      // router.push("signin");
    },
  },
});

export default store;
