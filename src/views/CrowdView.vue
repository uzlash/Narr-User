<template>
  <v-app class="grey lighten-4">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7" lg="7">
          <v-card class="mx-auto" max-width="750">
            <v-img
              height="400"
              src="https://miro.medium.com/max/1146/1*KhUes1b3TtkStUXseSseEA.png"
            ></v-img>
            <v-card-title>Support SVM & Regression Research</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <div class="mt-3">
                <span class="body-1"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt molestias nostrum ab dolorem saepe alias voluptatum
                  recusandae nemo ratione esse! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Magni quos, laudantium est
                  consequatur esse facere, quia labore nesciunt temporibus qui
                  illum autem omnis ad id nulla culpa nostrum dolores. Officiis.
                  ficia impedit voluptates saepe animi quisquam iure facilis
                  unde consequuntur optio iste, itaque magnam
                  onsequuntur optio iste,
                  onsequuntur optio iste, itaque magnam
                 itaque magnam
                  
                  ?</span
                >
              </div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <div class="px-4 py-2">
              <span class="body-1 font-weight-light">Funding</span>
              <v-progress-linear
                class="my-2"
                color="#00a368"
                height="10"
                value="30"
              ></v-progress-linear>
              <span class="font-weight-bold">N7,000,000</span> raised of
              <span class="font-weight-bold">N10,000,000 </span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="5" md="5">
          <v-card>
            <v-toolbar flat color="#00a368" dark>
              <v-toolbar-title>Payment Method </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-tabs v-model="tabs" fixed-tabs>
                <v-tabs-slider color="#00a368"></v-tabs-slider>
                <v-tab href="#credit" class="green--text">
                  <h3 class="icon-text">
                    Credit Card
                    <v-icon color=""> mdi-credit-card-outline</v-icon>
                  </h3>
                </v-tab>

                <v-tab href="#paypal" class="green--text">
                  <h3 class="text-icon">
                    Paypal <v-icon color="">fab fa-cc-paypal</v-icon>
                  </h3>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tabs">
                <v-tab-item value="paypal">
                  <v-card flat>
                    <vcard-text>
                      <div class="text-center mt-5">
                        <img src="../assets/paypal.png" alt="" height="75" />
                      </div>
                      <v-row justify="center">
                        <v-col cols="6">
                          <span>Amount*</span>
                          <v-text-field
                            solo
                            color="#00a368"
                            :rules="[rules.required]"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="6">
                          <v-btn
                            large
                            block
                            height="50"
                            color="blue"
                            class="icon-text white--text"
                          >
                            PAY NOW <v-icon right> fab fa-cc-paypal</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </vcard-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
              <v-tabs-items v-model="tabs">
                <v-tab-item value="credit">
                  <v-row justify="center" class="mt-5">
                    <v-icon color="" class="mx-4" size="45"
                      >fab fa-cc-visa</v-icon
                    >

                    <v-icon color="" class="mx-4" size="45"
                      >fab fa-cc-mastercard</v-icon
                    >

                    <v-icon color="" class="mx-4" size="45">
                      fas fa-credit-card
                    </v-icon>
                  </v-row>

                  <v-card-text>
                    <v-col cols="12" class="px-2 py-0">
                      <span>Payment Amount*</span>
                      <v-text-field
                        :rules="[rules.required]"
                        outlined
                        solo
                        color="#00a368"
                        placeholder="N0.0"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" class="px-2 py-0">
                      <span>Name on Card*</span>
                      <v-text-field
                        outlined
                        placeholder="John doe"
                        solo
                        :rules="[rules.required, r]"
                        color="#00a368"
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" class="px-2 py-0 ">
                      <span>Card Number (No Space or Hypens*</span>
                      <v-text-field
                        outlined
                        v-cardformat:formatCardNumber
                        solo
                        color="#00a368"
                        placeholder="XXXX XXXX XXXX XXXX"
                      >
                      </v-text-field>
                    </v-col>
                    <v-row class="ma-0">
                      <v-col cols="6" class="px-2 py-0">
                        <span>Exp Date (mm/yy)*</span>
                        <v-text-field
                          outlined
                          :maxlength="maxexp"
                          v-cardformat:formatCardExpiry
                          solo
                          color="#00a368"
                          placeholder="XX/XX"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="6" class="px-2 py-0">
                        <span>Card Code (CVC)*</span>
                        <v-text-field
                          outlined
                          :maxlength="3"
                          v-cardformat:formatCardCVC
                          solo
                          color="#00a368"
                          placeholder="XXX"
                        >
                        </v-text-field>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn elevation="" color="red" outlined
                            >Cancel</v-btn
                          >
                          <v-btn
                            elevation=""
                            color="#00a368"
                            class="white--text"
                            >Pay Now</v-btn
                          >
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      maxcvc: 3,
      maxexp: 4,
      tabs: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rules: {
        required: (v) => !!v || "Field is required",
        counter: (v) =>
          (v && v.length >= 3) || "Minimum length is 3 characters",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        password: (value) =>
          (value && value.length >= 6) || "Minimum length is 6 characters",
      },
      numberRule: (v) => {
        if (!v.trim()) return true;
        if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
        return "Number has to be 3";
      },
    };
  },
};
</script>
