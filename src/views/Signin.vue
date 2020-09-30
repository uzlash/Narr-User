<template>
  <v-app>
    <v-main class="grey lighten-4 custom__container">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class tile>
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center font-weight-thin display-2 green--text text--darken-1"
                        >
                          SIGN IN
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" color="blue" fab outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="red" fab outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            color="blue darken-4"
                            fab
                            outlined
                          >
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <!-- <h2
                          class="my-4 font-weight-light text-center"
                        ></h2>-->
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="green darken-1"
                          />
                          <v-text-field
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="green darken-1"
                          />
                        </v-form>
                        <h3 class="text-center mt-3 font-weight-light">
                          Forgot password?
                          <span class="green--text">Click here</span>
                        </h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          @click="goHome()"
                          rounded
                          outlined
                          class="text-capitalize px-8"
                          color="green"
                          dark
                          >Sign In</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      class="green lighten-1 blue-grey darken-4"
                    >
                      <v-card-text class="white--text mt-12">
                        <h2 class="text-center display-1 font-weight-thin mb-4">
                          Hello, Researcher!
                        </h2>
                        <h3 class="text-center font-weight-light">
                          Sign up, and start your research journey with us.
                        </h3>
                        <div class="text-center mt-4">
                          <v-btn
                            class="text-capitalize"
                            rounded
                            outlined
                            dark
                            @click="step++"
                            >Sign Up</v-btn
                          >
                        </div>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col
                      cols="12"
                      md="4"
                      class="amber lighten-1 blue-grey darken-4"
                    >
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
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h2
                          class="text-center font-weight-thin display-2 green--text text--darken-1"
                        >
                          CREATE ACCOUNT
                        </h2>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" color="blue" fab outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" color="red" fab outlined>
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            color="blue darken-4"
                            fab
                            outlined
                          >
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <!-- <h4 class="text-center mt-4">Please sign up using the form below</h4> -->
                        <v-form>
                          <v-text-field
                            label="Name"
                            name="Name"
                            prepend-icon="person"
                            type="text"
                            color="green darken-1"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="green darken-1"
                          />
                          <v-text-field
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="green darken-1"
                          />
                          <v-text-field
                            label="Confirm Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="green darken-1"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          @click="goHome()"
                          rounded
                          outlined
                          class="text-capitalize px-8"
                          color="green"
                          dark
                          >Sign Up</v-btn
                        >
                      </div>
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
export default {
  data: () => ({
    step: 1,
  }),
  methods: {
    goHome() {
      return this.$router.push("/");
    },
  },
};
</script>

<style>
</style>