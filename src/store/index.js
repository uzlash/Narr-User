import Vue from "vue";
import Vuex from "vuex";
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
      signInErrorPayload: null,
      signInSuccessSnackbar: false,
      signInSuccessPayload: null
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
      state.signUp.signUpErrorSnackbar = true
      state.signUp.signUpErrorPayload = error
    },
    signInSuccess(state, payload) {
      state.signIn.signInSuccessSnackbar = true
      state.signIn.signInSuccessPayload = payload
    }
  },
  actions: {
    SIGN_IN({ commit }, authData) {
      commit("startLoader");
      fetch('https://narr.ng/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: authData.email, password: authData.password})
      })
      .then((r) => r.json())
      .then(response =>{
        if(response.status === 'failed') {
          commit('stopLoader')
          commit("signInError", response.message)
        }
        else {
          commit("loginUser", {
            token: response.payload.token,
            refreshToken: response.payload.refreshToken,
            user: response.payload.user,
          });
          localStorage.setItem("token", response.payload.token);
          localStorage.setItem(
            "refreshToken",
            response.payload.refreshToken
          );
          localStorage.setItem(
            "user",
            JSON.stringify(response.payload.user)
          );
          router.push("/");
          commit("stopLoader");
        }
      })
      .catch(error => console.log('Error>>>', error))
    },
    SIGN_UP({ commit }, authData) {
      const data = {
          fName: authData.fName,
          lName: authData.lName,
          email: authData.email,
          phone: authData.phone,
          address: authData.address,
          dob: authData.dob,
          institution: {
            type: authData.institution.type,
            name: authData.institution.name,
          },
          password: authData.password,
      }
      commit("startLoader");
      fetch('https://narr.ng/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(r => r.json())
      .then(response => {
        if(response.status === 'failed') {
          commit('stopLoader')
          commit("signInError", response.message)
        }
        else {
          commit("registerUser", { user: response.payload });
          commit("SignUpSuccessful");
          commit("stopLoader");
        }
      })
      .then(data => console.log(data))
      .catch((error) => {
        console.log('Error>>>>>>>>>>>>>', error);
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
