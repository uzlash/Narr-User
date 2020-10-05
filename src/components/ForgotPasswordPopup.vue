<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex align-center jusify-center">
          <h3 class="text-center font-weight-light">Forgot password?</h3>
          <v-btn
            color="#00A368"
            class="text-capitalize"
            text
            v-bind="attrs"
            v-on="on"
          >
            Click Here!
          </v-btn>
        </div>
      </template>
      <v-card>
        <v-card-title class="text-h6 font-weight-regular" primary-title>
          Reset Password
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div v-if="!showSuccess">
            <span>Enter your email to reset your password</span>
            <form @submit.prevent>
              <v-text-field
                v-model.trim="email"
                label="you@email.com"
                required
                color="#00A368"
              ></v-text-field>
            </form>
            <v-alert v-if="errorMsg !== ''" type="error">{{
              errorMsg
            }}</v-alert>
            <!-- <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p> -->
            <v-btn dark @click="resetPassword()" color="#00A368">Reset</v-btn>
          </div>
          <div v-else>
            <v-alert type="success"
              >Success! Check your email for a password reset link</v-alert
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    email: "",
    showSuccess: false,
    errorMsg: "",
  }),
  methods: {
    async resetPassword() {
      // reset logic
    },
  },
};
</script>
