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
    step: 1,
    signInLoading: false,
    signInDisabled: false,
    signUpLoading: false,
    signUpDisabled: false,
    signInErrorSnackbar: false,
    signUpErrorSnackbar: false
  },
  getters: {},
  mutations: {
    loginUser(state, userData) {
      state.token = userData.token;
      state.refreshToken = userData.refreshToken;
      state.user = userData.user;
    },
    registerUser(state, userData) {
      state.signUpLoading = true;
      state.signUpDisabled = true;
      state.user = userData.user;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.clear();
    },
    startLoader(state) {
      state.signInLoading = true;
      state.signInDisabled = true;
    },
    stopLoader(state) {
      state.signInLoading = false;
      state.signInDisabled = false;
    },
    changeToCreateAccount(state) {
      state.step = 2;
    },
    changeToSignIn(state) {
      state.step = 1;
    },
    SignUpSuccessful(state) {
      state.step = 3;
    },
    signInError(state) {
      state.signInErrorSnackbar = true
    },
    signUpError(state) {
      state.signUpErrorSnackbar = true
    }
  },
  actions: {
    SIGN_IN({ commit }, authData) {
      commit("startLoader");
      axios
        .post("http://192.168.1.4:3000/api/v1/auth/login", {
          username: authData.username,
          password: authData.password,
        })
        .then((response) => {
          console.log(response.data.payload);
          commit("loginUser", {
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
        .catch((error) => {
          console.log(error);
          commit("stopLoader");
          commit("signInError")
        });
    },
    SIGN_UP({ commit }, authData) {
      commit("startLoader");
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
          password: authData.password,
        })
        .then((response) => {
          console.log(response);
          commit("registerUser", {
            user: response.data.payload,
          });
          commit("SignUpSuccessful");
          commit("stopLoader");
          // localStorage.setItem(
          //   "user",
          //   JSON.stringify(response.data.payload.user)
          // );
        })
        .catch((error) => {
          console.log(error);
          commit("stopLoader");
          commit("signUpError")
        });
    },
    SIGN_OUT: ({ commit }) => {
      commit("signOut");
    },
    CREATE_ACCOUNT_STEP: ({ commit }) => {
      commit("changeToCreateAccount");
    },
    SIGN_IN_STEP: ({ commit }) => {
      commit("changeToSignIn");
    },
  },
});

export default store;
