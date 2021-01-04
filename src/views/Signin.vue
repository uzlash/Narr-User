<template>
  <v-app>
    <v-main class="grey lighten-4 custom__container custom__bg">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8" class="pa-0">
            <v-card class tile>
              <v-window v-model="changeStep">
                <v-window-item :value="1">
                  <v-row class="mx-0">
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <div class="d-flex justify-center">
                          <v-card flat color="transparent">
                            <v-img
                              width="300"
                              :src="
                                `data:image/png;base64,${narrImg.encodedImg}`
                              "
                              alt="Narr Logo"
                            ></v-img>
                          </v-card>
                        </div>
                        <h1
                          class="text-center font-weight-thin text-h4 green--text text--darken-2"
                        >
                          SIGN IN
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn outlined class="mx-2" color="blue" fab small>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn outlined class="mx-2" color="red" fab small>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn
                            outlined
                            class="mx-2"
                            color="blue darken-4"
                            fab
                            small
                          >
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <v-form @submit.prevent ref="form">
                          <v-row justify="center">
                            <v-col cols="12" md="8">
                              <v-text-field
                                hide-details="auto"
                                v-model="email"
                                solo
                                class="mt-4"
                                label="Email"
                                name="Email"
                                prepend-icon="email"
                                type="text"
                                color="#00A368"
                                :rules="[rules.required, rules.email]"
                              />
                            </v-col>
                            <v-col cols="12" md="8">
                              <v-text-field
                                hide-details="auto"
                                v-model="password"
                                :append-icon="
                                  showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                :type="showPassword ? 'text' : 'password'"
                                solo
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                color="#00A368"
                                @click:append="showPassword = !showPassword"
                                :rules="[rules.required, rules.password]"
                              />
                            </v-col>
                          </v-row>
                        </v-form>
                        <ForgotPasswordPopup />
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          @click="signIn()"
                          :loading="signInMetaData.signInLoading"
                          :disabled="signInMetaData.signInDisabled"
                          rounded
                          class="text-capitalize px-8 white--text"
                          color="#00A368"
                          >Sign In</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="custom__col">
                      <v-card-text class="white--text mt-12">
                        <h2 class="text-center display-1 font-weight-thin mb-4">
                          Hello, Researcher!
                        </h2>
                        <h3 class="text-center font-weight-light">
                          Create an account, and start your research journey
                          with us.
                        </h3>
                        <div class="text-center mt-4">
                          <v-btn
                            outlined
                            class="text-capitalize"
                            rounded
                            dark
                            @click="createAccountStep()"
                            >Create Account</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height mx-0">
                    <v-col cols="12" md="4" class="custom__col">
                      <v-card-text class="white--text mt-12">
                        <h2 class="text-center display-1 font-weight-thin">
                          Welcome Back!
                        </h2>
                        <h3 class="text-center font-weight-light">
                          Sign in, and continue your research work.
                        </h3>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn
                          outlined
                          class="text-capitalize"
                          rounded
                          dark
                          @click="signInStep"
                          >Sign In</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8" class="pa-0">
                      <v-card
                        class="custom__scrollable__div"
                        height="500"
                        flat
                        color="transparent"
                      >
                        <v-card-text class="mt-12">
                          <div class="d-flex justify-center">
                            <v-card flat color="transparent">
                              <v-img
                                width="300"
                                :src="
                                  `data:image/png;base64,${narrImg.encodedImg}`
                                "
                                alt="Narr Logo"
                              ></v-img>
                            </v-card>
                          </div>
                          <h2
                            class="text-center font-weight-thin text-h4 green--text text--darken-2"
                          >
                            CREATE ACCOUNT
                          </h2>
                          <div class="text-center mt-4">
                            <v-btn outlined class="mx-2" color="blue" fab small>
                              <v-icon>fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn outlined class="mx-2" color="red" fab small>
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                            <v-btn
                              outlined
                              class="mx-2"
                              color="blue darken-4"
                              fab
                              small
                            >
                              <v-icon>fab fa-linkedin-in</v-icon>
                            </v-btn>
                          </div>
                          <v-form @submit.prevent ref="form">
                            <v-row justify="center">
                              <v-col cols="12" md="6">
                                <v-text-field
                                  hide-details="auto"
                                  v-model="fname"
                                  solo
                                  class="mt-4"
                                  label="First Name"
                                  prepend-icon="person"
                                  type="text"
                                  color="#00A368"
                                  :rules="[rules.required, rules.counter]"
                                />
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  hide-details="auto"
                                  v-model="lname"
                                  solo
                                  class="mt-4"
                                  label="Last Name"
                                  prepend-icon="person"
                                  type="text"
                                  color="#00A368"
                                  :rules="[rules.required, rules.counter]"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  hide-details="auto"
                                  v-model="email"
                                  solo
                                  label="Email"
                                  prepend-icon="email"
                                  type="text"
                                  color="#00A368"
                                  :rules="[rules.required, rules.email]"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  hide-details="auto"
                                  v-model="phone"
                                  solo
                                  label="08012345678"
                                  prepend-icon="phone"
                                  type="text"
                                  color="#00A368"
                                  :rules="[rules.required]"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  hide-details="auto"
                                  v-model="address"
                                  solo
                                  label="Address"
                                  prepend-icon="home"
                                  type="text"
                                  color="#00A368"
                                  :rules="[rules.required, rules.counter]"
                                />
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-select
                                  hide-details="auto"
                                  v-model="selectedInstitutionType"
                                  solo
                                  label="Institution Type"
                                  prepend-icon="mdi-school"
                                  :items="institutionTypes"
                                  :rules="[rules.required]"
                                  color="#00A368"
                                />
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-select
                                  hide-details="auto"
                                  v-if="selectedInstitutionType"
                                  v-model="selectedInstitution"
                                  solo
                                  label="Institution"
                                  prepend-icon="mdi-school"
                                  :items="filteredInstitutions"
                                  :rules="[rules.required]"
                                  color="#00A368"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-menu
                                  hide-details="auto"
                                  ref="menu"
                                  v-model="menu"
                                  :close-on-content-click="false"
                                  :return-value.sync="date"
                                  transition="scale-transition"
                                  offset-y
                                  max-width="290px"
                                  min-width="290px"
                                >
                                  <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                      :rules="[rules.required]"
                                      hide-details="auto"
                                      color="#00a368"
                                      solo
                                      v-model="date"
                                      label="Date Of Birth"
                                      prepend-icon="mdi-calendar"
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                    ></v-text-field>
                                  </template>
                                  <v-date-picker
                                    color="#00a368"
                                    v-model="date"
                                    type="date"
                                    no-title
                                    scrollable
                                  >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      text
                                      color="red"
                                      @click="menu = false"
                                    >
                                      Cancel
                                    </v-btn>
                                    <v-btn
                                      text
                                      color="#00a368"
                                      @click="$refs.menu.save(date)"
                                    >
                                      OK
                                    </v-btn>
                                  </v-date-picker>
                                </v-menu>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  hide-details="auto"
                                  solo
                                  label="Password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="#00A368"
                                  v-model="password"
                                  :rules="[rules.required, rules.password]"
                                />
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  hide-details="auto"
                                  solo
                                  label="Confirm Password"
                                  prepend-icon="lock"
                                  type="password"
                                  color="#00A368"
                                  v-model="confirmPassword"
                                  :rules="[
                                    rules.required,
                                    rules.password,
                                    passwordConfirmationRule,
                                  ]"
                                />
                              </v-col>
                            </v-row>
                          </v-form>
                        </v-card-text>
                        <div class="text-center mt-3">
                          <v-btn
                            @click="signUp()"
                            :loading="signInMetaData.signInLoading"
                            :disabled="signInMetaData.signInDisabled"
                            rounded
                            class="text-capitalize white--text px-8 mb-4"
                            color="#00A368"
                            >Create Account</v-btn
                          >
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="3">
                  <v-container>
                    <v-row class="fill-height">
                      <v-col cols="12">
                        <h2 class="text-h6 font-weight-light">
                          User Registered Successfully! Please Check your Email
                          for Confirmation.
                        </h2>
                      </v-col>
                      <v-col cols="3">
                        <v-btn
                          @click="signInStep"
                          rounded
                          class="text-capitalize px-8 mb-4"
                          color="#00A368"
                          dark
                          >Signin</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-container>
                </v-window-item>
              </v-window>
              <v-snackbar
                bottom
                color="warning"
                timeout="5000"
                v-model="signInMetaData.signInErrorSnackbar"
              >
                {{ signInMetaData.signInErrorPayload }}
              </v-snackbar>
              <v-snackbar
                bottom
                color="red"
                timeout="5000"
                v-model="signUpMetaData.signUpErrorSnackbar"
              >
                {{ signUpMetaData.signUpErrorPayload }}
              </v-snackbar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import axios from "axios";
import ForgotPasswordPopup from '../components/ForgotPasswordPopup'
export default {
  components: {
    ForgotPasswordPopup,
  },
  data: () => ({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    organization: '',
    selectedInstitutionType: '',
    selectedInstitution: '',
    password: '',
    confirmPassword: '',
    date: null,
    menu: false,
    modal: false,
    showPassword: '',
    narrImg: {
      encodedImg: `iVBORw0KGgoAAAANSUhEUgAAAosAAACyCAYAAAAqAIVbAAAACXBIWXMAAC4jAAAuIwF4pT92AAAMMWlUWHRYTUw6Y29tLmFkb2JlLnht
                  cAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4P
                  SJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOj
                  IyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA
                  8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRj
                  PSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc
                  2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy
                  5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzE
                  uMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJo
                  dHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93c
                  ykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA5LTE1VDEyOjQxOjU0LTA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0xNlQxMTo0MD
                  owOS0wNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOS0xNlQxMTo0MDowOS0wNzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHB
                  ob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJ
                  RD0ieG1wLmlpZDphNjRiMWQ0MC0xMjA3LTNmNDktODc3Yy02MDk3NjNmYWM2NWIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkO
                  nBob3Rvc2hvcDoyOTcxMDA4Ny01MjA5LTRjNDQtOWU0Yi03NGM2YWZiZWFkMGEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLm
                  RpZDo3OGUyNjE5My0zMzkyLWU0NGUtYjFkOS04ODUwMDM0ZTMyMDIiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb24
                  9IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6
                  Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjY1MSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjE3OCI+IDxwaG90b3Nob
                  3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iTkFSUiIgcGhvdG9zaG9wOkxheWVyVGV4dD
                  0iTkFSUiIvPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9Ik5JR0VSSUEgQUNBREVNSUMgUkVTRUFSQ0ggUkVQT1NJVE9SWSIgcGh
                  vdG9zaG9wOkxheWVyVGV4dD0iTklHRVJJQSBBQ0FERU1JQyBSRVNFQVJDSCBSRVBPU0lUT1JZIi8+IDwvcmRmOkJhZz4gPC9waG90b3No
                  b3A6VGV4dExheWVycz4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+MkUwM0U5MzM5QTZDQTY1N
                  DlDQjcxNkJERDY2RjMxRUM8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3
                  Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OGUyNjE
                  5My0zMzkyLWU0NGUtYjFkOS04ODUwMDM0ZTMyMDIiIHN0RXZ0OndoZW49IjIwMjAtMDktMTVUMTI6NDE6NTQtMDc6MDAiIHN0RXZ0OnNv
                  ZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiI
                  HN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTFmNzkwNTEtM2M4OS1kZTRhLThkMDUtN2MzMjYyYjBmZDJhIiBzdEV2dDp3aGVuPSIyMD
                  IwLTA5LTE1VDEzOjU4OjQ1LTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cyk
                  iIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3
                  N2I2NDliLTJiOTctMjE0Mi05NWNlLTU5MWJjNWRiMGJkZSIgc3RFdnQ6d2hlbj0iMjAyMC0wOS0xNlQxMTo0MDowOS0wNzowMCIgc3RFd
                  nQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bG
                  kgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2h
                  vcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBm
                  cm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZ
                  CIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphNjRiMWQ0MC0xMjA3LTNmNDktODc3Yy02MDk3NjNmYWM2NWIiIHN0RXZ0OndoZW49Ij
                  IwMjAtMDktMTZUMTE6NDA6MDktMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3d
                  zKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmlu
                  c3RhbmNlSUQ9InhtcC5paWQ6OTc3YjY0OWItMmI5Ny0yMTQyLTk1Y2UtNTkxYmM1ZGIwYmRlIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZ
                  Tpkb2NpZDpwaG90b3Nob3A6MGZhYjRiMDEtMWQ1My0yNDQwLWE2NzItMmUzOGRiY2Q3ZjI0IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SU
                  Q9InhtcC5kaWQ6NzhlMjYxOTMtMzM5Mi1lNDRlLWIxZDktODg1MDAzNGUzMjAyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY
                  +IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QldTAgAAUg9JREFUeJztnXmcY1WZ93/POVmqUntVL9Cd6oVGQHDDFjcYZWl2
                  UGa0UVxfHQXGMa2jMwOjjuv4CqOvOsSZsXEZdx1aHdFBBBpBxw1lH2Wnt0oD3V1d+57c87x/5KYrlcpNJfeeJFWp58sndHdu7nNOzr259
                  3ef5zzPIWaGIAiCIAiCIBRD1bsDgiAIgiAIwuJFxKIgCIIgCILgiYhFQRAEQRAEwRMRi4IgCIIgCIInoXp3oFrs/v219e6CZTTI6QezA+
                  IpKGKAOkPM0ycTD53NzD0EzDCFDjC1/A+B7yUVZkPtgBkFUxTZw730Epo2vvTD9e6CIAiCICxbGlYsNj66lXj6Hdrp+0vwyHqANQAGVJq
                  p43FHr/0KoLbXu5eCIAiCICxtRCwuOVQEFP1zMgffqnjoZeDJzuz75G53QNy/WTuTGxirT0So41MAPVOv3gqCIAiCsLRpYLHYaNMxFZgi
                  m7Tz9FWK+y8knlwNGJ39nlTwWVbEYyvJSb+dzdTzjF71WUDdDFCmHj0XBEEQBGHp0rBikXi03l2wC4XjyjzzQW32XwbMNGVFopcgpuw2n
                  mnV/NTpisfXp0PHOKDYLYBxathrQRAEQRCWOA0rFpUzWO8uWCZ0ijKHzwKmmoAw5nsTCyH3ZUA8uFFj+FUM5x7AHKh+XwVBEARBaBQaVi
                  yymax3FywTWg12osXDzqVQAByQmdoA0m0iFgVBEARBqISGFYsEU+8uWIYZQereMEzWxtIrnSMIgiAIQv1oWLHI1F7vLliEQEgrcEUuxQI
                  TNAMiU5lXUhAEQRCE5U7DisUW6qhpewaEMQ6i5kqhodCvARMkxZuqJRMZQBiMGBnxWwqCIAhCg9GwYvGWdLpmbTEYzTB4ZSgKBwzAYBI2
                  A74MGEeDOYDeY3JfNnuFMIBWYjxlNHZmYmiqglzcat2iIAiCIAjl0rBi8e8nZmrWlgODlWoKn4xOw1AIQBQvDBEirnCaAcPhIAFgBmDc3
                  f1YIQBqmqECl81hABEAIQLCIOw1wL0O8ECmBf9veiU6yX5lHhGLgiAIglA/GlYs9lQt6DofggLAeOvELrSolQjTOnwmNolVRJhkYKMOoV
                  0TZph9pt1owIQAAzfPxQ/hfiAyBR89yHkQibJ/7jUKhx1GFzn43gzhC9NRrFfNOE6lXc+qIAiCIAiNQsOKxVqjAKygEJpJoUUB7x8/hB4
                  dQ1+G8bGWNrw0EkWMCO0EZAA4qMRHqEFMEXf95wphAASm8AGmyGSlYlGDoQE8xQqTxkE3GfzLVAw/njEIYRgtAE5QEWjyK4QFQRAEQVjM
                  iFisAgygnRTaibBJa3xyvB+ZiXb8Q3MzzgsZOCC0kYIDdhOcF/LGGSh2WvyJRSC7mguPZ1dvKU/S5Up6DzAQI4MPTrTh3vRBGIxhlQphv
                  Q5h0mRFsgHgs2OCIAiCICxyGm0B5UUHA2gmwkYVwhenhvDsod348vQgWhSQgYGCA4Ip4+U0+xeLQHbOo4NyX1NwMM0ZvG1C4YyRKRxiBz
                  2K0E6EEKRaoyAIgiAsF0Qs1ggGEAJhjdK4cWYKLxqewhemIlihMiByFnpFAacdQMhPggsDABGDFBZ6hUhhBBp/MRbG6SNPY5oZzZDqjII
                  gCIKwXBGxWAcYQAsx7kyH8LfjYXRjCsQzpV5RwkyMYHxNGyAARCpNpAyRQrFXTCkc4DDOHY7gVcN7oRtwDRxBEARBECpH5izWCUI20SVt
                  GG3I4DBTCe+dEwabCLO/wtoMgLPVe4pGj5sJuCcNvH+UoBUwZgw6IN5EQRAEQRDEs1hXYgTc7Ri8czyDTqWLevyyr9y2YO1RkRcARMEIw
                  +CgyT49yEkhCIIgCEIO0QV1RAEYZaDPAJ0ll8rLzjr0u2IfgUBEWb9kwatZMR40zfj36W50kgSeBUEQBEGYi4jFOtMMoM8Qrp7QaDJpmO
                  IvzcYJMzP5Cw5z7n88911CjBgMYJcJy5wEQRAEQRDmIWKxzmgAQwz8Nq2wWmWyK7TMf1GQdaEZBGajmA3yX02cwb3pKH6Qbkd3Sc+mIAi
                  CIAjLFRGLdSa31vIECJ+cakJYAWrey616E2TSIhvlvgA2MMxoowwGWeG+TNORdawFQRAEQRDyEbG4CAgBGGLC92YiWKnmzysEqQiIm32X
                  wmYGlGZSGrlXTBEeMDH8JhNDNzIiFQVBEARBKIqIxUUAAwgDiBDj+qkoDDeDuRnmyKslSsa0gJ0ArZBhELO7Hkw7GTxhovhVphXNJFJRE
                  ARBEITiiFisEwQFTWEod1VlBWCcCZ+eCqGVIiBEAPfFiBIA7dezSIQ5cxUj7OBPTgRPOBF0kQODbMa0Rhha0lwEQRAEQchDlEEAHl3/P0
                  XefQrA/857d1/e39fte35TmqdfMGhSJ2TgjGgK/c/j6391KLd9bcG+jw+dCTbkP8MFQC6L+vjOX83b8uyx56hxnjztAA5fGYYazpjMz/p
                  p3y397Xun+rG3iK2HPVt5ft/FgXopCIIgCMLiQsRiDTlh38s6+s2B3mkaPWvI2f+XI8f0PxcGvHbfcz523N5XfOax9b8cL7ojsQZY+22X
                  kfUcejmSHZjOcT38t9OxoYunGVDp0GWTM6EfxYY7vtNMXb873L5nxG/bgiAIgiAsbUQs1oANe0+OtVD0+HEeueTw2j1Xc9hEjmxUoP3xP
                  33o2P0vvwPAL4vtbzijNFjPXXelArJq0RAVn5w4xCOrJmhyHZA1byKZjrHIwFv1TOjPKR36QcfwUf/eRK0PHGh/YqbyxgVBEARBWMqIWK
                  wip+5/iRo36B7E5J8/dPTvvzBHJOZDrFLdD74FXmLRKKUCzC8lIjCT59rQkyYdyrCZdy44kUz7eOTw2yKTzWcqJ/SFzpGjvzvU/vR+v/0
                  QBEEQBGHpIWKxCpycOp8mzf4mR5nnDJnD7967btdbFnYIeqckkw5HlUHId+kcKABqBlBFDYQRwkyJIo4zzZPr087+a6NTree1Da/4YAQt
                  9x3u2CteRkEQBEFYBkg2tGWO3/dczTDrieh9dx1192/2rC9HKJYOLitMtjM46nepP4ZiqPAoqUimaNtEUQDRklY0q6mW0bMmm0ZuMjpzZ
                  c/IhiYfnREEQRAEYYkhnkWLrNuzRkHR6x5ctXO7CTutFWo7zyKK7MzEACec1fZ+BKOaAnjiuPabi3oWDUynQ5lYOZYy0ZmeIf3UZ5umO8
                  /pGl77nsGO/U/66NCyJbSt9w8AuqrczNecZOqfqtxGRehE/AlLpr7iJFOfsmSr6uhE/C4APVVu5pCTTL2sym1YRyfitfgt2GAKQBrAKIA
                  hALsAPALgPieZuquO/SoLGWdvmKXGcLmIWLTACXtPUyGafPkInn73o2sfvBS6YkXHABX1+rlbiUFgN6e5fLL7MJQD43jad+BEmbjsc4FD
                  rCf14IWZ6YnNnaNH//1Q29PfrKhby5sXoPq/u4/oRPw6J5laTFnsmyzZebElO1VHJ+JnoDb93aQT8TOcZOqOGrRlkxdgid+DdCLOyAqbJ
                  wH8DEDSSaYO1rVT83kBZJyFgCzpE6gUVKMI+7P3nh5O8+TZj66590cc4rDPSDEIatJrMxExcVb6+QxFG6WU8bGjNwSko9NHDYee+UpsvG
                  trm7Py7QfaH+uv1bgLJQkB+C6AC+vdkWXOVTVs60MAlppYbAQIWa/di9zXh3QiPgjgJwA+4CRTkhBoBxnnOtOwYnHE9NeoncMdaZ44n8M
                  c9muDAA4hVLzGIgAiowCmyoVi1q+YXebPG4UQfBh3O87hSQxewFP8bwAuHTJPVWxGqArn60T8BCeZeqTeHVnGvKKGbZ1Ww7aE0nQBeAuA
                  t+hE/EkAf+MkUz+pc58aERnnGtKwYnEGno462+2E05gKNieJyQBqzGuzMZmQhiH49CwSoBz2XgCG4UQY8F/0OwSd1hPPjw11hUZNv3c4X
                  aglBOAGAM+rd0eWIzoRvwBAcw2bjOhE/A1OMvWdGrYpLMwmAD/Wifg+AFc4ydTP6t2hBkXGuco0bMzQmPEjLzajAM/AXwh3IaxMkGVmTH
                  hvJjezxU9bDIA1mD2PNcOEEHQ1QUAxWDEc2H4JvnmuTsTPq3cnlinvr0Ob76tDm0J5rANws07Ef6kT8c56d6aBkXGuEg0rFmPtF6Gz/Xy
                  0tl+ESMdloPB6wOmHMWNweNr2nMagipE19KDXRlKkiJngO3OLobzLKOZC0AEHhDIEyiho2H4JgfhavTuwTDm1Dm2erBPxho0WNQh/BuAZ
                  nYjLfOLqIuNsmYYVi5Gmk9DcdCKi0ZOgIydCx04DtV6ItvYL0dV0PKYzB+CYcQAMZuPrBSD7d5hA40hMTpginpMsCUaDKk6FnmMASnm66
                  AycVib/cy7BgGI1PtE5aMIUhe2XEIjVOhGvh5dr2aIT8b/AAnVLq4QC8J46tCtURhTAT3Qi/ul6d6TBkXG2SMOKReYpGJ4C8xTYDIPCRw
                  OxU9HUvBkrWl6Mrraz0Nb8XGQyh13RaJAtdVjJC+6fQUO4ZAzzqNdWY0iBHQRwYM6q2yI4cGIM9u/CYzCxHgEAjYj1lxCYT4jHqab8TR3
                  bvryObQvlQwD+VifiN9S7Iw2OjLMlGlYszoUATgNmAo4zAq070dO2Be1tpyLSciq6Wk4GzATYzMCAy34BuZQT76X6yoPJsPG0wRQKA95z
                  Dhc2r4wpoWcZrAL4LV0jNAMABmT9JQSmGcD2endiGVHPWpDP0ol4ex3bFypjq07Ev1XvTiwDZJwDskzEYj4E5gwcZwgGUTS1X4wV7WdCN
                  W9GLPZ8tKoetFIXWql7wRcANFO7YhgLS995600ixECBMtcZKFVnkUu2X3YT+ab8vowBO9NgZxrI/SnY4K06EV9R7040OjoRfwNQV3c4IV
                  tzUVg6vFEn4v9Q704sA2ScA7AMxWIOAmDAzggcdhBqvwQdHeehR61GD61EN61EtzoK3epozxcAtFFP82i8f0t1e5puQZAwMQAqne0c0Ks
                  IAORkDVX6n8quM8MZEKehVQRNseMQbT4WoaZjEWk6NlDXhCNoADvq3YllQKLeHQDwxnp3QKiYT7or/gjVRcbZJ8tYLObDYDMGY8YxGerC
                  ZLgbM+FupOEgw5PIYAYZZJBBes4LABzMdLAyVZ3MTuxECax8azpiDXZKic2g5wEjO+kTRFTmS4GIQZgB6Rbo6HqoyBqEmp+F9u5z0NJ5D
                  po6t6C5s6o6fLlxuk7ET653JxqczfXuAIA1OhHvrXcnhIogAD/Uibjck6uLjLNPZNJ7AcMtpwLKQRMRmsZ+DzgjMGYC4BkQNArDtRmqrl
                  AEAGZoBkoUv1nQgmZTMmObENC7mCsCufDUR+N+0oHWrSDScJpOQKjlFGieRIYZJjMAwxEws50qlkI+3wNwfL070YjoRPxtAPxXFbDLxwC
                  8vd6dECqiE8DXAby5zv1odDoh41wxoq4LUDwNZaYBZxSxts0IdZ4HFVkHBQaQwawTLTcFkDWCV/tmgDxXPlGKmgEKkq1cUmnakWTk/r/Y
                  f64aZQapVqhQBww1o731ZHStfD1U0/HgzGGwmQR4GsGHUyjBcToR31rvTjQof13vDuRxSb07IPjiDToR7653J5YBMs4VImLREwJzGsaMI
                  Nb6QujosUjzDBxk4MDAccWig0zwqtFMrEgVXZ/w8cFTwuCZLrAJsvY0mEpmbAc+D+hILSGa9yLVBKhmgBS47XSEul4D0/1mpMMbYTKDAG
                  cgArGmfLHeHWg03LDWCyyYSlmwAQBdMuVgSaIAfKXenVgGyDhXiIShy8GMw4k8D47jgNIPATSb7Gio5FzAcmGCShfdYKY0OBNTQRJcCEQ
                  l1RiHApfOcfuvCh2gRGjtOQ/DTmt2qRh2ADMJcBggAxGJdaFbJ+Ifc5Kpj9S7Iw3EXyLA+uouDoCPwN5N7KMAXm3J1lLgfou2WpENV7aj
                  9tntF+lEXDnJVIkKFnXlfou26jrOoW29KnNd32Id50WFiMUyYTOJaOwkhNIKU+P/m/WWAeDgaypn7cB42aFsqHsBvVfSNivHGM8bmbsCj
                  SXVRnP+Hu2+KKtDOVfEXGYhLhKu0on4p5xkaqreHWkQ3m3Bxm4A3wDwJdiJ+iyn7DB2kqmqeFLdcOVbALwewIsQ/KFgIUIAtgH4fJXb8Y
                  OM8zJFwtAVwG6ZF82AdodOWRKL5DGp0M0eNkz+ayESk6NJey73Z4fcOBgAGTCASOsFkFNs0RKFrBttBXd1nOdYMHWLk0xlAOyxYAsAYjo
                  Rv8CSrWWLk0wNOMnU551k6qXIesK+iOwE9mpyRZXtLzpknBc3cievBDMN3XQsQi3PgXHGcNzelymDTCtTgNVVXJg9jgU7ABvKajE/upTB
                  pEegwiOBOrgAdKTOIqBVG9paLwBIHNeLnK06EV9b7040AFfAzrX0C+6fN1mwlUOKEFvESaamnGTqrwDEAeytYlObqmh70SPjvPgQsVgRD
                  EVRGApjmmcwFh7WU3pqVfD5fgBm06vnvskOGTg6yPrTzDTOiHqGG9lOCDrbf2Iwp6GoBRJyXvQoAN+vdycagHdZsDHpJFOPuH//nAV7OV
                  5i0Zbg4iRTBwAcA+ChKjUR1on4YqjZWVdqMc6hbb3LfpzLoWFdP7vuuLzo+wcBPF7w3j73z6cL3t/t/hnfeFFsOj19qiG1/7G+W46ctPE
                  XvUKxSltY6o+YQA7f2D9/y2mU3RpAzzGpNDnPmGL2ASBy5nHRGZoIJBgZIL6xH7tws/vOjxbc56lyjb/4CZ+9alhmkK3nZ0Pkv1Qn4i93
                  kqnfWLC17NCJeATACRZMPZD7i5NM7daJ+Aiyk/6DEtaJ+DucZOrLFmwJeTjJlHEzzg8gm6Rhm0sA3FMFu0sKGefFgXgWF6Bz7RlXPTOw6
                  5H+ww/fODkz+onVx7zqyJixArO2M4bkUWcxt+JJoJmRBCae8NysSLVABRIeTFBzFnE+at3FnSvi51ywcsN5xwWwKxTHAfB7i/a+bdHWcm
                  Mb7FxHCz28v7ZgM8diWIKwIXGSqRkAr6uS+edWye6SQ8a5/ohY9KAtvuVt0Z4X3j98+OGPZYYf6uXJVHM6PX6Cw7NP+0yKAT1dyk65MLh
                  4+j4bBXAI7F8uZn2TyjMmzOBg3lEGK4QHc//sWH9JZMJMnz849Pi3Bw4/8Zu2Na/4UseGizcGakPIJwTgSov2NuhE/K0W7S0n/tKCDQaw
                  veC9z1uwm+M5rgdUqAJOMnUr7NXHzEeumXnIONcXEYsFtK8776ym1S//r7HBx/9l+vB9z+epZ/KW8yNj8mtBGQIzG0tLoBSFjVFsTMh33
                  RwAYGJwyaLcQUsUzF2BhjhkzMyJztjuTmf0iZ7R/j++bXx4763t8bP+PmA7QhbtJFP3w+48nuss2loW6EQ8BjtLJz7tJFNj+W+4N0YrD6
                  LIXuflt1ddvlUFmy1VsLnUkXGuEyIWXVrXnXdxy1GnfmN8aNd3pg4/8Goe39tWmKBBIKNoNpWf2BDBRG0kuJBXiQByl1wOAMPoEnUcs47
                  BYJBBpi33jxBBKZjWI92eGdCZwQePHTv88Eejq17+k651558WsL3lTu54bbNos10n4tdYtLcceB/szBu92eP9P1iwnUPWia4u1ZgTKiJm
                  PjLOdWLZi8W23nMvaDvqtG9MDu36ynj//W9yRh5bhcy4xw3AhIj5yLJ7jprWBk4sqFgkgImL10EkIiaCCeK6JBev7RxkdRgguyA0nFjun
                  w6UMoxoodg2k081T/fffdHo8N7vxNac+U+rN76qM1C7yxidiMecZOp2zOZn2eB9OhFvtWiv0XmLJTuf8Xi/MDQdhI2yFm71cJKpJ+FR0U
                  Kwh4xz/Vi2YnHV+vOOaz36z74wMbTr66MHf/9mZ+Sxld4iMYsxmZhh7sr9mzIqt/pJUBigmeJbDAcpm5OFnJyLsooU9rF4n80MMsMP9U4
                  efuCq0fFDN6xYf95ZVe5Xo3K0+6eNlUNyhJFdQURYAJ2ItwM41oKpsbySOXNwkqlvwW5R4o9atCXMx9a0gRxFl4AVZJzrwbITi53rL1jf
                  Ez/zb4ZHD+wYO3jPu5zRx1fAFNdphTCbkMN8xGXNAJjJwlMOMVFxschsiNkQBZgWycA0ZzNoi7dufX1mBnNpEc3Th0MTB3979tDQnm+1r
                  j3jY90bLnyW5U40OkcDgJNM/QR2vYuX6ER8vUV7jcrfwU4I+ncLbP+jhTZyXGrRllB9JuvdgWWCjHMZLBux2Lb+otUtveddNj5+6FuHD9
                  776emB+54Hp7LagkTKUaSOnFgMBllIblFMaU2h4kWzg5VYzBpgPcwc8nx64sCey6yV2b+yQpnnVmb4kaPGDvzhQ+Njz3y3PX72O7s2XHj
                  0wnsJAPJXXrFRFDoHQQp1l8MbLdm5foHtX7XUDgCs1om4rFhRPWw/dR+ybK9RkHGuAw0vFns2XNzZGj/vkvTk4S9P9j/4lXT/H07DzJCv
                  OXoEyuSLRTBT4ExoBoj11P6f/7Koh5KgmKDAvn8fDJAeBIVLuE9tiMXZMHe2NmQFHc6Mqen+ezaP9j/wrzOTh7ev2HDeKcH7s3xwkqmbA
                  Dxp0eSLdCL+Sov2Ggp37t8GC6YyTjK1Y4HPbIfdOVqfsGhLmIvt8kS7F/7IskTGuQ40vFjMpEffMzn40DenDv72IjP5VHMgY6QdY5wjHk
                  ADAy5dkqYsuMScCaZWzaAo+cxYZgBMmCYynmFoQAU7DxhM0HlVvwngyms38tTB8PiB3108NLj3hz3rzn11z8aLG3aFIQusKvj3FZbtV6N
                  ERaPwD7Dj3Sg6VzEftxixzSWMLrRoS3BxPba276e/tWxvySPjXD8aWiyu2nhBaHz84Nud8X1WMjyZKM1ER4QdAUQmgNNv1o6nWDRoaiLm
                  jqzsq7whAgGGNRvHc+cQIeq1rUyYoI/UiTPMIWMc32OeGX44Pnj4kW8ZZ3rrio0XSzHh4szxjruZ0Ta9i3GdiL/Tor1GwtbcvxvK/Nw3L
                  bUHZEskvdyiPSHLm6tg88Yq2FzqyDjXiYYVi10bLg45bI5jNta8U1qFRkJER0QRg1BqZZRyIdaeE2yVUi0g01JYhqYi2ISZi3smTzrzBZ
                  EQ0oE8rsQAMR/xuDKgGBzIphnf1zp8+NHrnczUa4PYaWBiRd6zXUvvszoRb9hrhB90Ir4awDoLphjAv5T52c8i0AVgHh+2aEvI8ibL9ia
                  cZGq/ZZuNgPVxzlzXJ+NcBg17I2AAhsni9yMo0kOHdv94avYdTTDBQ7jMpnhyCwAQtwLcHCTq5a4vXfRmo+CEiJxwsW0VtMCG07MlPjhN
                  YA4o0hlm8qnW8fH+DwSz07C0Fb7hJFO/hN1VXVoB/D+L9hqBD1qyk3KSqZFyPugkUxMAHrfULgDIfFSL6ET8ZAC2E4fut2xvySPjXF8aV
                  ywyFLOJgi19RxVGpiBjucW06yg3Ba7+btjx9BoYJ90Bzok5P4KRcxnVRXcmBRAo6HJ/UIWlf2zM6GIDJzNRODdPKI1t7+K7pVD3HF5jyU
                  6loS+boegmnYiLx94eP66Czc9VweZSR8a5jjSsWMxiMcNeRYwmNZT/FsNoZiewWCQqke1oTAjBvwh52ZgyFEoDQUP1DnFoKPcPBhRzwFV
                  hZql2MfGlyspibzrJ1F0A7rXYTgjAdy3YWfLHUSfiRwNYY8ncP1f4eduh6PdbtLVs0Yn4bQDils1OOsmUlK/Ko1rjnLmuT8a5TBpWLM5m
                  ndgoCwNQqMUJhcJ7C97NFokJjudNgEiBwBxsziKzV4mfAUc1TTGCZYkzGUAPzv4bBlaUOmWtCZVyGeyO24U6EZei6cBHLNnpd5Kpvkp2q
                  EIo+hSZj+ofnYi36kT8bgBbqmD+O1WwuSSRcV48NPDFghWzCYPt3DMp1DwR0qE/5b8XojArCttYjstbWClkNWkQ7aWIoYon4oS0JkUqqL
                  BjwBzJ6NZKO4rUaECbWUiVKPmzrPH0aDvJ1GMAfmmxLQKwUD3A5cAlluzc5nM/m6FoDeCvLdpbFuhEPKIT8X8G0A9gcxWaSMPuEp5LEhn
                  nxUcj17FTBLQwjJVwaKR55d0hHfp5/nuTPOakecrCUkHkKYiYMyEwU0BHEXl5WGMUxkRA72jhziGYCQ413wPVdCFK5O6UZ1zJup3FWaiO
                  5WUA9sPeXIzn60T8bCeZ8it0ljQ6Ee8FsNqSuU/73O+zAD4Oe8f0SgBJS7YaFre23xsA/DmA56GgbJVlPuskUwEvmkuTuozzdVVsocFoW
                  LHIIGXAbWAn0HfUbZsGorHVN0ejrZ/r3/3Tgfxt0zyVycAZDthRVnnz/eZtZof81lg8YsPAc6GZGWMijgo6v5BAPFt/MqScKRWN7gh3bH
                  pTevBPxwSzLZ5FPzjJ1NM6Ef9vABdbNPsfsD9vaKnwMUt2xpxk6j4/OzrJ1IROxB8HcJylvjxbJ+IxN8S91CGdiNssXt4OoBnZElW1isA
                  97SRTV9eoLb/IOC9TGlosMqMNHvUFy4Fa1o/G2td/dHT/z5NFr6ZMDFDQMDRrDg14bVRE7nzDQJ5FA1DRJJpJnmlx4ASbswggX8w+s+tm
                  A+CP7evO3UYU/ueZ4ceeXek63EeskrfXdZlTTrmj/wPgIOw9oa/Vifg7nWTqS5bsLSVsie5fB9z/m7C3ZB8B+ACAD1myV2+W8rrXDpZOS
                  SMZ52VIw85ZZJBiIMo+l8kDgFBTz6OsmzyzpZqpRUcQDlxWhMGe6zZXssSypw2iDFHxOYsGTjOTCbqCC4jUPDE6su+Wm1o71rwq0nnCfV
                  BNvtQuUWAx3qgseN45ydQA7GQy5/MZy/YWPW54bIUlc58PuL/trOhqrIghVAYD+D9OMmUzgUmYj4xzABpXLDLchZH92yBS0wzlOTcsTOF
                  QiPS84siVwiUyto3JhACoYNOUyPHa35ATZXDAotxg8ph3ObD7p082x7quQyjmz0MoudBBeSdKLCfpg3Z34vlywlYW9IyTTP0siIEqZEWv
                  c1elEerH3znJlKzFXn1knAPQsGKR8v4fwIqjYDxrIDpIKwdOYK8cSkkiyqjAiqmEaDaMEAc9D7ITIj3HSRP2kAp515L0gqR0TlDcyfJft
                  Gz2vToRXyjBppG4yJIdW/UvbWZFA9mkGaH2MIBtTjIlqyRVFxlnCzSsWMyVoQ7kjyM1s0AY1LPYddkwQFCebRCFKZiLlMFEeXUn59Kpop
                  mwR4i6bAglKxQRaNrfqUYgpT1D9ELZvBeAhaz9I4QBfKPCfZak6NeJ+IkAuiyZszXX03Yo+i8s2hLKYxLAWU4yJdno1UXG2RINKxYNQxl
                  jQgxjcRmXeQQMdGdR5L2+NCPShKAJCkQaqrgDdKNum2hDOHCpBirhWSTf5W8UiEJ26jU2HmX/dp1kysBeUkSO17grmpRL5Z7lxYGt5A8D
                  4Gs2DFUhFL3CFcVCbfglgFVOMnVHvTvS4Mg4W6RhxWIWCiOA54/ZhLhENrVhh5idYGNIIAOnw3uzs5KASJBEF2IOG+osKjiblc6EyduzW
                  RYMBpG3ICy1nOEClonUmM99G52K5so6ydSnAAwu+MHyUVgehbovtGTnYVe028J2KNr2w4QwnycBnO4kU690kim5rlUPGecq0LBiMXh8+I
                  iZEl6/0skp5eIg43njZ86sQqAEFIJhjrDHkn4OszIIXGeRCd5ikZmjvhyw2VLikg1tj7+xbO9UnYifbNnmosH9bu2WzH3bkp0ctkPR51i
                  0JcynH8DfO8nUL+rdkQZHxrlKNKxYtAGRypQOrza5cwoDtlNiBRfKlv+hIHcFAjURcWexbWy4pPe0TPsOQXnOiTPGp1jMWl+q4ctFh5NM
                  fR3ZVV1sYrs0z2LiA5bsMIB/sWQLQFVC0a06ET/Loj1hLisA/EAn4n06Ea/G8nVCFhnnKtGwYvGI14/9e/4ImKESni0iaBBZKGjtLUgVk
                  UJAJymRUqRU5JEz3jHfg2hjRicjnebpca/NiijktyUpym2dt1u2d7xOxC+wbHOxcJ4lO/uqtEqK7VD0By3bE+YTB/AHnYjbWhFIKI6Ms2
                  UaViwiW5Q7aGJIyfExZjxszFTgotwocRwMZ0IEv4s3H/HmTYExfsIdXy4mvAwoWDiLYcw0j3oKXv/HgaQot2WcZOpWAI9YNltOlu+SEv0
                  6EX8pyih8Xib/ZclOIbZD0adatCV4QwA+rBNx22JfmIuMs0UaWCxagNlwiZow2dVhAhe0hkZ4qEQncuv9+cYwDTmMoksKKoYhDua9IyZD
                  7F1+h5nD/iv/BJ8T2qAEETKXWetFljU6EX/nAp9ZatMJbIWgAeAai7aOUIVQdEQn4rKiS+14k07EP1/vTiwDZJwt0MBikUFAoILWRCqtV
                  KiUkCpZjLosGEaxPuz9AWWCxYoZgDoMFM8qHsdMNBO8sDhTybmFrHzLXRGLXvgeFyeZuh/A7+x1BQDw6QW2LzUP8ZmW7BxykqkDlmwVw7
                  bX5L2W7QmleY9OxC+pdyeWATLOAWlYscgAmJmCRWnIoLQYtJR0zZ43UmVDKik9oXmgaBu7neGNw2q6J1gDZLKitjj+V4ghkNKecyGFQLw
                  edkOYHQvMD1oyYWidiJ8BoMWSuUDL+5WB7VD0C3QiHrJoT1iY7yyzFZHqhYxzABr2omAQpDJhFgaXXJqEmcFsAgtuUyKUnbUf5F6gADiG
                  uHjd7WFMdWbICfQDIqgppcLeE/jZ55xFUtAUOui3X4I3TjK1VyfiN8HeUnYA8Pc6Ef+Ek0wVezBZSp7FqyzaGtCJ+Hst2ivGEOytMqMAv
                  A/Aclv/u540I7si0qX17kiDI+McgIYVi2EYGGIdMBu6tN8wG3m1UDrH2+vCbBSBiOBHMma7xo5DjEzRfjKM5iDfgQFiNU4c8vQAMjjsV/
                  AyQTyL1ePNAA7B3nWgCcC/AriiyLalJBZfYdHWeyzaqhXvwNIUi/f73K8J2SUso8h6lGPu32vJa3Qi3u4kUyM1btcP9/vcT8Z5CdOwYrG
                  ZpvU0Mp2A8Z8RTcSl/JMMUCCh5ZrJrp3s1QVCqSSbBUxnbaBkOD54oJsxAxhPMWAYYc/FqReyDJK1oauEk0wN6UT8qwAut2j27ToRf3+R
                  lROWxHF0ywDZKIe1lDl2Cd5Q2UmmrBaId4uybwWwBcALkBU61UIB+ByAv6xiGzaQcV6mNOycRU0cITZtzE4AzyLNlJpPmA1UW5guRN7JI
                  QTWvivnzNp3KwlVj5LFy1FSc5e0SqWWERRs8NcAAq8NnkcIwFeLvL9UjuP7692BRQAB+HC9O1FvnGTqPieZ+oCTTL3YSaYiAP4KQDWTlb
                  ZW0faiRcZ5adCwYpEB5T+xIguRmlAlPFsOFBgq4FJ5KBmhZXYoaBYNM4xv52RZlPbAEihaau5nadNWJ+8LBbjzC22vC/wanYh3F7y3JDy
                  LAF5e7w4sEmyXV1ryOMnUF51k6igAn4LdpKIcbToRf0kV7C4pZJwXJw0rFolIAUS+RUrWyjS4lGcRSlFVXeZgKAT+vZB3We+sZzRAeZps
                  HN4QvItnGzYrAROwrrhQLZxk6v8CGLRoUgH4esF7nlMtFgtuaQ3JlsyyRifivfXuxGLESaY+AOC1qM7V6b1VsLkkkXFeXDSsWDTMYWYTY
                  E1igAkZU2L/NYp0FNNVm/f56GkXEEg1u15S3xDlUmSKooLOWiSQGfrFg55haIedVWCfYhG81Io5L1W2WbZ3oU7EV+f923Pt8EWEhKDn8k
                  /17sBixUmmfgjg41UwfVoVbC5ZZJwXDw0rFpkR4YAJPITSswXHnu7bOLBm4EWB2mCCVxKHofYwwekhmGDeS2ZvDyvDxnNbSQvM3Az2UWa
                  PCERqqYQvlzROMvUtAHstmiQA383791JIlnhxvTuwyLi43h1YzDjJ1Edhf27d0ZbtLXlknBcHDSsWDdgtyu3fb8YMh9nbs+Ww0UyBx9Ao
                  hIaLd2AmDM60A9CBZi0SGW/VG1gpMlB6uUDKZpdW/gVIsyJaCh6pRuGtlu2drhPx9e7fbYa5raMT8dcBiNS7H4uMLjdTVfDG9nxfrRPx5
                  1i22QjIONeZhhWLEVJKBazLTUCmVJYvAzq41iIT5sj+4g2wypa9CfI1CGwow4aK9lRBRxBc8JYcBcc4Hf6iyUpK59QQJ5n6BfzXUCsGAf
                  iO+/cSS1ouCt5b7w4sUqoRAmwktsP+uuevtGyvEZBxrjMNKxY7oVUEFAq2NjRlBvb+1PsEJVIIWKeQGAYeXhdSIUOknJLLyCwIl5yzGFW
                  xViYOljXOpcvbGDatfsQikWbYLesiLMzrYHdC+ctc72K/RZvVYHO9O7BIOaveHVjMuNUEUpbNnmLZ3pJHxrn+NKxYnGBHZ5hVsKWhi3vj
                  jmwOYDofw8Un/zOYOJsObaHOYnETBk4rVIDzgMHkFUY/8hn2UV6IABVyNKnF7pFqKJxk6jEAt1s0SchmRtucD2kVnYi/CdUtBLyUadaJ+
                  IX17sQi54+W7cUt22sUZJzrSMOKxVF2kA7qIFnAocdswS3OKhPmcFGvizFpAjhgRe6cViyRDR3UPqhwtY4iPfA1Z9EQKe81p4Vq8TrYDf
                  m8AsBiXuP7vfXuwCLnH+rdgUXOw5btrbJsr1GQca4jDSsWVcCZfgAAWmi+HAfOJVasprUKP118a84hF+ybGAMYU7ybQUPQAHjhMLnfOo7
                  EBkbmLNYYJ5kaAPAtiyYJwJUW7VlDJ+IK2SXGBG9e7I6TUBzb4dEOy/YaBRnnOtKwFwBihMEcCSBUUGrNZgBggkZAJceAcZAuKoi01gzK
                  Fc4OAjlepRoNcw0yQGkGlYrq7DxLd/ltoQ5cAbuFtM+zaMsmb8fsU5lQnDBkLd1S2PaaS1Z+cWSc60jDikUG2pk5FtTxV7oRVn5XPc4zQ
                  gxTvJ1sIWsK1gSBlMqQ8qjrbWHiZanVWwCASE36XN6aiaxnwAll4CRTUwA+Y9Fk1YrXB+Td9e7AEiFR7w4sYmxPlbE1Hb7RkHGuIw0sFr
                  mZYaJBFgDhBb2SHNizmIWKdtI4mWwMORAMZmS85lcq6GD9ZzBhgcLZ7LT4Sugm5ZBkQ9cNJ5n6EJZGMW1f6EQ8BOC59e7HEuEknYjLUoj
                  FsZ3pH7Vsr1GQca4ji/VpPzgM7S6s7BtaIBvauA0FagPkHLzjruJikcKUTclm+NekBC8xCgBhOE2B6n2DmNmUfuIz6R5/a0MzBT2GQmDe
                  D+BL9e5ElbgCdh+YxwHcZtGeX6IAzrdsUwH4O9gvjiwIwhKgccUiEAaMf88fKSjQeMmPEFTWfCDB6LmzUtQEh5uDGAcAIjKALtpOCOlg8
                  zaYDEOVzIY2JtNa+RgRAMVMpVeHEaqLk0x9WSfiHwOwpt59qQK2k26+5SRTiyKRRyfiQ7A/gf/tELEoCMuShvXaMJsmZhP2XQGENLBAgg
                  uYyW794rkoZGIE0xo80q0cz0NtYfUWWkBUgzNRP2FoIpXRYMmGrj9vq3cHbKMT8QiAEy2b/aRle0H4SRVsbtCJ+Ioq2BUEYZHTuGIRCAd
                  bjk/BgEt6tTgrgILO+fNUs4ZNFMhlK/t0kIJgGGQ8xJqFCkOsFhR0fsrzEKBCM4ZJ5izWGSeZuhXAn+rdD8tsg93r31NOMtVn0V5QPlwl
                  ux+pkt2lTMPO611kyDjXkYYVi0RwEMztx6Xm+s1+Jqhr0XteJGcL5wROoGFmYg+xaMCBV65YeAB8JbeAKDI5iSYJQy8O3lDvDljGtrf0B
                  5btBcJJpnYDeKYKpi+tgs2lTukVrARbyDjXkYYVi1mfGgL5zRbatcSqKJW04SlIyefCJ3NhkCKHVHFROgXEApoHLVALkX2dZwQoPZHh0m
                  V5hNrgJFMPAriz3v2wgU7EYwCebdnsYgpB5/huFWyu0on4s6pgVxCERUzDikVmjjBzgDA0wAuETw0zcWA1p7zFEPmpNzMXBoGgJwnheaJ
                  01RmnqAwoUDkMd9Kmp/dv1cbzVHZupx/blFFSZnEx8XrYXQawXrwPdmusPeUkUwcs2rPFx1GdSdUfr4JNQRAWMQ0rFgEOZesg+rxWZt2S
                  pecs+pqLN8cAiNWk12bj8AxzkASP7Hdnpgnm+SH1bmpSEQpYZxHExCpd4gMhMCt/oWjxKi4mXEH07Xr3wwJvtmzvBsv2rOAkU0MAnqyC6
                  QuqYFMQhEVMw4pFV5oEyFZWWGj1EBuuiVJFpxk0xlDj5P7Ll3UogNMOeH5id5SU0qCAgpcyhJDnxOOsb9RnggtgsmV/hEXE5bC7DGBN0Y
                  l4OwDbYdTFXE6mGjUy23UifloV7C5VFqNXuRGRca4jDSsWkf1u/vVcdpG9kgotA6URcAwdTnt6L4koTUQzQdaGZmSTfYjmG3nGGcckl3I
                  KLgyxGgeoZBZogDgYZb2SwmLBXQbw0/XuRwD+DnZD0PucZGrAoj3bfBbVmTrwj1WwuSRxfxM2aeT6x76Rca4vDXsjZmbNPufKZSEAKBkG
                  nUJsgkvNOSy/neJbiJoQaEkiBgCHocYZap4oTbOBCboCjaERx2Q8F3gnhiL2fXOuXhFLwTdOMvWPWLqZiW+0bG9RhqBzOMlUBsB9VTD9y
                  irYXMrYvFZpi7YaDRnnOtG4YhHQwcrOLOzP0xS+a+X+5320WpKGTaYV7LhFuX3XWRwH6bETfnXjPO+CIihCsJRuBTURorCncFBErQzHz9
                  xRVqTSRKUFu1A33lPvDlSKTsS7AWywbPZTlu1Vg89WwWZUJ+Jbq2B3qWKzxJd4vLyRca4TDSsWsyVpSpd0WcjCQiVhDh98+OkIxb4Y3/e
                  St1Ba+XKRlwp1E5sIAQHqIDIcDmXIGSwquJhZMdj/05UBa9O8a/DO+zzDcBmYDhgnVPEKLgQQ6UkCy5zFRYiTTH0dwL5696NC/gF2Q9B7
                  FnkIGgDgJFPfAVCNlZDeXwWbS5Vg83nmYvMcbTRknOtEw4pFBHdXM8oQKvseuHEijOj3jn/m/JNX7znxcz7iup4nrFZhDuj4yxa39s6hA
                  fyOEwORqbYHm033x7w+0rPxAsVAG8P4+BIEEKZELC5q3lLvDlSI7YLS37Jsr5r8sgo2X6QTcfHOZLEZAZHwqDcyznWiYcUigZyFPIOlDW
                  gQUVlP47vu/2FaQT/WQis/snH/Ky5S0yEr87kMM8PPospzIMMevwlNYeNnaWiV1pOt46u/2JJZdTEzHir12WytSz/TARQUqYlSRcuF+uI
                  kU78AcG+9+1EObgh6nUWTjKWV6PNPVbCpAbyrCnaXIqMWbZFOxBv23hwQq+Mc2tYr41wmDTtQ2XX4gkShw4aIJsr9+J/u/ap58v4fjIYQ
                  uW3l0yccF9/7om2UodIucwYT63HvzSawf1QhgwytKrqNiDtApuwVXChDmdh4z3/HJrvPDznRqwbuuKtv4M7feYs5JhCjE348i9kw9BARy
                  5zFxc3rsTQSkT5q2d4eJ5laMmvVusLe5o02x5VVsLkUGbRs7zjL9hoFGec60bBi0U1u8R3DJaXNuBOteH7EY/d+L/3MA3ce1NT01fX7X3
                  F6x+74jSXbgfIUpIqIUaTkTUUwa0I4UmxTmmfiDjldC9sAwlPNfc0THYmo0/aO0Tse/sXgnfcueKNkAIZNt7/yNwTQAmJbqDtOMvU4gJ/
                  Wux9l8BrL9pZicfJqHKcTdCLeWgW7S409lu3JkorF2WPZnoxzmTSwWITOFoP2rbU4E2BKw577fjS++/4f/KZLbXjPmj3Pv7plV/sTRRuB
                  8SyNQ6Q5m6QTqM6iJnDrQ3/21nlfJoN0J5PTXGp/PR0abBlf8e+xma7Xj9/xxBcH7ri77MKoBoBhbvWXlc4Ac1CpLNSGt8DuXCKr6ER8N
                  YA1Fk0ylkYWdCEfrYJNAvCBKthdajxo2d7xlu01CjLOdaKRxSIjWD1oaqLpwBmEu+//0d4otf9bp970V5271369oEcEYk+xZhgOMzkEQo
                  CvQmCnHdBFvItGweMcoLSajo13/qJ5uv3tUaftfUN3PPgbP00D7GZC++p/yKt/wuLBzQj+Sr37UYKPWLb3uJNMlT1FZbHgJFOPADhUBdN
                  vqoLNpcbtlu2JiCmOjHOdaPQbse8wNGfGwmFOF5/sVyG77v+v0dT9t+3s1s/6x3V7X3K5ng7lym3wikObtnvtZ6CnGDQRRPMSEZjQzHCK
                  leDRTDw3m9GAoxMtD7VPrfpIq9Nz2egdj/3o8J1/8FUWyGFShkmxnxwVBphNEzf+OdoovBuA5zrndeYvLNv7pmV7teQ/q2CzVyfiR1fB7
                  pLBSaZuh91kvOdYtNUwyDjXjwYue0A6UBmlzDiNjT71uZajX3lyJNL62cG9N/UH7dGT932/D8CXNtGf3zXJQ6drDk80q5adJXaZIFITwc
                  pBkQNSDtP8zPAwmg5pExpxkFlBDjmhmcj+SCZ2UzN3fu7QHX94PECjAIDRvT/JxNacHoeZ8RXPZ3BIotBLAyeZyuhE/KMArq13X/LRiXg
                  vgNUWTTKqU+S6VnwMWWFvm48DeGcV7C4lngaw1pKtYy3ZaURknOuAeG08YTgjD6+dGPjT346NPrWzI37mlT0bLio7c7gUT97/Xw8+9cAd
                  1/U9eOuXH7v/vzznACpwBqB0EMHEQJpYjRDUvJC6RvjRlkz355vH2n4SnWj5TFt65WvHfv74u2wIRQBYue7cs6YnDr4ZmQm/55loxSWEk
                  0z9M4DAD1WW+bBle48txRB0DieZ6of9JAEA+PMq2Fxq/NCirRU6ES+amCjYHefQtl4Z5zIgDlrGb5Gy4ht/edXk5MDb0yOPPwvOVOBK7S
                  rWOxGOHf37cLTtP8Oh6PcG9/50yEI3S/KnU1/TFuE9N4YweIa/Jf8cGDQ/k9YnvtGh9jtP+uVXa1KzsGvduS+ZmRm7fGbi8Pnp0SeOhp/
                  qN7qFYytP/loo2nVl/2Wfq8bqE4IgCIIglEHjhqGZ28AmArazpI+Z6ItNT/Sdno71vjjSuuaSrt6zPzvYd9utNmx7wQzOzjoMNGsxw+yM
                  nfQ/1ReKHRvO38gzk5eNjaTekR7dvQHOhP+xJ4BITRNJUW5BEARBqCcNKxYNuJPZidiOZJqJvtjURN+5mbbjXti65vQvq1Bs+8i+n+612
                  sgRdAas0m6tRV/lZ5hDjjKDVRVcresuboWZfM3k2MEr0iN7TuGZwxbOKwKIpgkkYlEQBEEQ6kjDzllkNjFmo6s17S0z+tjKsUP3XzUzce
                  jrPb3nnNG14aJ2220QcZpJP82gGd/fgxQrTFZtwfSOdeedmJke/tzkwCP/OtN/z8vsCMUsBJoc2vNjEYuCIAiCUEcaViwC0OAqf7/0kJr
                  q/8MrBw8/8uP09Mi1Tb0XP6dn/fnWJsue9OsdjsPR+wA97k/t5QRmxLpi7thw8arW+DmXTY499f2pg79+hzORarHcBGtSiy1ZQhAEQRCW
                  HQ0bhibQJIicWrRlJva1jk30XRlqf9YlmbY1n4n1XvSdkFIHRvYG94oxN9/hIPqOEGW6UXY0OqsNCXCYQ/sM9FjQfuRoXffq1hBNP3tm8
                  uA/Tg49eR5P9xer3xgcUmDQkll7VxAEQRAalYb1LEZDoQfD4eZnoKI1SvdmZEYeO2r4wN2fzkwd+gab9Gkd6y9qCmyVIg9m0HODQeQQ4J
                  Sx9B8DYIehR9O84u40ViUZenfQfnSsvzjUsf7iFZwe/uDI4Ud2Thy46+KqCUUXIlq0S8gJgiAIwnKhYT2LLeHQtyK66/EB3vCF6aHHj4O
                  ZRk3K9mXGaObQXVuc1o2nNLet+0Lruld9PkzOwODem3x5GU/67Y38x1Nf+xlwyAnj6XdrTK4GmGaTvGdzpQnMzDrtqM7fOdz6XUd1//DE
                  X//gYNCvtHLDBaFpZ+pV0+OHPjw9/NjzAmU5VwAR+Vo5RhAEQRAEezSsZ3Hf7p0joMjt7e1rLmhbvTmp2445DKqdNnbG9nSMHbrnH2bG9
                  u1kZ/rCILae8+vvTxi0XzuDtW+dxoofGUSmNBwoOCBkQHBgoDiNzrtmqPfqDB39JgBfhoV1YLvXnXvK2PihW0YPPfC96cH/fX6thCIY0K
                  QCC11BEARBEILRsEW5I9fMruLTuf7CmGHn+Mz00D9ODj52Mc8M1E41qjAo0jPd1L7hZyrac8V4302eK7YsxCMvPzsEnlmVRvjPgPQrw5h
                  cr2GU4dBTBk2/A6lfKsJeVm3TJ/zqxkAHduWGC0Jj0+P/PD3a93/MxFOdMNNUywVVIp0nPdnVteGFB3bfNDJz9RM1a1cQBEEQhLksC7GY
                  Y+XG81dxevwvRsYO//3M0J821q43BOhmDrX0Hoi2xT8xvv/2fwti7X9fdnZ0BqGWMDutEWRUhtW4JjMGoqln//b2wAe0I37G28bHDnw4M
                  /5ULzKjGlyTPKEs4Q7T0n3CTU1NHR85vPfW+wBAxKIgCIIg1I9lJRYB4OiN56ppg+dNT49tmxx68g1m6plozTpFIVCkeybavuF/Yi09fz
                  Ww52YrazDb4qj15548MD7w+fRY30t55nAEJl3D1gnhzmfvjbasuSYUCt84tPfmp3NbzFPTVwG4xv3nrsx1fZuO7EXZqLhOxPM/c7WTTF3
                  rvr8dwOWF7+ejE/HNALbk7Z/jHgA7PPZ5EsAxZX65TU4ytUsn4lsA3FbG568FcL2TTO3Ka2/B7+HRr035dirBry33WGxxXzk8x7Jg32MA
                  PJn31i4nmdrk8dlyxvNqt905/daJ+OUAti+wb47rnWTqCne/wjG5x0mmXlSkbwMAuvLeOvI9Cmycnbmub2fh/qFtvZ5jmLmu78gY5s7/Y
                  hT8JrwYBHBt4XEpON8W4gonmbo+b98ud9+rMHcMdiB7LHYUtFV4zEtR6nwo7POcfhV89jbMHdti3IPssS9qw7VT9rle8D13OsnU2UXs5Z
                  /TRT9TpP2aHmOdiC8kGu5x29tRbGOJ6+0OZL9zqfHeCiD3yjGI2WvmYMHn5/zWAOxC+ecaUOR88zjmuT7Mu9a4+5QjtHYg+x12Frm2XVp
                  sPIt87kWZ6/ruKaOtimnYOYtePL37FjOw95b7o02d723uee67ol3PeRSqRuuIcwY8fTAyNfCnM4cPP/6b9jWv/L+1abg07esvXN+6+uXf
                  Otj/6J0zg3/6M556pqZCUbWsG2s76uVfb+/ofc3Y/p1fzBeKRTjGvZFaQSfi1wC4G8UvuJsBXKMT8QH3AlcrrgJwt3tzKRu3j4X7bC322
                  WrY0on4MToRz41l4Y04N5YLfa/CNo5xL4h+uQbZsQxioxSbXXF0BHfsujw+X5LQtt5jQtt6S45haFvv3aFtvRWdGyXogntcbBhzv/uTyP
                  a/cAy2ArjBvdlWg8Jzx9e5n8dmANvda8QcLJ3rtcLqMS6DzfA4zgtcb7ciO963Ff6m3H23A7gB849rF2Z/51Ubb52Ib3bFZ7FjnuvDk66
                  g9cNWALfpRHyrk0ztBJAvmq8pNiaY+8B7bbWEIrAMxWKOgT03jYzvv+2rre1HXda++pR/122bBqCqWglmFmecnNEnVowOPPz+ppWn3N61
                  7rwX1Kbh+bSuOf1j40O7fj028NBlZnxPe80SWAAguiLdtPKUX7b3HP/WaHPHuw7vvaXcE/0aGzdL98JVzo2rC9kfsS8B4JPcxacSil2ky
                  vUcBLLljs1tyN4oSrEZ2Qt+Je0Gvel3IXvzqtaNpLB/voRpaFuvrTH0w2ZLIm47FhbK19gW7+4NurDdLZaO+VX5D4sWz/VaY+sYl8s1+e
                  NfwfV2C7LC78jxdI/vQteyY1B+tKAi3O9xG8qLJgV9IMp9h6uR9YTCbXfO93fbyPVnF7KezarRsKVzyuXw3p33AXhXS/ycWzm28s2To/v
                  P5Yk+26uRFIWnDkam0qNnpFvW3dy+5pXbo5HYPx/ac/NELdru7j3rdROTQ+8ZH3hoM08drJFr1UU1caR90+5QbPXXopHolwf3lPQkerEd
                  2bCCL9ybVf4PegeyoZN73O05sZb7geZCa/N+kE4y5Udge4Wh8sNKld5Qc30dBLATWRFzjPukWjQkZNHW5Zi9cA0iGyrPha0Kx3JzMTvuD
                  Tl3A96B7PfvAnC5TsSvLgwxFXAkVJxn7yrMhkJzx+/qIvt6hvUXYNC1uwVzvQCbC7aXy7wxzFzXdz1wREjOGcPQtt6tyI5TOXhNwcj31H
                  iJn7NdT0dJCo5f4TlwDLLCKbf9cmTPq0IWDL16kC/Yr8fsOHkd83zmfb8i/d2CbHg1ZzPQuV4lqn6MCym89rnX1e2YHZ8tAK53xzP/ers
                  T2evtTne/Lnd77jM5cZT7PvnHdwey33WXu++ca6ZOxDfnruNF+rsLBStbFITjvaYuFE6pmDPWrpi9CrPje5VOxOeFxd0+zLtfuON2g9tG
                  V+476ET8asw+cFyjE/Ed7pSm3Hgd6U/mur5S18fALFvPYiHjqVt/1Nzc8cZY13HvjXa/4H6KrqhNHNaZJGfk0aNGBx69emTs0K3Na899W
                  zWb6+w959XRVS/98fDg7i9ODTz4spoKRQpBt24cal75wh3t7Ue9ceKpn3/Ch1DM/SC2uDdLv+Q/pV3rJFOX5l9gnGRq0BUf12L24lTVJz
                  e33Wsx+x3LFhoFnpUdmCsiKhonn7byL1xn519w88byevd1hcfNM992YRimYg+pO5aXBrGxALmba6Go31KwvVzmjGFOKAJA5rq+wcx1fXP
                  GMHNdnw0Bkn9O2/Sc7yo4B3YByBfz1qZ1uDfO3LmzC3PFoa9j7vbXa3xtnOu1pFrHeB5Fwqe59vKPw04nmZojTt1xuxpzf69e3rk58wLd
                  33n+GFudMpQ3BzfH2YX3AieZ2uHOXc7dQwr3KYk7FvnXi66cXcz9btfk/XnkGm3pWlCSZe9ZzOfwnlumAHx55fqzbpqMtr1navzgmzNju
                  9fAzFS9bZ56Jjo93X+qal77vNjql58XDrcmh1O3/sqW/fbe81/izIz89djQkxdkxvd3w0zVLtwMQDWvnYy0rr0r2tRx/XDfbd+d9G/qWs
                  w+2V+jE/GdC3icvMjd0HMTk4viXsBqhvuUnLsIVDL/ZI7QcpKpHToRz3m2tupEvKuCcarIVsEcvZ0lnuqvKPZ+HvkX1x3IHuPcDWMrfIR
                  Z3Mni9yB7A+nSifgxfhN+irATrvczzxOQG4tBZI9fWUI9tK13zhh6zT1yBaMVingngs532oVZb+pm12OzIycK3POiGtedOeeNk0wN6kR8
                  B7Jj3+XHs+cex/xjtyvvfRvnek2owjFeqL0tmHs8cteJ/LH0vKa615r832vOS5j/W7rG/R1fm7ffpUXM2WKOV3MBD+y1mPUEli1a3Qf0w
                  iSpHFdjNsqyVWeT8/IjPzU510QsFuHQ3tufBnB1Z+/ZP52OdnxgevypPzMTqVjVG+YMzMTetompA1tDbRtf1rzmrH+NRaPJw7t/6js03b
                  Xu3F4nM/WOydF9b06P7t5Q0zmJABDpcqJt6x5tau7+kgq1/Nvgnv+2obyvxWyo4yosHGaagxsSOSLIfIrNfHulMt3mhUddtpSRIVfWDa7
                  AszKYd2O8HrM3iqIhdEu28i+Kvm5Ghd5M95jck3fj2FwqvLQAORtA9pwpFIvXFEtiyKNUFvg9mM2MzP0dyArJSs6rwGO4AAt9R8DbE3qb
                  TsS99jmSLeqKtGsx6/24HNkpBDnbO+GRLZrHQr+LYmHCwhBl7s+tedtL/ZZKfT9gdioGYO84lfP7r5SqH+NCFvgOg5gd9yNh+zJ+wzsxO
                  86b4WalY9ZJkHMUHKl+4dr1zKIOSL43tpy+5ygqFss47nMcIG7Y+WrMzmXMn5dZ9fBzDglDl2Co77ZfTh76/XmtXce+L9T1vMcQ7vC1ZF
                  /FmCnKDD/cOzXwvx+fmBj8dlfvuS+v1MTKDefHOuNnvWli/ND3Rw498KH00J821lQoqih068ahlp6TvtzTefQpw6k7Pm9JKMINz+V+tHM
                  mn9vAzcbjIq9yyt7Y4voKwt6FHrlify83JBLUlt8LV2EIutJ260XuPMyJxPxwqF9qcvEv4Ao/c9YKcc/ZYg9vuVIpT3plu/qhYJ7krpwQ
                  cR9yjni1AiS6DCIbdix2TOpxnIJg5RhXQLF5xuWMWbF5foPIhqiLibVrkM2i5gCZyOVSsv9BHQ/Ifr95XlJXCBceu535U1WqjYjFMhjZf
                  +f2lvbel7R0P3sHxeLjtcqa5qmDkckDv7tkbLTvO51rXvmRzvXnF326y6dj/UWxlb1nnz0xOfS1kYFHt08fvvfFSA/V7jirCKh57WS0+7
                  m/6eze9Nrxp3915VNP/qwaSTv5N6RKs4bzqWWGcznsQNaTVUlooZhnBXnhG6D8EjRBbVU8noXeTMwViPkXw601zkhfiF3IE4uuIMkJl3v
                  gX0zU8jte6yRTZNMr4yRT17qT+K9GcW92ufVGy6EwsQUe/65URAwiK666S3jCFtO5WArrx3gBrkfBXM48yhmzop9xkqlcTdOzkT23ih2X
                  G6osGEv2P8D16R5kx+xFJQRn4T2hplMdJAxdJsN7bxoC8Pr2tWdunZzo+qf0WN+xSA+r6i+Bx0gPPbR+eLzzw+GOY8+NrT3nCyEd+sXIv
                  p/uz/9Uz7oLWqcMXjAzPfL68YlnXpsZeWx1lTs2F9KgSHc63HL047FYz3VDqTu2T1exucx1fTtD23pzoaYtKL9Ads6tnz+3qpL5fMXsBc
                  qGLsjm24r5yR2eFAgUoHQ4KWfbtq18L5ofL2/+xb0LwIBHuzlRWelNL79PxY5zkOSl/PEszPasZCyCjuFCXO0kU9e6N7PtmB3zy90My1L
                  hNb+ZsrkxvVrPL9TtlSVcaTZ0/rlTKgxbahrG2e7c1s3Ijk1uXmJubPLPGVvHqZyi3JVSj2Nc7rVvF7LX6C6diG9ZoK38B9F5Hvq8ZJDc
                  wguFhbqvQvlVAsoh//hvQenpPCX7DsyOmdvvXKmp3BxZz3Fx71tz/o3rFuq6PcSzWCEj+3++I9K2/uSWnpO269ZjDkPHarIEDqeH1Ez/3
                  S+bGvjfr6Yn+/+jJX7uq2O9F6+NrbtkRWv8gpNnZkY/Pj3yxPcnD9711zUXiqFW1m3HPtO24qSPt3esfe5Q6o6q1LoqQr53sdIwU/6Pck
                  5/3Uw9cn/UC3pzg1IkdLe9gqfjSp6iF/LM+bWV70Xb4jUtQCfi1+hEvFgNsorareCzhQK4nPlSFeEKidxNIRcm9zMPds4Yugkv8wht670
                  mtK33Br+F6d2s00sxe/7naojaqFt6Q96UjTlTBtx2r8XcG22gNl1hVa6NBT3r7rlxKWaP52bMF25Bz/WqU81jHID8661nJMgdr/zf606d
                  LYadO6/mrb7iZiLnh25tP2zl932L17VZz5ZNKrbfPNwHpTnVGsqYc1o3RCz6YHzff0+MP/Prd/X0bDizufvEnYh0Z2q1CoyZfDo6eej3Z
                  08OPPxtZ+rAN53p/n+dGt3zw9FDd783M/LYaphq+vMKUFFQ85qpWM9JP2jp2nTayP47/6l/9821mdcJIHNd3y5U7mXKURjevK3wZuLe8G
                  pysS9S/mF7mSGNSubx5Yd7rdlyhVF+32/LFws6Ee/SswV5tyLrAbrK3XYMKqsnWXahZfeinn+ztx2Gy4mKQgGae79swehOUp8zhqFtvUf
                  GMLSttyu0rXfOGAZcyShfFOU8UUHJH4drCgWjnq1FZ4tKw40Lft5NvpkjPPIFX5BzvQ5U4xj7ZU4dUp1d3ebI8dDZFXG2Y67YuhY4IuJz
                  v6VjXBGeX+y7S2drSeawOpe0SBmlG9yHgfyi4ZcjuzJNfv3NBa83rpc031FwVZnThWqOhKEDcHDv7Q8COKcrfsbbJiYOv396+IkTYaYIX
                  H29ZCb2tUxP7DsDpFCL9uZAIVCkIxNu23hXtLnnY6N9t9Qy8aOQq+GWyKhkJ/eJ9VrM3ry2ICtESu1W9EmxjOy2csOc+SUSchd3z5IQBZ
                  6VUhmLhWHueRcxC7Zyfc9lmm93L/7FyBf5c+acec3V1HMLCxcro3N5oTgpoFSJpAWzSBcItxWWyMmJpkpvWvPGMLStt5wxrBg3czm/4O8
                  WnYhf5XGeLpQtnAup5jLmj5y/Jc4Br5tpOVnCZ2P+mBfNWHc9f7ll7rbqhYu7wy2BlH9tyJXoyh1Xv+d6TanSMfbbl8IxzS0J6LVL4bjl
                  Z9lvRfZYeu1bjXq4+ddmwC0gXqoP5UYX3KkDWzHrEd2uE/FScxfrgngWLTCYuuM/mtvir2hf/cJPqJZ1w6AaavA6CMVwx/G7e1Y/9w0z/
                  XefVmehmHvS93VxcLI1FMvZdxDZhdyrWpTbvdnlP2VuXSAcXTQZpQj5F12v0FkgW+5xyN3ES7EL2bHMXQjnFOstsV9+nyr11OSOX7Uuvv
                  OyFP0Ycb2LZY9h0JIZbhgs/3heFSRUmZexWk6/gh6P/AfEe7zK8RQkZpVdKNm9NuTb3J63ze+5XnNsH+OAfSn3eptL9sgvH1MYefFiZzW
                  u0+75dTbKq3LgZw50vlOgcLWbRYGIRUsM7f3pQCjc+slVK47dHFv5wh9T0+rqV/KuMdS0Kt22+pRvtHT0ngHd/IN69yeP6+GzVIl7AdsE
                  t1ZXwebcyi3dRSbiVwU3g3BOxf5i4eiCDGKgxIW0SOhsjgC1ZctJpna52YrFMhXvQXYsNzmzSyrmezMHS41xQSmUrjLndA66fdlUjZIhO
                  YFSMA8yf15kxSIhc13frsx1fSXHMHNd3yavot0+yBdFftYjn4M7zl6/J5vHo9yHm8LtlYSuS4WjKzrX64zVYxwE93qbG7dCdiCbgf6iYu
                  LfnZd4KYof79y+vr2fC+FmY+fO7cLzN//c9rN4QKGjwHpJuKAQc03yM2pO5Jpj69Z2+/qLOqM8cerQyMHPpUcef1ZN5xFWAx3jaPumh3X
                  LmqubQ/oXh/f8dKSWzc9c/UQtmxMEQRAEIQ+Zs1gFRvb+9xCAm7rXn/tYuqn9PeMjfW81E32t9e6XH3Tbpv6WtrVfplDzfwzvu+WxahRM
                  FARBEARh8SJh6CoysPeWxyPR9g+0dT/rrdGek39fqzI7NlCx+ETbUS/9z6bO418djrR8YnjfLY/Vu0+CIAiCINQe8SxWmcN7fzYC4Icr1
                  p31x+boC984Pt7/tvTwo73VL+btDwp3mmjHpt9Gmzq+FA1Hbzq4+6f94/XulCAIgiAIdUPEYo3o33f7YwA+0tN75i1TTR3vmRzpu9hMPt
                  Vc734dQUUR6XjWk9HYiq+FdPSbg/tu2VvvLgmCIAiCUH9ELNaYw30//83KDefcq0Oxt0+Md/9NZuSxY2HqmDhNIYTaNh6IxI76USQS+8r
                  Qvlv+UL/OCIIgCIKw2BCxWAcO7bl1CsC/rVi35TdT0ZYPTIw+fb6Z2FfzBBgVWzcebVt7WzjS9u8jfbfeKskrgiAIgiAUImKxjvTv23k/
                  gEtb155xZbqp88qZsdRJPDNQ9WNC0ZXpSOvaP8aaO/99MHXnlyar3aAgCIIgCEsWyYZeBIztv+OL3e0rz2nuOemLqnXjcNXWmQ61mVDHi
                  fti3Sf+S3vbUVsGU3d+qToNCYIgCILQKIhncZHw9J7bDwJIdPaetXMq2vnB6bG+F/B0f9iKcRWGbj56NNwSv7kp2vbJob5bHpQMZ0EQBE
                  EQykE8i4uMob7bb1zR3vPS1u4TvqBi8QmAghkMd5hwx4kP9fQc++apg7953VDfLQ/a6akgCIIgCMsB8SwuQlK7dxoA7+tce8YDY6GWT2U
                  m9h+FzFhlqlE1QUW7J5vaN3w/3NR15cG9N0n+iiAIgiAIFSOexUXM0P47vt7d1fuSpq4Tb6ZYfKKsuYyqCdR89FS489n39aw8fuvEgd+8
                  ZViEoiAIgiAIPhHP4iLn4N6dfQAu7Ow9++zJ8c7k9MieZyEzruatAEMhULg9E25d91BLS88nBvtu//6hgbp0WRAEQRCEBkI8i0uEob7bb
                  mtvO/qsWM9zfkRNK9NzNqoIdNvGA80rnnttR/vRmwf7bv9+nbopCIIgCEKDQcyLc41iQRAEQRAEof6IZ1EQBEEQBEHwRMSiIAiCIAiC4I
                  mIRUEQBEEQBMETEYuCIAiCIAiCJ/8fpAAwfRdUd1sAAAAASUVORK5CYII=`,
    },
    rules: {
      required: (v) => !!v || 'Field is required',
      counter: (v) => (v && v.length >= 3) || 'Minimum length is 3 characters',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
      password: (value) =>
        (value && value.length >= 6) || 'Minimum length is 6 characters',
    },
    userTypes: ['Student', 'Staff', 'Independent Researcher'],
    institutionTypes: [
      'University',
      'Polytechnic',
      'College of Education',
      'Monotechnic',
      'Independent Researcher',
    ],
    institutions: [
      { text: 'Abubakar Tafawa Balewa University', type: 'university' },
      { text: 'Ahmadu Bello University', type: 'university' },
      { text: 'Bayero University Kano', type: 'university' },
      { text: 'Kaduna Polytechnique', type: 'polytechnic' },
      { text: 'Nuhu Bamalli', type: 'polytechnic' },
      {
        text: 'Federal College of Education Zaria',
        type: 'college of education',
      },
      {
        text: 'Federal College of Education Katsina',
        type: 'college of education',
      },
      { text: 'Dialogue Institute of Technology', type: 'monotechnic' },
      { text: 'Khemsafe Computers', type: 'monotechnic' },
      { text: 'Independent', type: 'independent researcher' },
    ],
  }),
  methods: {
    signIn() {
      const signInData = {
        email: this.email,
        password: this.password,
      }
      if (this.$refs.form.validate()) {
        this.$store.dispatch('SIGN_IN', signInData)
      }
    },
    signUp() {
      const signUpData = {
        fName: this.fname,
        lName: this.lname,
        email: this.email,
        phone: this.phone,
        dob: this.date,
        address: this.address,
        institution: {
          type: this.selectedInstitutionType,
          name: this.selectedInstitution,
        },
        password: this.confirmPassword,
      }
      if (this.$refs.form.validate()) {
        this.$store.dispatch('SIGN_UP', signUpData)
      }
    },
    createAccountStep() {
      return this.$store.dispatch('CREATE_ACCOUNT_STEP')
    },
    signInStep() {
      return this.$store.dispatch('SIGN_IN_STEP')
    },
  },
  computed: {
    filteredInstitutions() {
      return this.institutions.filter((institution) => {
        return institution.type.match(
          this.selectedInstitutionType.toLowerCase()
        )
      })
    },
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || 'Password must match'
    },
    changeStep() {
      return this.$store.state.step
    },
    signInMetaData() {
      return this.$store.state.signIn
    },
    signUpMetaData() {
      return this.$store.state.signUp
    },
  },
}
</script>

<style>
.custom__bg {
  background-image: url('../assets/background1.svg');
  background-size: cover;
  background-attachment: fixed;
}
.custom__col {
  background-color: #00a368;
}
.custom__scrollable__div {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
