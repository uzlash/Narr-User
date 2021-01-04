<template>
  <v-app>
    <v-main class="grey lighten-4 custom__container custom__bg">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8" class="pa-0">
            <v-card class tile>
              <v-col cols="12">
                <h2 class="text-h6 font-weight-light">
                  Thank you for using Nigeria Academic Research Repository
                  (Narr), Click on the sign in button to sign in or close the
                  app!
                </h2>
              </v-col>
              <v-col cols="3">
                <v-btn
                  @click="signIn()"
                  rounded
                  class="text-capitalize px-8 mb-4"
                  color="#00A368"
                  dark
                  >Signin</v-btn
                >
                <v-btn
                  @click="disconnect()"
                  rounded
                  class="text-capitalize px-8 mb-4"
                  color="#00A368"
                  dark
                  >Disconnect</v-btn
                >
              </v-col>
            </v-card></v-col
          >
        </v-row></v-container
      ></v-main
    >
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    signIn() {
      this.$router.push('/signin')
    },
    disconnect() {
      console.log(this.$socket)
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
