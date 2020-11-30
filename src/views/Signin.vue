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
import ForgotPasswordPopup from "../components/ForgotPasswordPopup";
export default {
  components: {
    ForgotPasswordPopup,
  },
  data: () => ({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    organization: "",
    selectedInstitutionType: "",
    selectedInstitution: "",
    password: "",
    confirmPassword: "",
    date: null,
    menu: false,
    modal: false,
    showPassword: "",
    rules: {
      required: (v) => !!v || "Field is required",
      counter: (v) => (v && v.length >= 3) || "Minimum length is 3 characters",
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
      password: (value) =>
        (value && value.length >= 6) || "Minimum length is 6 characters",
    },
    userTypes: ["Student", "Staff", "Independent Researcher"],
    institutionTypes: [
      "University",
      "Polytechnic",
      "College of Education",
      "Monotechnic",
      "Independent Researcher",
    ],
    institutions: [
      { text: "Abubakar Tafawa Balewa University", type: "university" },
      { text: "Ahmadu Bello University", type: "university" },
      { text: "Bayero University Kano", type: "university" },
      { text: "Kaduna Polytechnique", type: "polytechnic" },
      { text: "Nuhu Bamalli", type: "polytechnic" },
      {
        text: "Federal College of Education Zaria",
        type: "college of education",
      },
      {
        text: "Federal College of Education Katsina",
        type: "college of education",
      },
      { text: "Dialogue Institute of Technology", type: "monotechnic" },
      { text: "Khemsafe Computers", type: "monotechnic" },
      { text: "Independent", type: "independent researcher" },
    ],
  }),
  methods: {
    signIn() {
      const signInData = {
        email: this.email,
        password: this.password,
      };
      if (this.$refs.form.validate()) {
        this.$store.dispatch("SIGN_IN", signInData);
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
      };
      if (this.$refs.form.validate()) {
        this.$store.dispatch("SIGN_UP", signUpData);
      }
    },
    createAccountStep() {
      return this.$store.dispatch("CREATE_ACCOUNT_STEP");
    },
    signInStep() {
      return this.$store.dispatch("SIGN_IN_STEP");
    },
  },
  computed: {
    filteredInstitutions() {
      return this.institutions.filter((institution) => {
        return institution.type.match(
          this.selectedInstitutionType.toLowerCase()
        );
      });
    },
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
    changeStep() {
      return this.$store.state.step;
    },
    signInMetaData() {
      return this.$store.state.signIn;
    },
    signUpMetaData() {
      return this.$store.state.signUp;
    },
  },
};
</script>

<style>
.custom__bg {
  background-image: url("../assets/background1.svg");
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
