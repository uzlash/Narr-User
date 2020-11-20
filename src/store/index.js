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
    signIn: {
      signInLoading: false,
      signInDisabled: false,
      signInErrorSnackbar: false,
      signInErrorPayload: null
    },
    signUp: {
      signUpLoading: false,
      signUpDisabled: false,
      signUpErrorSnackbar: false,
      signUpErrorPayload: null
    }
  },
  getters: {},
  mutations: {
    loginUser(state, userData) {
      state.token = userData.token;
      state.refreshToken = userData.refreshToken;
      state.user = userData.user;
    },
    registerUser(state, userData) {
      state.signUp.signUpLoading = true;
      state.signUp.signUpDisabled = true;
      state.user = userData.user;
    },
    signOut(state) {
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      localStorage.clear();
    },
    startLoader(state) {
      state.signIn.signInLoading = true;
      state.signIn.signInDisabled = true;
    },
    stopLoader(state) {
      state.signIn.signInLoading = false;
      state.signIn.signInDisabled = false;
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
    signInError(state, error) {
      state.signIn.signInErrorSnackbar = true
      state.signIn.signInErrorPayload = error
    },
    signUpError(state, error) {
      state.signUp.signUpErrorSnackbar = true,
      state.signUp.signUpErrorPayload = error
    },
  },
  actions: {
    SIGN_IN({ commit }, authData) {
      commit("startLoader");
      axios
        .post('http://localhost:3000/api/v1/auth/login', {
          email: authData.username,
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
          commit("stopLoader");
        })
        .catch((error) => {
          console.log(error);
          commit("stopLoader");
          commit("signInError", error)
        });
    },
    SIGN_UP({ commit }, authData) {
      commit("startLoader");
      axios
        .post('http://localhost:3000/api/v1/auth/register', {
          fname: authData.fname,
          lname: authData.lname,
          emial: authData.username,
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
        })
        .catch((error) => {
          console.log(error);
          commit("stopLoader");
          commit("signUpError", error)
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
