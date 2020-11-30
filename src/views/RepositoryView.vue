<template>
  <v-app class="grey lighten-4">
    <v-container>
      <v-row>
        <v-col cols="12">
          <span class="text-h4 font-weight-thin">Research View</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-card outlined tile @click="dialog = true">
            <v-img
              v-if="research"
              :src="`https://narr.ng/${research.thumbnail}`"
              width="100%"
              height="446"
            ></v-img>
          </v-card>
          <!-- <span class="text-h4" v-else>Loading...</span> -->
        </v-col>
        <v-divider vertical class="my-3 hidden-sm-and-down"></v-divider>
        <v-col cols="12" sm="6" md="5" lg="5">
          <v-card outlined tile min-height="400px">
            <v-card-title
              class="body-1 green--text text--darken-4 font-weight-bold"
            >
              {{ research.researchTitle }}
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <div class=" body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Authors(s):</span
                >
                <span
                  v-for="(r, i) in research.authors"
                  :key="i"
                  class="grey--text text--darken-3"
                  >{{ r + " " }}</span
                >
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Category:</span
                >
                <span class="grey--text text--darken-3">{{
                  research.category
                }}</span>
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Genre:</span
                >
                <span class="grey--text text--darken-3">{{
                  research.genre
                }}</span>
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Access Type:</span
                >
                <span class="grey--text text--darken-3">{{
                  research.accessType
                }}</span>
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Monthly Fee (N):</span
                >
                <span class="grey--text text--darken-3">{{
                  research.monthlyFee
                }}</span>
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Pages:</span
                >
                <span class="grey--text text--darken-3">{{
                  research.nPages
                }}</span>
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Status:</span
                >
                <span class="grey--text text--darken-3">{{
                  research.status
                }}</span>
              </div>
              <div class="body-1 my-2">
                <span class="font-weight-bold mr-2 amber--text text--darken-4"
                  >Year:</span
                >
                <span class="grey--text text--darken-3">{{
                  research.year
                }}</span>
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn
                outlined
                @click="readResearch(research._id)"
                class="mt-4 px-4 text-capitalize"
                color="#00a368"
                depressed
                dark
                >Read</v-btn
              >
              <v-divider vertical class="mt-4 ml-2"></v-divider>
              <span class="mt-4 mx-2 body-2 grey--text text--darken-4"
                >Viewed:
              </span>
              <span class="mt-4 body-2 grey--text text--darken-3"
                >20 minutes ago</span
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="11" lg="11">
          <v-tabs class="elevation-1" color="#00a368" align-with-title>
            <!-- <v-tabs-slider color="green"></v-tabs-slider> -->
            <v-tab>
              Description
            </v-tab>
            <v-tab-item class="pa-4">
              {{ research.description }}
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-dialog v-model="dialog" width="1000">
        <v-img
          v-if="research"
          :src="`https://narr.ng/${research.thumbnail}`"
        ></v-img>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
import store from "../store/index";
export default {
  props: ["id"],
  data: () => ({
    research: [],
    dialog: false,
  }),
  methods: {
    readResearch(id) {
      this.$router.push(id + "/read");
      console.log(id);
    },
  },
  created() {
    fetch("/research/" + this.id, {
      headers: {
        "x-token": store.state.token,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        console.log("DATA", data);
        this.research = data.payload;
      })
      .catch((e) => console.log(e));
  },
};
</script>

<style></style>
