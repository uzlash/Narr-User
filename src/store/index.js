import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import helpers from '../services/helpers'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    step: 1,
    signIn: {
      signInLoading: false,
      signInDisabled: false,
      signInErrorSnackbar: false,
      signInErrorPayload: null,
      signInSuccessSnackbar: false,
      signInSuccessPayload: null,
    },
    signUp: {
      signUpLoading: false,
      signUpDisabled: false,
      signUpErrorSnackbar: false,
      signUpErrorPayload: null,
    },
    //Socket
    socket: {
      signIn: {
        user: JSON.parse(localStorage.getItem('user')),
      },
      logout: {
        user: {},
      },
      microserviceStatus: '',
      usersOnline: [],
    },
  },
  getters: {
    getUser: (state) => {
      return state.user
    },
    getLoginUserSocket: (state) => {
      return state.socket.signIn.user
    },
    getMstatus: (state) => {
      return state.socket.mStatus
    },
    getSocketUsersOnline: (state) => {
      return state.socket.usersOnline
    },
  },
  mutations: {
    loginUser(state, userData) {
      state.token = userData.token
      state.refreshToken = userData.refreshToken
      state.user = userData.user
    },
    registerUser(state, userData) {
      state.signUp.signUpLoading = true
      state.signUp.signUpDisabled = true
      state.user = userData.user
    },
    signOut(state) {
      state.user = null
      state.token = null
      state.refreshToken = null
      localStorage.clear()
    },
    startLoader(state) {
      state.signIn.signInLoading = true
      state.signIn.signInDisabled = true
    },
    stopLoader(state) {
      state.signIn.signInLoading = false
      state.signIn.signInDisabled = false
    },
    changeToCreateAccount(state) {
      state.step = 2
    },
    changeToSignIn(state) {
      state.step = 1
    },
    SignUpSuccessful(state) {
      state.step = 3
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
    },
    //Sockets
    socketUserLogin(state, payload) {
      state.socket.signIn.user = payload
    },
    socketUserLogout(state, payload) {
      state.socket.logout.user = payload
    },
    microserviceStatus(state, payload) {
      state.socket.microserviceStatus = payload
    },
    // SocketUsersOnline(state, payload) {
    //   state.socket.usersOnline = payload
    // },
    'SOCKET_EVENT:USERS:CURRENTLY:ONLINE'(state, payload) {
      state.socket.usersOnline = JSON.parse(payload)
      console.log('Mutation socket', state.socket.usersOnline)
    },
    AddUserToSocketUsersArray(state, payload) {
      const user = JSON.parse(payload)
      console.log('User', user)
      console.log('Payload', payload)
      console.log('State socket', state.socket.usersOnline)

      for (const socket of state.socket.usersOnline) {
        console.log('Socket', socket)
        if (socket.email === user.email) {
          console.log('User Already Exist')
        } else {
          state.socket.usersOnline.push(user)
        }
      }

      // if (user.email === state.user.email) {
      //   state.socket.usersOnline = state.socket.usersOnline.filter(
      //     (payload, index, self) => {
      //       index === self.findIndex((t) => t.email === payload.email)
      //     }
      //   )
      // } else {
      //   state.socket.usersOnline.push(user)
      // }

      // if (user.email === state.user.email) {
      //   console.log('User Already Exists')
      // } else {
      //   state.socket.usersOnline.push(user)
      // }
      // state.socket.usersOnline.forEach((userInArray) => {
      //   console.log('User in Array', userInArray)
      //   console.log('Normal User', user)
      //   if (userInArray.email === user.email) {
      //     console.log('User Already Exist')
      //   } else {
      //     state.socket.usersOnline.push(user)
      //   }
      // })
    },
    RemoveUserFromSocketUsersArray(state, payload) {
      const user = JSON.parse(payload)
      state.socket.usersOnline.splice(
        state.socket.usersOnline.findIndex(
          (value) => value.email === user.email
        ),
        1
      )
    },
  },
  actions: {
    SIGN_IN({ commit }, authData) {
      commit('startLoader')
      fetch(helpers.apiBaseUrl + 'api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: authData.email,
          password: authData.password,
        }),
      })
        .then((r) => r.json())
        .then((response) => {
          //status failed or false
          if (response.status === 'failed') {
            commit('stopLoader')
            commit('signInError', response.message)
          } else {
            const { token, user } = response.payload
            commit('loginUser', {
              token: token,
              user: user,
            })
            //Emit Socket Event
            this._vm.$socket.client.emit('LOGIN', { token, user })
            //Save To Local Storage
            localStorage.setItem('token', response.payload.token)
            localStorage.setItem('user', JSON.stringify(response.payload.user))
            if (user.userRole === 'admin') {
              router.push('/admin')
            } else {
              router.push('/')
            }
            commit('stopLoader')
          }
        })
        .catch((error) => {
          console.log('Error>>>', error)
          commit('signInError', error)
          commit('stopLoader')
        })
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
      commit('startLoader')
      fetch(helpers.apiBaseUrl + 'api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((r) => r.json())
        .then((response) => {
          if (response.status === 'failed') {
            commit('signInError', response.message)
            commit('stopLoader')
          } else {
            commit('registerUser', { user: response.payload })
            commit('SignUpSuccessful')
            commit('stopLoader')
          }
        })
        .catch((error) => {
          console.log('Error>>>>>>>>>>>>>', error)
          commit('signUpError', error)
          commit('stopLoader')
        })
    },
    SIGN_OUT: ({ commit }) => {
      commit('signOut')
    },
    CREATE_ACCOUNT_STEP: ({ commit }) => {
      commit('changeToCreateAccount')
    },
    SIGN_IN_STEP: ({ commit }) => {
      commit('changeToSignIn')
    },
    //Socekts - Note Dont use arrow functions
    socket_connect(data) {
      const user = store.state.user
      const token = store.state.token
      if (token && user) {
        console.log('User Local Storage', user)
        console.log('Token Local Storage', token)
        console.log('User Online Resending login...')
        this._vm.$socket.client.emit('LOGIN', {
          token,
          user,
        })
        console.log('Socket Connected!', data)
      } else {
        console.log('Socket Connected!', data)
      }
    },
    'socket_event:user:login'({ commit }, user) {
      let obj = JSON.parse(user)
      console.log('Logged in using socket!', obj.email)
      console.log('Object.email', obj.email)
      console.log('User storage. email', store.state.user.email)
      if (obj.email === store.state.user.email) {
        this._vm.$toast.success(`Welcome, ${obj.fullName}`)
      } else {
        this._vm.$toast.success(`User Logged In, ${obj.fullName}`)
        commit('AddUserToSocketUsersArray', user)
      }
      commit('socketUserLogin', user)
    },
    'socket_event:microservice:statuses'({ commit }, data) {
      console.log('Microservice Statuses>>>', data)
      commit('microserviceStatus', data)
    },
    'socket_event:user:logout'({ commit }, user) {
      let obj = JSON.parse(user)
      console.log('User Logged Out using socket!', obj)
      commit('RemoveUserFromSocketUsersArray', user)

      this._vm.$toast.warning(`User Logged Out:  ${obj.fullName}`)
      commit('socketUserLogout', user)
    },
    // 'socket_event:users:currently:online'({ commit }, usersOnline) {
    //   const parsedUsersOnline = JSON.parse(usersOnline)
    //   console.log('User Currently Online', parsedUsersOnline)
    //   commit('SocketUsersOnline', parsedUsersOnline)
    // },
    socket_disconnect(data) {
      console.log('Socket disconnected!', data)
    },
  },
})

export default store
