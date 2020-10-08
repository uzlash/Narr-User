<template>
  <v-app>
    <v-main class="grey lighten-4 custom__container custom__bg">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class tile>
              <v-window v-model="step">
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
                          <v-btn class="mx-2" color="blue" fab small outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="red" fab small outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            color="blue darken-4"
                            fab
                            small
                            outlined
                          >
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <v-form @submit.prevent>
                          <v-row justify="center">
                            <v-col cols="8">
                              <v-text-field
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
                            <v-col cols="8">
                              <v-text-field
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
                          rounded
                          class="text-capitalize px-8"
                          color="#00A368"
                          dark
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
                            class="text-capitalize"
                            rounded
                            outlined
                            dark
                            @click="step++"
                            >Create Account</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
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
                          class="text-capitalize"
                          rounded
                          outlined
                          dark
                          @click="step--"
                          >Sign In</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="8" class="py-0">
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
                            <v-btn class="mx-2" color="blue" fab small outlined>
                              <v-icon>fab fa-facebook-f</v-icon>
                            </v-btn>
                            <v-btn class="mx-2" color="red" fab small outlined>
                              <v-icon>fab fa-google-plus-g</v-icon>
                            </v-btn>
                            <v-btn
                              class="mx-2"
                              color="blue darken-4"
                              fab
                              small
                              outlined
                            >
                              <v-icon>fab fa-linkedin-in</v-icon>
                            </v-btn>
                          </div>
                          <v-form @submit.prevent>
                            <v-row justify="center">
                              <v-col cols="12" md="6">
                                <v-text-field
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
                                  v-model="phone"
                                  solo
                                  label="+2348000000000"
                                  prepend-icon="phone"
                                  type="text"
                                  color="#00A368"
                                  :rules="[rules.required]"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
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
                                  v-model="selectedInstitutionType"
                                  solo
                                  label="Institution Type"
                                  prepend-icon="mdi-school"
                                  :items="institutionTypes"
                                  color="#00A368"
                                />
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-select
                                  v-show="
                                    selectedInstitutionType !== 'Organization'
                                  "
                                  v-model="selectedInstitution"
                                  solo
                                  label="Institution"
                                  prepend-icon="mdi-school"
                                  :items="filteredInstitutions"
                                  color="#00A368"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-text-field
                                  v-show="
                                    selectedInstitutionType === 'Organization'
                                  "
                                  v-model="organization"
                                  solo
                                  label="Name of Organization (Optional)"
                                  prepend-icon="mdi-office-building"
                                  type="text"
                                  color="#00A368"
                                />
                              </v-col>
                              <v-col cols="12" md="12">
                                <v-menu
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
                                    v-model="date"
                                    type="date"
                                    no-title
                                    scrollable
                                  >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      text
                                      color="primary"
                                      @click="menu = false"
                                    >
                                      Cancel
                                    </v-btn>
                                    <v-btn
                                      text
                                      color="primary"
                                      @click="$refs.menu.save(date)"
                                    >
                                      OK
                                    </v-btn>
                                  </v-date-picker>
                                </v-menu>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
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
                            @click="goHome()"
                            rounded
                            class="text-capitalize px-8 mb-4"
                            color="#00A368"
                            dark
                            >Create Account</v-btn
                          >
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
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
    step: 1,
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
      "Polytechnique",
      "College of Education",
      "Monotechnique",
      "Independent Researcher",
      "Organization",
    ],
    institutions: [
      { text: "Ahmadu Bello University", type: "university" },
      { text: "Bayero University Kano", type: "university" },
      { text: "Kaduna Polytechnique", type: "polytechnique" },
      { text: "Nuhu Bamalli", type: "polytechnique" },
      {
        text: "Federal College of Education Zaria",
        type: "college of education",
      },
      {
        text: "Federal College of Education Katsina",
        type: "college of education",
      },
      { text: "Dialogue Institute of Technology", type: "monotechnique" },
      { text: "Khemsafe Computers", type: "monotechnique" },
    ],
  }),
  methods: {
    signIn() {
      const signInData = {
        username: this.email,
        password: this.password,
      }
      this.$store.dispatch('signIn', signInData)
    },
    signUp() {
      const signUpData = {
        fname: this.fname,
        lname: this.lname,
        username: this.email,
        phone: this.phone,
        address: this.address,
        organization: this.organization,
        selectedInstitutionType: this.selectedInstitutionType,
        selectedInstitution: this.selectedInstitution,
        password: this.confirmPassword,
      }
      this.$store.dispatch('SignUp', signUpData)
    }
    // signIn() {
    //   axios
    //     .post("http://192.168.1.4:3000/api/v1/auth/login", {
    //       username: this.email,
    //       password: this.password,
    //     })
    //     .then((response) => {
    //       console.log(response.data.payload);
    //       // this.output = response.data
    //       localStorage.setItem("token", response.data.payload.token);
    //       localStorage.setItem(
    //         "refreshToken",
    //         response.data.payload.refreshToken
    //       );
    //       localStorage.setItem(
    //         "user",
    //         JSON.stringify(response.data.payload.user)
    //       );
    //       this.$router.push("/users");
    //     })
    //     .catch((error) => console.log(error));
    // },
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
  },
};
</script>

<style>
.custom__bg {
  background-image: url("../assets/background.svg");
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